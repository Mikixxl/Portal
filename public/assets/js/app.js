/* IFB Private Client Portal - app engine */
(function () {
  "use strict";
  var cfg = window.PORTAL_CONFIG || {};
  var PREVIEW = /[?&]preview\b/.test(location.search);
  var sb = null;
  var DATA = null;     // proposal content {charts, en, fr, ...}
  var LANG = (navigator.language || "en").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
  var SECTION = 0;
  var liveCharts = {};
  var CLIENT = null, ENG = null, CURVER = null, ACCEPTED = null, UID = null;

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (id) { return document.getElementById(id); };
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function fmt(n, lang) { try { return new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-GB").format(n); } catch (e) { return "" + n; } }
  function logoIMG(cls) { return '<img class="' + cls + '" src="/assets/img/ifb-logo.png?v=20260613c" alt="International Finance Bank" decoding="async">'; }
  function crestIMG(cls) { return '<img class="' + cls + '" src="/assets/img/crest.png?v=20260613c" alt="" decoding="async">'; }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    if (PREVIEW) { startPreview(); return; }
    try {
      if (!cfg.url || !cfg.anonKey || !window.supabase) throw new Error("config");
      sb = window.supabase.createClient(cfg.url, cfg.anonKey);
      var s = await sb.auth.getSession();
      if (s && s.data && s.data.session) { await loadAndEnter(); }
      else { showLogin(); }
    } catch (e) {
      showLogin();
    }
    el("loader").classList.add("hidden");
  }

  function startPreview() {
    window.addEventListener("message", function (e) {
      if (e.origin !== location.origin) return;
      var d = e.data || {};
      if (d.type === "ifb_preview_data" && d.content) {
        DATA = d.content;
        if (!DATA[LANG]) LANG = "en";
        el("login").classList.add("hidden");
        enterApp();
        el("loader").classList.add("hidden");
      }
    });
    try { (window.parent && window.parent !== window ? window.parent : window.opener).postMessage({ type: "ifb_preview_ready" }, location.origin); } catch (e) {}
  }

  /* ---------- login ---------- */
  function showLogin() {
    var t = (DATA && DATA[LANG]) ? DATA[LANG].login : fallbackLogin();
    var ui = (DATA && DATA[LANG]) ? DATA[LANG].ui : { brand: "International Finance Bank", portal: "Private Client Portal", confidential: "Strictly Private & Confidential" };
    el("login").innerHTML =
      '<div class="login-card">' +
        logoIMG("login-logo") +
        '<div class="login-eyebrow">' + esc(ui.portal) + '</div>' +
        '<h1>' + esc(t.heading) + '</h1>' +
        '<p class="sub">' + esc(t.sub) + '</p>' +
        '<div class="field"><label>' + (LANG==="fr"?"Identifiant":"Username") + '</label><input id="li-email" type="text" autocomplete="username" autocapitalize="off" spellcheck="false"></div>' +
        '<div class="field"><label>' + esc(t.password) + '</label><input id="li-pass" type="password" autocomplete="current-password"></div>' +
        '<div class="login-err" id="li-err"></div>' +
        '<button class="btn btn-gold" id="li-btn">' + esc(t.submit) + '</button>' +
        '<div class="login-secure">' + lock() + '<span>' + esc(t.secured) + '</span></div>' +
      '</div>' +
      '<div class="login-foot">' + esc(ui.brand) + ' &middot; ' + esc(ui.confidential) + '</div>';
    el("login").classList.remove("hidden");
    el("app").style.display = "none";
    var btn = el("li-btn"), em = el("li-email"), pw = el("li-pass");
    btn.addEventListener("click", doLogin);
    pw.addEventListener("keydown", function (e) { if (e.key === "Enter") doLogin(); });
    em.addEventListener("keydown", function (e) { if (e.key === "Enter") pw.focus(); });
    em.focus();
  }
  function fallbackLogin() { return { heading: "Private Client Access", sub: "Please sign in to continue.", email: "Email address", password: "Password", submit: "Sign in", working: "Signing in", error: "Those credentials were not recognised.", secured: "Protected by encrypted authentication." }; }

  async function doLogin() {
    var t = (DATA && DATA[LANG]) ? DATA[LANG].login : fallbackLogin();
    var raw = el("li-email").value.trim(); var em = (raw.indexOf("@")===-1 ? raw.toLowerCase()+"@ifcifb.com" : raw.toLowerCase()); var pw = el("li-pass").value, btn = el("li-btn"), err = el("li-err");
    err.textContent = "";
    if (!em || !pw) { err.textContent = t.error; return; }
    btn.disabled = true; btn.textContent = t.working + "…";
    try {
      var r = await sb.auth.signInWithPassword({ email: em, password: pw });
      if (r.error) throw r.error;
      await loadAndEnter();
    } catch (e) {
      err.textContent = t.error; btn.disabled = false; btn.textContent = t.submit;
    }
  }

  function setLoginErr(m){ var e = el("li-err"); if (e) e.textContent = m; }
  async function safeSignOut(){ try { await sb.auth.signOut(); } catch (e) {} DATA = null; CLIENT = null; ENG = null; CURVER = null; ACCEPTED = null; }

  async function loadAndEnter() {
    try {
      var sess = await sb.auth.getSession();
      var u = sess && sess.data && sess.data.session && sess.data.session.user;
      if (!u) { showLogin(); return; }
      UID = u.id;
      var cr = await sb.from("clients").select("user_id, client_name, slug, reference, must_change_password").eq("user_id", UID).maybeSingle();
      if (cr.error || !cr.data) { await safeSignOut(); showLogin(); setLoginErr("No proposal is available for this account."); return; }
      CLIENT = cr.data;
      if (CLIENT.must_change_password === true) { showChangePassword(loadVersionAndEnter); return; }
      await loadVersionAndEnter();
    } catch (e) { await safeSignOut(); showLogin(); }
  }

  async function loadVersionAndEnter() {
    try {
      var eg = await sb.from("engagements").select("id, current_version_id, status").eq("client_user_id", UID).maybeSingle();
      if (eg.error || !eg.data) { await safeSignOut(); showLogin(); setLoginErr("No proposal is available for this account yet."); return; }
      ENG = eg.data;
      var ver = null;
      if (ENG.current_version_id) {
        var v1 = await sb.from("proposal_versions").select("id, version, label, state, content").eq("id", ENG.current_version_id).maybeSingle();
        if (!v1.error && v1.data && (v1.data.state === "shared" || v1.data.state === "final")) ver = v1.data;
      }
      if (!ver) {
        var v2 = await sb.from("proposal_versions").select("id, version, label, state, content").eq("engagement_id", ENG.id).in("state", ["shared", "final"]).order("version", { ascending: false }).limit(1).maybeSingle();
        if (!v2.error && v2.data) ver = v2.data;
      }
      if (!ver || !ver.content) { await safeSignOut(); showLogin(); setLoginErr("No proposal is available for this account yet."); return; }
      CURVER = { id: ver.id, version: ver.version, label: ver.label, state: ver.state, engagement_id: ENG.id };
      DATA = ver.content;
      if (!DATA[LANG]) LANG = "en";
      try {
        var ac = await sb.from("acceptances").select("accepted_name, accepted_at").eq("version_id", ver.id).order("accepted_at", { ascending: false }).limit(1).maybeSingle();
        ACCEPTED = (!ac.error && ac.data) ? ac.data : null;
      } catch (e) { ACCEPTED = null; }
      enterApp();
    } catch (e) { await safeSignOut(); showLogin(); }
  }

  function t3() {
    if (LANG === "fr") return {
      cpEyebrow: "Portail Client Privé", cpHeading: "Définir votre mot de passe",
      cpSub: "Pour votre sécurité, choisissez un nouveau mot de passe avant de continuer.",
      cpNew: "Nouveau mot de passe", cpConfirm: "Confirmer le mot de passe", cpHint: "Au moins 10 caractères.",
      cpSave: "Enregistrer et continuer", cpWorking: "Enregistrement",
      cpShort: "Utilisez au moins 10 caractères.", cpMismatch: "Les deux mots de passe ne correspondent pas.",
      cpFail: "Cela n'a pas fonctionné. Veuillez réessayer.",
      acceptBtn: "Accepter et signer", accepted: "Acceptée",
      amHeading: "Accepter cette proposition",
      amBody: "En saisissant votre nom légal complet et en confirmant, vous reconnaissez avoir lu et accepté cette proposition. Votre nom, la date et l'heure, la version du document et votre appareil sont enregistrés comme votre signature électronique.",
      amName: "Nom légal complet", amConsent: "J'ai lu et j'accepte cette proposition.",
      amConfirm: "Confirmer l'acceptation", amCancel: "Annuler",
      amNeedName: "Veuillez saisir votre nom légal complet.", amNeedConsent: "Veuillez cocher la case pour confirmer.",
      amFail: "Impossible d'enregistrer votre acceptation. Veuillez réessayer."
    };
    return {
      cpEyebrow: "Private Client Portal", cpHeading: "Set your password",
      cpSub: "For your security, choose a new password before continuing.",
      cpNew: "New password", cpConfirm: "Confirm password", cpHint: "At least 10 characters.",
      cpSave: "Save and continue", cpWorking: "Saving",
      cpShort: "Use at least 10 characters.", cpMismatch: "The two passwords do not match.",
      cpFail: "That did not work. Please try again.",
      acceptBtn: "Accept & sign", accepted: "Accepted",
      amHeading: "Accept this proposal",
      amBody: "By typing your full legal name and confirming, you acknowledge that you have read and accept this proposal. Your name, the date and time, the document version and your device are recorded as your electronic signature.",
      amName: "Full legal name", amConsent: "I have read and accept this proposal.",
      amConfirm: "Confirm acceptance", amCancel: "Cancel",
      amNeedName: "Please enter your full legal name.", amNeedConsent: "Please tick the box to confirm.",
      amFail: "Could not record your acceptance. Please try again."
    };
  }

  function showChangePassword(next) {
    el("app").style.display = "none";
    var x = t3();
    el("login").innerHTML =
      '<div class="login-card">' + logoIMG("login-logo") +
        '<div class="login-eyebrow">' + esc(x.cpEyebrow) + '</div>' +
        '<h1>' + esc(x.cpHeading) + '</h1>' +
        '<p class="sub">' + esc(x.cpSub) + '</p>' +
        '<div class="field"><label>' + esc(x.cpNew) + '</label><input id="cp1" type="password" autocomplete="new-password"></div>' +
        '<div class="field"><label>' + esc(x.cpConfirm) + '</label><input id="cp2" type="password" autocomplete="new-password"></div>' +
        '<div class="login-err" id="cp-err"></div>' +
        '<button class="btn btn-gold" id="cp-btn">' + esc(x.cpSave) + '</button>' +
        '<div class="login-secure">' + lock() + '<span>' + esc(x.cpHint) + '</span></div>' +
      '</div>';
    el("login").classList.remove("hidden");
    var b = el("cp-btn");
    async function submit() {
      var p1 = el("cp1").value, p2 = el("cp2").value, err = el("cp-err"); err.textContent = "";
      if (!p1 || p1.length < 10) { err.textContent = x.cpShort; return; }
      if (p1 !== p2) { err.textContent = x.cpMismatch; return; }
      b.disabled = true; b.textContent = x.cpWorking + "...";
      try {
        var r = await sb.auth.updateUser({ password: p1 });
        if (r.error) throw r.error;
        await sb.from("clients").update({ must_change_password: false, updated_at: new Date().toISOString() }).eq("user_id", UID);
        if (CLIENT) CLIENT.must_change_password = false;
        await next();
      } catch (e) { b.disabled = false; b.textContent = x.cpSave; err.textContent = x.cpFail; }
    }
    b.addEventListener("click", submit);
    el("cp2").addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    el("cp1").focus();
  }

  function acceptControl() {
    if (PREVIEW || !CURVER) return "";
    var x = t3();
    if (ACCEPTED) {
      var ttl = esc((ACCEPTED.accepted_name || "") + (ACCEPTED.accepted_at ? " - " + new Date(ACCEPTED.accepted_at).toLocaleString() : ""));
      return '<span class="prev-pill" title="' + ttl + '" style="background:#1f7a44;color:#fff;border-color:#1f7a44">' + esc(x.accepted) + '</span>';
    }
    return '<button class="tb-btn" id="tb-accept" style="border-color:#B08D2E;color:#9a771f;font-weight:600">' + esc(x.acceptBtn) + '</button>';
  }

  function openAccept() {
    if (!CURVER || ACCEPTED) return;
    var x = t3();
    var host = document.createElement("div"); host.id = "acceptHost";
    host.innerHTML =
      '<div style="position:fixed;inset:0;background:rgba(15,23,42,.55);display:flex;align-items:center;justify-content:center;z-index:9999;padding:18px" id="ac-scrim">' +
        '<div style="background:#fff;border-radius:14px;max-width:470px;width:100%;padding:24px 22px;font-family:DM Sans,system-ui,sans-serif;box-shadow:0 24px 70px rgba(15,23,42,.35)">' +
          '<h3 style="margin:0 0 10px;font-family:Cormorant Garamond,Georgia,serif;font-size:26px;color:#1B2A4A">' + esc(x.amHeading) + '</h3>' +
          '<p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#3a4658">' + esc(x.amBody) + '</p>' +
          '<label style="display:block;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#5A6472;margin-bottom:6px">' + esc(x.amName) + '</label>' +
          '<input id="ac-name" type="text" autocomplete="name" style="width:100%;box-sizing:border-box;padding:11px 12px;border:1px solid #cdd5e2;border-radius:9px;font-size:15px;margin-bottom:14px">' +
          '<label style="display:flex;gap:9px;align-items:flex-start;font-size:13.5px;color:#3a4658;line-height:1.5;margin-bottom:6px;cursor:pointer">' +
            '<input id="ac-consent" type="checkbox" style="margin-top:2px;width:16px;height:16px"> <span>' + esc(x.amConsent) + '</span></label>' +
          '<div id="ac-err" style="color:#b3261e;font-size:13px;min-height:18px;margin:2px 0 8px"></div>' +
          '<div style="display:flex;gap:10px;justify-content:flex-end">' +
            '<button id="ac-cancel" style="padding:10px 16px;border:1px solid #cdd5e2;background:#fff;border-radius:9px;font-size:14px;cursor:pointer;color:#3a4658">' + esc(x.amCancel) + '</button>' +
            '<button id="ac-go" style="padding:10px 18px;border:0;background:#B08D2E;color:#fff;border-radius:9px;font-size:14px;font-weight:600;cursor:pointer">' + esc(x.amConfirm) + '</button>' +
          '</div>' +
        '</div></div>';
    document.body.appendChild(host);
    function close() { host.remove(); }
    el("ac-cancel").addEventListener("click", close);
    el("ac-scrim").addEventListener("click", function (e) { if (e.target === el("ac-scrim")) close(); });
    var go = el("ac-go");
    go.addEventListener("click", async function () {
      var nm = el("ac-name").value.trim(), ok = el("ac-consent").checked, err = el("ac-err"); err.textContent = "";
      if (!nm) { err.textContent = x.amNeedName; return; }
      if (!ok) { err.textContent = x.amNeedConsent; return; }
      go.disabled = true; go.textContent = "...";
      try {
        var payload = { version_id: CURVER.id, engagement_id: CURVER.engagement_id, client_user_id: UID, accepted_name: nm, accepted_at: new Date().toISOString(), signature_kind: "typed", signature_data: nm, user_agent: navigator.userAgent };
        var r = await sb.from("acceptances").insert(payload).select("accepted_name, accepted_at").maybeSingle();
        if (r.error) throw r.error;
        ACCEPTED = r.data || { accepted_name: nm, accepted_at: payload.accepted_at };
        close(); enterApp();
      } catch (e) { go.disabled = false; go.textContent = x.amConfirm; err.textContent = x.amFail; }
    });
    el("ac-name").focus();
  }

  /* ---------- app shell ---------- */
  function enterApp() {
    el("login").classList.add("hidden");
    var ui = DATA[LANG].ui, m = DATA[LANG].meta;
    el("app").style.display = "block";
    el("app").innerHTML =
      '<header class="topbar">' +
        '<div class="brand">' + '<span class="brand-chip">' + logoIMG("blogo") + '</span>' + '<div class="name">' + esc(ui.brand) +
          '<small>' + esc(ui.portal) + '</small></div></div>' +
        '<div class="tb-actions">' +
          '<button class="tb-btn lang" id="tb-lang">' + globe() + '<span>' + esc(ui.toLang) + '</span></button>' +
          '<button class="tb-btn" id="tb-print">' + printer() + '<span>' + esc(ui.print) + '</span></button>' +
          acceptControl() +
          (PREVIEW ? '<span class="prev-pill">Administrator preview</span>' : '<button class="tb-btn" id="tb-out">' + esc(ui.signOut) + '</button>') +
        '</div>' +
      '</header>' +
      '<div class="mobnav"><select id="mobsel"></select></div>' +
      '<div class="layout">' +
        '<aside class="sidebar" id="sidebar"></aside>' +
        '<main class="main"><div class="scrollwrap">' +
          '<div id="sec"></div>' +
          '<div class="pager" id="pager"></div>' +
          '<div class="docfoot"><span>' + esc(m.prepared) + '</span><span>' + esc(ui.confidential) + '</span></div>' +
        '</div></main>' +
      '</div>';
    el("tb-lang").addEventListener("click", toggleLang);
    el("tb-print").addEventListener("click", doPrint);
    if (el("tb-accept")) el("tb-accept").addEventListener("click", openAccept);
    if (!PREVIEW) el("tb-out").addEventListener("click", async function () { await sb.auth.signOut(); DATA = null; location.reload(); });
    el("mobsel").addEventListener("change", function (e) { go(+e.target.value); });
    buildSidebar();
    render();
  }

  function buildSidebar() {
    var L = DATA[LANG], secs = L.sections;
    var html = '<div class="side-crest">' + crestIMG("screst") + '</div>' + '<div class="side-meta">' +
      '<div class="lbl">' + esc(L.ui.preparedFor) + '</div><div class="val">' + esc(DATA.client_name || "—") + '</div>' +
      '<div class="lbl">' + esc(L.ui.reference) + '</div><div class="val" style="font-size:14px">' + esc(L.meta.reference) + '</div>' +
      '</div><div class="side-title">' + esc(L.ui.contents) + '</div>';
    secs.forEach(function (s, i) {
      html += '<button class="nav-item' + (i === SECTION ? ' active' : '') + '" data-i="' + i + '"><span class="num">' + esc(s.n) + '</span><span>' + esc(s.nav) + '</span></button>';
    });
    var sb2 = el("sidebar"); sb2.innerHTML = html;
    [].forEach.call(sb2.querySelectorAll(".nav-item"), function (b) { b.addEventListener("click", function () { go(+b.dataset.i); }); });
    var sel = el("mobsel");
    sel.innerHTML = secs.map(function (s, i) { return '<option value="' + i + '"' + (i === SECTION ? ' selected' : '') + '>' + esc(s.n + ". " + s.nav) + '</option>'; }).join("");
  }

  function go(i) { SECTION = i; buildSidebar(); render(); window.scrollTo({ top: 0, behavior: "smooth" }); }

  function toggleLang() {
    LANG = (LANG === "en") ? "fr" : "en";
    // rebuild shell text (brand/buttons/meta) + content
    enterApp();
  }

  /* ---------- render section ---------- */
  function render() {
    destroyCharts();
    var L = DATA[LANG], s = L.sections[SECTION];
    var html = '<section class="page"><div class="kicker">' + esc(L.meta.subtitle) + '</div>' +
      '<h1>' + esc(s.title) + '</h1><div class="title-rule"></div>';
    s.blocks.forEach(function (b) { html += block(b); });
    html += '</section>';
    el("sec").innerHTML = html;
    // charts
    s.blocks.forEach(function (b) { if (b.t === "chart") drawChart("cv-" + b.kind, b.kind, false); });
    // pager
    var secs = L.sections, p = "";
    if (SECTION > 0) p += '<button data-i="' + (SECTION - 1) + '"><span class="pl">‹ ' + esc(secs[SECTION - 1].n) + '</span>' + esc(secs[SECTION - 1].nav) + '</button>'; else p += '<button disabled></button>';
    if (SECTION < secs.length - 1) p += '<button class="next" data-i="' + (SECTION + 1) + '"><span class="pl">' + esc(secs[SECTION + 1].n) + ' ›</span>' + esc(secs[SECTION + 1].nav) + '</button>'; else p += '<button class="next" disabled></button>';
    var pg = el("pager"); pg.innerHTML = p;
    [].forEach.call(pg.querySelectorAll("button"), function (b) { if (!b.disabled) b.addEventListener("click", function () { go(+b.dataset.i); }); });
  }

  function block(b) {
    switch (b.t) {
      case "lead": return '<p class="lead">' + esc(b.x) + '</p>';
      case "p": return '<p>' + esc(b.x) + '</p>';
      case "h": return '<h2>' + esc(b.x) + '</h2>';
      case "ul": return '<ul class="list">' + b.x.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join("") + '</ul>';
      case "ol": return '<ol class="list">' + b.x.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join("") + '</ol>';
      case "callout": return '<div class="callout">' + esc(b.x) + '</div>';
      case "note": return '<div class="note">' + esc(b.x) + '</div>';
      case "kpis": return '<div class="kpis">' + b.x.map(function (k) { return '<div class="kpi"><div class="k">' + esc(k.k) + '</div><div class="v">' + esc(k.v) + '</div></div>'; }).join("") + '</div>';
      case "steps": return '<div class="steps">' + b.x.map(function (st) { return '<div class="step"><h3>' + esc(st.h) + '</h3><p>' + esc(st.b) + '</p></div>'; }).join("") + '</div>';
      case "table": return tableHTML(b);
      case "chart": return '<div class="chartcard"><div class="cv"><canvas id="cv-' + esc(b.kind) + '"></canvas></div></div>' + (b.caption ? '<div class="chart-cap">' + esc(b.caption) + '</div>' : "");
      default: return "";
    }
  }

  function tableHTML(b) {
    var aligns = b.aligns || [], total = b.total || [];
    function cls(i) { return aligns[i] === "right" ? " class=ar" : aligns[i] === "center" ? " class=ac" : ""; }
    var h = "";
    if (b.caption) h += '<div class="tbl-cap">' + esc(b.caption) + '</div>';
    h += '<div class="tablewrap"><table class="t"><thead><tr>' +
      b.head.map(function (c, i) { return '<th' + cls(i) + '>' + esc(c) + '</th>'; }).join("") + '</tr></thead><tbody>';
    b.rows.forEach(function (r, ri) {
      h += '<tr' + (total.indexOf(ri) > -1 ? ' class="total"' : '') + '>' +
        r.map(function (c, i) { return '<td' + cls(i) + '>' + esc(c) + '</td>'; }).join("") + '</tr>';
    });
    return h + '</tbody></table></div>';
  }

  /* ---------- charts ---------- */
  function chartConfig(kind, lang, forPrint) {
    var C = DATA.charts, cl = DATA[lang].chartLabels;
    var navy = "#1B2A4A", gold = "#B08D2E", goldL = "#C9A24B", tint = "#9fb0c9", mist = "#dce3ee", grey = "#5A6472";
    var locale = lang === "fr" ? "fr-FR" : "en-GB";
    var eur = function (n) { return new Intl.NumberFormat(locale, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n); };
    var base = { responsive: true, maintainAspectRatio: false, animation: forPrint ? false : { duration: 700 },
      plugins: { legend: { labels: { font: { family: "DM Sans", size: 12 }, color: navy, usePointStyle: true, padding: 16 } } } };
    if (kind === "allocation") {
      return { type: "doughnut",
        data: { labels: cl.allocation, datasets: [{ data: C.allocation, backgroundColor: [navy, gold, tint, goldL], borderColor: "#fff", borderWidth: 3 }] },
        options: Object.assign({}, base, { cutout: "58%", plugins: Object.assign({}, base.plugins, {
          legend: { position: "right", labels: base.plugins.legend.labels },
          tooltip: { callbacks: { label: function (c) { return c.label + ": " + c.parsed + "%  (" + eur(C.allocationAmounts[c.dataIndex]) + ")"; } } } }) }) };
    }
    if (kind === "projection") {
      var years = [], i; for (i = 0; i <= 10; i++) years.push(i);
      var cols = [tint, gold, navy];
      var ds = C.rates.map(function (rate, k) {
        var arr = years.map(function (t) { return Math.round(C.base * Math.pow(1 + rate, t)); });
        return { label: cl.projection[k], data: arr, borderColor: cols[k], backgroundColor: cols[k],
          borderWidth: k === 2 ? 3 : 2, tension: .25, pointRadius: forPrint ? 0 : 2, pointHoverRadius: 4, fill: false };
      });
      return { type: "line",
        data: { labels: years.map(function (y) { return (lang === "fr" ? "A" : "Y") + y; }), datasets: ds },
        options: Object.assign({}, base, { interaction: { mode: "index", intersect: false },
          scales: { x: { title: { display: true, text: cl.projYear, color: grey, font: { family: "DM Sans" } }, grid: { color: mist }, ticks: { color: grey } },
            y: { title: { display: true, text: cl.projValue, color: grey, font: { family: "DM Sans" } }, grid: { color: mist },
              ticks: { color: grey, callback: function (v) { return (v / 1e6).toFixed(1) + "M"; } } } },
          plugins: Object.assign({}, base.plugins, { tooltip: { callbacks: { label: function (c) { return c.dataset.label + ": " + eur(c.parsed.y); } } } }) }) };
    }
    if (kind === "fees") {
      return { type: "bar",
        data: { labels: cl.fees, datasets: [
          { label: cl.feesAxisEur, data: C.fees.eur, backgroundColor: navy, borderRadius: 5, yAxisID: "y", order: 2 },
          { type: "line", label: cl.feesAxisPct, data: C.fees.pct, borderColor: gold, backgroundColor: gold, borderWidth: 3, tension: .3, pointRadius: forPrint ? 0 : 4, yAxisID: "y1", order: 1 }
        ] },
        options: Object.assign({}, base, {
          scales: { x: { grid: { display: false }, ticks: { color: navy, font: { family: "DM Sans", size: 13 } } },
            y: { position: "left", grid: { color: mist }, ticks: { color: grey, callback: function (v) { return eur(v); } }, title: { display: true, text: cl.feesAxisEur, color: grey } },
            y1: { position: "right", grid: { display: false }, ticks: { color: gold, callback: function (v) { return v + "%"; } }, title: { display: true, text: cl.feesAxisPct, color: gold }, min: 0 } },
          plugins: Object.assign({}, base.plugins, { tooltip: { callbacks: { label: function (c) { return c.datasetIndex === 0 ? eur(c.parsed.y) : c.parsed.y + "%"; } } } }) }) };
    }
  }

  function drawChart(canvasId, kind, forPrint) {
    var cv = el(canvasId); if (!cv || !window.Chart) return null;
    if (liveCharts[canvasId]) { liveCharts[canvasId].destroy(); }
    var ch = new Chart(cv.getContext("2d"), chartConfig(kind, LANG, forPrint));
    liveCharts[canvasId] = ch; return ch;
  }
  function destroyCharts() { Object.keys(liveCharts).forEach(function (k) { try { liveCharts[k].destroy(); } catch (e) {} delete liveCharts[k]; }); }

  /* ---------- print ---------- */
  async function doPrint() {
    buildPrintRoot();
    await renderPrintCharts();
    window.print();
  }

  function buildPrintRoot() {
    var L = DATA[LANG], m = L.meta, ui = L.ui;
    var html = '<div class="p-cover">' +
      '<img class="pc-logo" src="/assets/img/ifb-logo.png?v=20260613c" alt="">' +
      '<div class="pc-brand">' + esc(ui.brand) + '</div>' +
      '<h1>' + esc(m.title) + '</h1>' +
      '<div class="pc-sub">' + esc(m.subtitle) + '</div>' +
      '<div class="pc-meta">' + esc(ui.preparedFor) + ': ' + esc(DATA.client_name) + '<br>' +
        esc(ui.reference) + ': ' + esc(m.reference) + '<br>' + esc(m.date) + '</div>' +
      '<img class="pc-crest" src="/assets/img/crest.png?v=20260613c" alt="">' +
      '<div class="pc-conf">' + esc(m.confidential) + '</div></div>';
    L.sections.forEach(function (s) {
      html += '<div class="p-sec"><h1>' + esc(s.n + ". " + s.title) + '</h1>';
      s.blocks.forEach(function (b) { html += pblock(b); });
      html += '</div>';
    });
    el("print-root").innerHTML = html;
  }

  function pblock(b) {
    switch (b.t) {
      case "lead": return '<p class="lead">' + esc(b.x) + '</p>';
      case "p": return '<p>' + esc(b.x) + '</p>';
      case "h": return '<h2>' + esc(b.x) + '</h2>';
      case "ul": return '<ul>' + b.x.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join("") + '</ul>';
      case "ol": return '<ol>' + b.x.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join("") + '</ol>';
      case "callout": return '<div class="p-callout">' + esc(b.x) + '</div>';
      case "note": return '<div class="p-note">' + esc(b.x) + '</div>';
      case "kpis": return '<ul class="p-kpis">' + b.x.map(function (k) { return '<li><div class="k">' + esc(k.k) + '</div><div class="v">' + esc(k.v) + '</div></li>'; }).join("") + '</ul>';
      case "steps": return '<ul class="p-steps">' + b.x.map(function (st) { return '<li><b>' + esc(st.h) + '</b><br>' + esc(st.b) + '</li>'; }).join("") + '</ul>';
      case "table": return ptable(b);
      case "chart": return '<div class="p-chart"><img data-kind="' + esc(b.kind) + '" alt="chart">' + (b.caption ? '<div class="pc-cap">' + esc(b.caption) + '</div>' : "") + '</div>';
      default: return "";
    }
  }
  function ptable(b) {
    var aligns = b.aligns || [], total = b.total || [];
    function cls(i) { return aligns[i] === "right" ? " class=ar" : aligns[i] === "center" ? " class=ac" : ""; }
    var h = "";
    if (b.caption) h += '<div class="p-note" style="background:none;color:#777;padding-left:0;font-weight:600;letter-spacing:.1em;text-transform:uppercase">' + esc(b.caption) + '</div>';
    h += '<table><thead><tr>' + b.head.map(function (c, i) { return '<th' + cls(i) + '>' + esc(c) + '</th>'; }).join("") + '</tr></thead><tbody>';
    b.rows.forEach(function (r, ri) { h += '<tr' + (total.indexOf(ri) > -1 ? ' class="total"' : '') + '>' + r.map(function (c, i) { return '<td' + cls(i) + '>' + esc(c) + '</td>'; }).join("") + '</tr>'; });
    return h + '</tbody></table>';
  }

  async function renderPrintCharts() {
    var imgs = el("print-root").querySelectorAll(".p-chart img[data-kind]");
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i], kind = img.getAttribute("data-kind");
      var c = document.createElement("canvas");
      var sq = kind === "allocation";
      c.width = sq ? 760 : 1000; c.height = sq ? 420 : 460;
      c.style.position = "fixed"; c.style.left = "-9999px"; c.style.width = c.width + "px"; c.style.height = c.height + "px";
      document.body.appendChild(c);
      var ch = new Chart(c.getContext("2d"), chartConfig(kind, LANG, true));
      await new Promise(function (r) { setTimeout(r, 60); });
      try { img.src = ch.toBase64Image("image/png", 1); } catch (e) {}
      ch.destroy(); document.body.removeChild(c);
    }
  }

  /* ---------- inline SVG marks ---------- */
  function mono(sz) {
    return '<svg class="login-mono" width="' + sz + '" height="' + sz + '" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<rect x="3" y="3" width="58" height="58" rx="6" stroke="#B08D2E" stroke-width="2"/>' +
      '<rect x="9" y="9" width="46" height="46" rx="3" stroke="#B08D2E" stroke-width="1" opacity="0.5"/>' +
      '<text x="32" y="42" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="26" font-weight="600" fill="#1B2A4A">IFB</text></svg>';
  }
  function globe() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>'; }
  function printer() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 9V3h12v6M6 18H4v-7h16v7h-2M8 14h8v7H8z"/></svg>'; }
  function lock() { return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B08D2E" stroke-width="1.7"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>'; }
})();
