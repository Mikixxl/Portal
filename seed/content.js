/* Jaboulet-Vercherre Family Investment Office - proposal content (EN/FR).
   Single source of truth, loaded into Supabase (proposals.content) as JSON.
   Regenerated 2026-06-13: added Alternatives (sec 5) and Tax (sec 14), EN/FR; renumbered to 19. */

const CONTENT = {
  "schema": 1,
  "reference": "IFB-FO-2026-PJV",
  "slug": "jaboulet-vercherre",
  "client_name": "Jaboulet-Vercherre Family",
  "charts": {
    "base": 1150000,
    "rates": [
      0.05,
      0.08,
      0.12
    ],
    "allocation": [
      40,
      30,
      15,
      15
    ],
    "allocationAmounts": [
      460000,
      345000,
      172500,
      172500
    ],
    "fees": {
      "eur": [
        6500,
        15500,
        20900
      ],
      "pct": [
        0.6,
        1.3,
        1.8
      ]
    }
  },
  "en": {
    "meta": {
      "title": "Family Investment Office",
      "subtitle": "A Confidential Proposal for the Jaboulet-Vercherre Family",
      "reference": "IFB-FO-2026-PJV",
      "date": "June 2026",
      "confidential": "Strictly Private & Confidential",
      "prepared": "International Finance Bank Ltd."
    },
    "ui": {
      "brand": "International Finance Bank",
      "portal": "Private Client Portal",
      "contents": "Contents",
      "preparedFor": "Prepared for",
      "reference": "Reference",
      "print": "Print / Save as PDF",
      "signOut": "Sign out",
      "toLang": "Français",
      "confidential": "Strictly Private & Confidential",
      "page": "Page",
      "of": "of"
    },
    "login": {
      "heading": "Private Client Access",
      "sub": "This proposal is confidential and reserved for the named recipient. Please sign in to continue.",
      "email": "Email address",
      "password": "Password",
      "submit": "Sign in",
      "working": "Signing in",
      "error": "Those credentials were not recognised. Please check and try again.",
      "secured": "Protected by encrypted authentication. Your data is never shared."
    },
    "chartLabels": {
      "allocation": [
        "Bitcoin reserve",
        "Income",
        "Liquidity",
        "Opportunity"
      ],
      "projection": [
        "Conservative - 5%",
        "Balanced - 8%",
        "Growth - 12%"
      ],
      "fees": [
        "Essential",
        "Managed",
        "Full Office"
      ],
      "feesAxisEur": "EUR per year",
      "feesAxisPct": "Share of assets",
      "projYear": "Year",
      "projValue": "Portfolio value",
      "allocShare": "Allocation"
    },
    "sections": [
      {
        "id": "overview",
        "n": "1",
        "nav": "Overview",
        "title": "Executive Summary",
        "blocks": [
          {
            "t": "lead",
            "x": "The family holds a single, valuable, undiversified asset in a structure built for neither protection nor growth. This proposal turns that holding into a governed, defended and productive family office, in measured stages, without surrendering conviction in Bitcoin."
          },
          {
            "t": "kpis",
            "x": [
              {
                "k": "Current holding",
                "v": "~21 BTC"
              },
              {
                "k": "Indicative value",
                "v": "EUR 1,150,000"
              },
              {
                "k": "Principal vehicle",
                "v": "Nevis LLC"
              },
              {
                "k": "Platform from",
                "v": "EUR 6,500 / year"
              },
              {
                "k": "Ten-year range",
                "v": "EUR 1.87m – 3.57m"
              },
              {
                "k": "Protection layer",
                "v": "Cook Islands Trust"
              }
            ]
          },
          {
            "t": "p",
            "x": "The path is staged. First, a Nevis Family Investment Company becomes the central holding vehicle and the legal foundation for everything that follows. Second, the family is onboarded onto the IFB Family Office Platform, a modular set of services taken as needed, for banking, reporting, advice and governance. Third, the portfolio is reconstructed from one asset into four disciplined sleeves, retaining meaningful Bitcoin exposure while building liquidity, income and selective growth."
          },
          {
            "t": "p",
            "x": "When assets reach roughly EUR 3 to 5 million, a Cook Islands trust is added above the Nevis company to complete the protection architecture. Nothing in this document is irreversible, and nothing is bundled that the family does not choose."
          }
        ]
      },
      {
        "id": "position",
        "n": "2",
        "nav": "Present Position",
        "title": "The Family's Present Position",
        "blocks": [
          {
            "t": "p",
            "x": "The starting point is a single asset held in a single wrapper. The family's 21 Bitcoin are held through a company incorporated in Ras Al Khaimah. At an assumed reference price of approximately EUR 54,800 per coin, the position is worth in the region of EUR 1.15 million."
          },
          {
            "t": "p",
            "x": "Digital-asset prices move sharply. The figure should be marked to market on the day the structure is funded, and every projection in this document scales with it. Three facts define the present position, and each is addressed in turn."
          },
          {
            "t": "ul",
            "x": [
              "Concentration. One asset class carries the entire estate. A single market shock would move the family's net worth in full.",
              "Wrapper. The current vehicle was chosen for convenience, not for protection, succession or institutional banking access.",
              "Idleness. The holding produces nothing. It neither yields income nor compounds beyond the price of the coin itself."
            ]
          }
        ]
      },
      {
        "id": "objectives",
        "n": "3",
        "nav": "Objectives",
        "title": "Strategic Objectives",
        "blocks": [
          {
            "t": "p",
            "x": "The structure that follows is built to satisfy nine objectives. They are listed in order of priority."
          },
          {
            "t": "ol",
            "x": [
              "Preserve capital against legal, political and counterparty risk.",
              "Retain conviction exposure to Bitcoin while removing single-asset fragility.",
              "Generate recurring income from a portion of the estate.",
              "Establish institutional banking and custody relationships.",
              "Create a clear, defensible ownership and control structure.",
              "Prepare an orderly succession across generations.",
              "Maintain full transparency with tax and regulatory authorities.",
              "Keep costs proportionate to the assets they serve.",
              "Build a permanent platform for the family's capital."
            ]
          }
        ]
      },
      {
        "id": "rationale",
        "n": "4",
        "nav": "Why & When",
        "title": "Why Structure, and Why Now",
        "blocks": [
          {
            "t": "p",
            "x": "Wealth held in a single asset and a thin wrapper is exposed on every side: to litigation, to forced disclosure, to the failure of a counterparty, to the disorder that follows an unplanned death. Structure does not reduce conviction in the asset. It reduces the fragility around it."
          },
          {
            "t": "callout",
            "x": "Protection is cheap in calm weather and unavailable in a storm. The instruments described here must be in place before they are needed, not after."
          },
          {
            "t": "p",
            "x": "The case for acting now rests on three points. The estate is large enough to justify the architecture and small enough that the work is light. Protective structures are respected only when established well ahead of any claim. And a concentrated position is most exposed precisely while it is most valuable."
          },
          {
            "t": "p",
            "x": "There is a test behind everything that follows. Each candidate structure is measured against the nine objectives set out above. An option that fails even one of the non-negotiable objectives, protection, retained conviction, clean control, orderly succession, full transparency, is not a weaker choice. It is the wrong instrument. The section that follows applies that test to the alternatives the family might reasonably consider, and shows what survives it."
          }
        ]
      },
      {
        "id": "alternatives",
        "n": "5",
        "nav": "Alternatives",
        "title": "Why This Structure, and Not Another",
        "blocks": [
          {
            "t": "lead",
            "x": "The architecture proposed here was not chosen because it is elaborate. It was chosen because it is the only arrangement that satisfies all nine objectives at once. Every simpler or more familiar option fails at least one of them, and a failure on a single non-negotiable objective is disqualifying."
          },
          {
            "t": "p",
            "x": "The discipline is straightforward. Each candidate is measured against the same nine objectives, in the same order. An option is not preferred because it is cheaper or quicker. It is eliminated the moment it fails an objective the family cannot give up. Five alternatives are worth weighing, because they are the ones a sensible family actually considers."
          },
          {
            "t": "steps",
            "x": [
              {
                "h": "Leave the holding as it is",
                "b": "The present company is a wrapper of convenience. It offers no real protection against a determined creditor, produces no income, and leaves succession to chance. It fails on preservation, yield and succession before any other test is applied."
              },
              {
                "h": "Hold the coins in personal name",
                "b": "Self-custody removes counterparty risk and little else. The estate and its owner are the same legal person, so a claim against one is a claim against both, and the keys die with the holder. It fails on protection and succession at once."
              },
              {
                "h": "Sell into a fund or exchange-traded product",
                "b": "This cures idleness by surrendering ownership. The family would exchange coins it controls for an issuer's promise, accept a fresh layer of counterparty risk, and trigger a full realisation today. It fails on retained conviction, and pays for the privilege."
              },
              {
                "h": "Place the coins directly in a trust",
                "b": "A trust is the correct apex of the structure, not its foundation. A trustee obliged to act on every transaction makes active management slow and clumsy, and a trust funded before the assets justify it is cost without purpose. The right layer, introduced in the wrong order."
              },
              {
                "h": "Use an onshore company or a bank crypto account",
                "b": "Familiar, and weaker on the points that matter. Foreign judgments are enforced more readily, ownership often sits on a public register, and a private bank's bundle rarely scales down to an estate of this size. It fails on protection and proportion."
              }
            ]
          },
          {
            "t": "p",
            "x": "Remove every option that fails an objective, and one arrangement remains: a Nevis company to hold and operate, the IFB platform to bank, report and govern, a four-sleeve portfolio that keeps conviction in Bitcoin while curing concentration and idleness, and a Cook Islands trust placed above the company once the assets cross the EUR 3 to 5 million threshold. It is not a coincidence that this is the design on offer. It is the residue of building from the objectives rather than toward a product."
          },
          {
            "t": "table",
            "caption": "The alternatives, weighed against the nine objectives.",
            "head": [
              "Approach",
              "Verdict"
            ],
            "aligns": [
              "left",
              "left"
            ],
            "total": [
              5
            ],
            "rows": [
              [
                "Leave the holding as it is",
                "Rejected - no protection, no income, no succession"
              ],
              [
                "Self-custody in personal name",
                "Rejected - estate and liability exposure"
              ],
              [
                "Fund or exchange-traded product",
                "Rejected - surrenders ownership, forces realisation"
              ],
              [
                "Trust holding the coins directly",
                "Premature - right layer, wrong order"
              ],
              [
                "Onshore company or bank crypto account",
                "Rejected - weaker protection, disproportionate cost"
              ],
              [
                "Nevis company, IFB platform, staged trust",
                "Adopted - meets all nine objectives"
              ]
            ]
          },
          {
            "t": "callout",
            "x": "Proof by elimination is the honest way to justify a structure. Show that every alternative fails a test the family has already accepted, and the recommendation makes itself."
          }
        ]
      },
      {
        "id": "architecture",
        "n": "6",
        "nav": "Architecture",
        "title": "The Proposed Architecture",
        "blocks": [
          {
            "t": "p",
            "x": "The design is a layered structure, built from the asset upward. Each layer has one purpose and is added only when it earns its place."
          },
          {
            "t": "steps",
            "x": [
              {
                "h": "The family",
                "b": "Beneficial owners and the eventual settlors of the trust."
              },
              {
                "h": "Cook Islands Trust (later)",
                "b": "The protection layer, added at the EUR 3–5m threshold."
              },
              {
                "h": "Nevis Family Investment LLC",
                "b": "The central holding vehicle and legal foundation."
              },
              {
                "h": "IFB Family Office Platform",
                "b": "Banking, custody, reporting, advice and governance."
              },
              {
                "h": "The portfolio",
                "b": "Four disciplined sleeves: Bitcoin, income, liquidity, opportunity."
              }
            ]
          },
          {
            "t": "p",
            "x": "The order matters. The company is formed first, the office is opened second, the portfolio is built third, and the trust is placed above the company only when the assets justify it."
          }
        ]
      },
      {
        "id": "nevis",
        "n": "7",
        "nav": "Phase I - Nevis",
        "title": "Phase I - The Nevis Family Investment Company",
        "blocks": [
          {
            "t": "p",
            "x": "A Nevis Limited Liability Company becomes the central holding vehicle. Nevis is a mature, respected jurisdiction whose law is built for exactly this purpose."
          },
          {
            "t": "ul",
            "x": [
              "A foreign judgment is not enforced automatically; a creditor must litigate afresh in Nevis, to a high standard and within a short window.",
              "A claimant must retain local counsel on a non-contingent basis and, typically, post a substantial bond before proceeding.",
              "Member and manager identities are not placed on a public register.",
              "The company is disregarded for tax where appropriate and is fully disclosed under CRS and FATCA."
            ]
          },
          {
            "t": "table",
            "caption": "Establishment (one-time)",
            "head": [
              "Item",
              "Cost"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [
              4
            ],
            "rows": [
              [
                "Formation of Nevis LLC",
                "EUR 3,500"
              ],
              [
                "Corporate documentation",
                "EUR 1,500"
              ],
              [
                "Legal structuring",
                "EUR 2,500"
              ],
              [
                "Initial administration",
                "EUR 1,500"
              ],
              [
                "Total establishment cost",
                "EUR 9,000"
              ]
            ]
          },
          {
            "t": "table",
            "caption": "Annual maintenance",
            "head": [
              "Item",
              "Cost"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [
              3
            ],
            "rows": [
              [
                "Registered agent",
                "EUR 1,000"
              ],
              [
                "Government and corporate renewal",
                "EUR 1,000"
              ],
              [
                "Agent administration",
                "EUR 500"
              ],
              [
                "Total annual cost",
                "EUR 2,500"
              ]
            ]
          },
          {
            "t": "note",
            "x": "Compliance monitoring and reporting are provided through the IFB core platform and are not duplicated here."
          }
        ]
      },
      {
        "id": "platform",
        "n": "8",
        "nav": "Platform & Fees",
        "title": "Phase II - The IFB Family Office Platform",
        "blocks": [
          {
            "t": "p",
            "x": "With the vehicle in place, the family is onboarded onto the IFB Family Office Platform. The platform is modular by design. The family pays for a small mandatory core, then adds only the services it wants and leaves the rest. Nothing is bundled that goes unused, and the cost falls as a share of assets as the family grows."
          },
          {
            "t": "h",
            "x": "The core"
          },
          {
            "t": "p",
            "x": "One service is mandatory. It is the minimum required to operate the structure, and it is deliberately lean."
          },
          {
            "t": "ul",
            "x": [
              "Family office account and banking access.",
              "Custody coordination, including the qualified custodian for the Bitcoin reserve.",
              "Consolidated quarterly reporting across every sleeve.",
              "AML and compliance monitoring, with coordination of CRS and FATCA filings.",
              "An annual review of the structure."
            ]
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Core platform",
              "Annual fee"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [
              0
            ],
            "rows": [
              [
                "Mandatory for every relationship",
                "EUR 6,500"
              ]
            ]
          },
          {
            "t": "h",
            "x": "Optional modules"
          },
          {
            "t": "p",
            "x": "Beyond the core, each service stands alone. The family takes what earns its place and books nothing else."
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Module",
              "What it covers",
              "Fee"
            ],
            "aligns": [
              "left",
              "left",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Investment management",
                "Advisory or discretionary management against the IPS",
                "0.40% / 0.75%"
              ],
              [
                "Treasury and FX",
                "Active cash and currency management, payments",
                "EUR 2,500"
              ],
              [
                "Committee servicing",
                "Quarterly papers, facilitation, minutes",
                "EUR 3,500"
              ],
              [
                "Succession and estate",
                "Beneficiary planning, letter of wishes, successors",
                "EUR 3,500"
              ],
              [
                "Tax-reporting coordination",
                "CRS and FATCA filing, with your own advisers",
                "EUR 2,000"
              ],
              [
                "Governance build",
                "Charter, Investment Policy Statement, committee",
                "EUR 6,500 once"
              ],
              [
                "Trust liaison (later)",
                "Interface with the Cook Islands trustee",
                "EUR 2,000"
              ],
              [
                "Concierge and projects",
                "Ad hoc mandates",
                "By quote"
              ]
            ]
          },
          {
            "t": "note",
            "x": "Execution-only investing sits inside the core at no extra charge. The management fee is levied only on assets IFB actually manages, and never on the self-custodied Bitcoin reserve. At the current managed base of roughly EUR 690,000 that is about EUR 2,800 a year on advisory terms, or EUR 5,200 discretionary."
          },
          {
            "t": "h",
            "x": "Three ways to assemble it"
          },
          {
            "t": "p",
            "x": "Most families settle on one of three packages. Each is priced about a tenth below the sum of its parts."
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Service",
              "Essential",
              "Managed",
              "Full Office"
            ],
            "aligns": [
              "left",
              "center",
              "center",
              "center"
            ],
            "total": [
              7,
              8
            ],
            "rows": [
              [
                "Core platform",
                "Included",
                "Included",
                "Included"
              ],
              [
                "Investment management",
                "Execution",
                "Advisory",
                "Discretionary"
              ],
              [
                "Treasury and FX",
                "-",
                "Included",
                "Included"
              ],
              [
                "Committee servicing",
                "-",
                "Included",
                "Included"
              ],
              [
                "Succession and estate",
                "-",
                "-",
                "Included"
              ],
              [
                "Tax-reporting",
                "-",
                "Included",
                "Included"
              ],
              [
                "Governance build (once)",
                "Optional",
                "Optional",
                "Included"
              ],
              [
                "Indicative all-in, per year",
                "EUR 6,500",
                "~EUR 15,500",
                "~EUR 20,900"
              ],
              [
                "As a share of EUR 1.15m",
                "0.6%",
                "1.3%",
                "1.8%"
              ]
            ]
          },
          {
            "t": "chart",
            "kind": "fees",
            "caption": "Annual platform cost and share of assets, by package."
          },
          {
            "t": "p",
            "x": "The fixed modules do not move as the family grows. Only the management fee scales with assets, and it scales down as a percentage. A package that costs 1.3% of assets today costs closer to 1% at EUR 3 million, and less beyond it. The family chooses the package, and the choice can change at any review."
          }
        ]
      },
      {
        "id": "portfolio",
        "n": "9",
        "nav": "Portfolio",
        "title": "Phase III - Portfolio Construction",
        "blocks": [
          {
            "t": "p",
            "x": "The single holding is rebuilt into four sleeves. Each has a defined role, a target weight and a return expectation. Conviction in Bitcoin is kept; fragility is removed."
          },
          {
            "t": "chart",
            "kind": "allocation",
            "caption": "Target allocation of the EUR 1.15m estate."
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Sleeve",
              "Weight",
              "Amount",
              "Target return"
            ],
            "aligns": [
              "left",
              "right",
              "right",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Bitcoin reserve",
                "40%",
                "EUR 460,000",
                "Asset growth"
              ],
              [
                "Income",
                "30%",
                "EUR 345,000",
                "6% – 10%"
              ],
              [
                "Liquidity",
                "15%",
                "EUR 172,500",
                "2% – 4%"
              ],
              [
                "Opportunity",
                "15%",
                "EUR 172,500",
                "10% – 20%+"
              ]
            ]
          },
          {
            "t": "h",
            "x": "Bitcoin reserve - 40%"
          },
          {
            "t": "p",
            "x": "EUR 460,000 retained in Bitcoin under institutional qualified custody, with multi-signature control. The family keeps its conviction position; what changes is that the coin is held safely and no longer represents the whole estate."
          },
          {
            "t": "h",
            "x": "Income - 30%"
          },
          {
            "t": "p",
            "x": "EUR 345,000 placed in senior secured private credit, trade finance, asset-backed lending and infrastructure debt, targeting 6% to 10%. On these figures the sleeve produces roughly EUR 20,700 to EUR 34,500 a year in recurring income. On the leaner platform packages that income covers the running cost of the whole structure outright, so the family's capital pays for its own administration rather than the other way round."
          },
          {
            "t": "h",
            "x": "Liquidity - 15%"
          },
          {
            "t": "p",
            "x": "EUR 172,500 in near-cash and short-dated instruments, targeting 2% to 4%. This is the reserve that meets calls and removes the need to sell a long-term asset at the wrong moment."
          },
          {
            "t": "h",
            "x": "Opportunity - 15%"
          },
          {
            "t": "p",
            "x": "EUR 172,500 reserved for private equity, venture and special situations, targeting 10% to 20% and more. It carries the widest range of outcomes, which is precisely why it is the smallest sleeve."
          }
        ]
      },
      {
        "id": "projections",
        "n": "10",
        "nav": "Projections",
        "title": "Return and Growth Projections",
        "blocks": [
          {
            "t": "p",
            "x": "The chart below illustrates the growth of the EUR 1.15m estate over ten years under three blended return assumptions. Figures compound annually and are shown before fees and taxes. They are illustrations, not guarantees."
          },
          {
            "t": "chart",
            "kind": "projection",
            "caption": "Illustrative ten-year growth of the EUR 1.15m estate."
          },
          {
            "t": "table",
            "caption": "Ten-year illustrative outcomes",
            "head": [
              "Scenario",
              "Blended return",
              "Value at year 10"
            ],
            "aligns": [
              "left",
              "right",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Conservative",
                "5%",
                "EUR 1,873,000"
              ],
              [
                "Balanced",
                "8%",
                "EUR 2,483,000"
              ],
              [
                "Growth",
                "12%",
                "EUR 3,572,000"
              ]
            ]
          },
          {
            "t": "p",
            "x": "Alongside capital growth, the income sleeve is expected to distribute roughly EUR 20,700 to EUR 34,500 a year. The figures above treat that income as distributed rather than reinvested, so the compounding shown is conservative."
          }
        ]
      },
      {
        "id": "trust",
        "n": "11",
        "nav": "Trust Layer",
        "title": "The Asset Protection Layer - Cook Islands Trust",
        "blocks": [
          {
            "t": "p",
            "x": "When assets reach roughly EUR 3 to 5 million, a Cook Islands trust is placed above the Nevis company. The Cook Islands is widely regarded as the strongest civil asset-protection jurisdiction in common use. A foreign judgment is not recognised; a creditor must bring the claim afresh before the local courts, to a high standard of proof, within a short limitation period."
          },
          {
            "t": "p",
            "x": "This is a civil-protection instrument, not a device for concealment or for avoiding tax. The trust is fully disclosed to the relevant authorities under CRS and FATCA, and the family's tax position is unaffected by it."
          },
          {
            "t": "table",
            "caption": "Indicative cost (future, third-party)",
            "head": [
              "Item",
              "Cost"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Trust establishment (one-time)",
                "EUR 20,000 – 35,000"
              ],
              [
                "Trustee (annual)",
                "EUR 6,000 – 12,000"
              ],
              [
                "IFB trust liaison (annual)",
                "EUR 2,000"
              ]
            ]
          },
          {
            "t": "note",
            "x": "These figures are incurred only at the asset threshold and are confirmed with the trustee at establishment."
          }
        ]
      },
      {
        "id": "governance",
        "n": "12",
        "nav": "Governance",
        "title": "Family Governance",
        "blocks": [
          {
            "t": "p",
            "x": "A structure without governance is a set of accounts waiting for a dispute. Four instruments give the family a constitution."
          },
          {
            "t": "ul",
            "x": [
              "Family Charter. The values, investment philosophy, risk tolerance and succession principles against which every later decision is tested.",
              "Investment Policy Statement. The mandate: the sleeves, their weights, the rebalancing rules and the limits within which assets are managed.",
              "Investment Committee. The body that meets quarterly, reviews the portfolio and takes decisions on the record.",
              "Decision rights. A clear map of who may instruct, who must approve and who is informed."
            ]
          },
          {
            "t": "p",
            "x": "These documents are drafted once, in the governance build, and reviewed annually. They are the first papers the next generation should read."
          }
        ]
      },
      {
        "id": "succession",
        "n": "13",
        "nav": "Succession",
        "title": "Succession Planning",
        "blocks": [
          {
            "t": "p",
            "x": "The structure is built to outlive its founder. Succession is planned from the outset rather than improvised after a loss."
          },
          {
            "t": "ul",
            "x": [
              "Membership interests in the Nevis company pass under a defined plan, not under the disorder of intestacy.",
              "A letter of wishes guides the trustee, once the trust is in place, on the family's intentions.",
              "Successors are identified, informed and prepared, so control transfers without rupture.",
              "Custody and signatory arrangements survive the absence of any single individual."
            ]
          },
          {
            "t": "p",
            "x": "The aim is continuity: that the office functions on the day after a loss exactly as it did the day before."
          }
        ]
      },
      {
        "id": "tax",
        "n": "14",
        "nav": "Tax",
        "title": "The Tax Position",
        "blocks": [
          {
            "t": "lead",
            "x": "Tax is not an afterthought to this structure. It is one of its purposes. The aim is precise: that the family pays what is lawfully due, in the right place, at the right time, and not a euro more, with the certainty that comes from doing so in plain sight."
          },
          {
            "t": "p",
            "x": "Efficiency and concealment are often confused. They are opposites. Concealment, hiding an asset from the authority that has a claim on it, is fragile and unlawful, and under the common reporting standard it no longer even works: a foreign account is reported to the holder's home authority as a matter of routine. Efficiency is lawful, durable and disclosed. It arranges affairs so that the rules themselves produce a lighter, clearer bill. This structure pursues the second and has no part in the first."
          },
          {
            "t": "p",
            "x": "Three lawful levers do the work."
          },
          {
            "t": "steps",
            "x": [
              {
                "h": "Entity neutrality",
                "b": "A Nevis company is not taxed on its holdings at the entity level. The family is therefore not taxed twice, once inside the structure and again in their own hands. Tax arises where the family is resident, not as an extra layer within the vehicle."
              },
              {
                "h": "Control of timing",
                "b": "An asset held inside a company can be realised on a planned basis rather than piecemeal, so gains are timed, matched and managed rather than crystallised by accident. How far this defers tax depends on the family's residence and the rules that apply there."
              },
              {
                "h": "Succession efficiency",
                "b": "The heaviest tax most families meet is the one levied when wealth passes to the next generation. A company beneath a trust, settled in good time, lets that transfer be planned and its cost reduced, within the law of the family's jurisdiction, rather than left to the default rates that apply when nothing is done."
              },
              {
                "h": "Residence, the decisive lever",
                "b": "Where the family is tax-resident determines the larger part of the bill. Any change of residence carries its own rules, including charges on unrealised gains at the point of departure, and must be planned with counsel before it is acted on, never after. The structure is built to accommodate that planning, not to substitute for it."
              }
            ]
          },
          {
            "t": "callout",
            "x": "Full transparency is not the price of this structure. It is its protection. An arrangement the authorities can see and accept cannot be unwound by them later. That certainty is worth more to a family than any saving bought by secrecy."
          },
          {
            "t": "p",
            "x": "Tax depends on facts this document does not assume: where each family member is resident, where they are domiciled, and how each jurisdiction characterises the company, the trust and the asset. Nothing here is tax advice. The structure is designed to be implemented alongside qualified tax counsel in the family's own country, and every figure in this proposal is stated before tax."
          }
        ]
      },
      {
        "id": "compliance",
        "n": "15",
        "nav": "Compliance & Risk",
        "title": "Compliance, Custody and Risk",
        "blocks": [
          {
            "t": "h",
            "x": "Compliance and transparency"
          },
          {
            "t": "p",
            "x": "Every layer of this structure is fully disclosed. The Nevis company, the family office relationship and the eventual trust are reported under CRS and FATCA, and the family's tax position is maintained with its own advisers. This is lawful structuring, openly declared. It is not concealment, and it is not avoidance."
          },
          {
            "t": "h",
            "x": "Custody"
          },
          {
            "t": "p",
            "x": "The Bitcoin reserve is held with an institutional qualified custodian under multi-signature control. No single key and no single person can move the assets alone."
          },
          {
            "t": "h",
            "x": "Operational and key-person risk"
          },
          {
            "t": "p",
            "x": "Two failures are planned for in advance: the loss of a key and the loss of a person. Multi-signature custody removes any single key as a point of failure. A defined line of authorised signatories, recorded in the governance documents, keeps the office functioning if the principal is unavailable. Custodian and counterparty concentration is reviewed annually."
          },
          {
            "t": "h",
            "x": "Portfolio risk"
          },
          {
            "t": "p",
            "x": "The portfolio's risks are understood and sized rather than wished away. Bitcoin is volatile, and is held to 40%. Private credit is less liquid than listed debt, and is matched to its maturity. The opportunity sleeve carries the widest range of outcomes, which is precisely why it is the smallest."
          }
        ]
      },
      {
        "id": "roadmap",
        "n": "16",
        "nav": "Roadmap",
        "title": "Implementation Roadmap",
        "blocks": [
          {
            "t": "p",
            "x": "The first two phases run in parallel and complete within roughly three months. The trust layer follows later, on the asset threshold rather than the calendar."
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Phase",
              "Activities",
              "Timing"
            ],
            "aligns": [
              "left",
              "left",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Phase I",
                "KYC, Nevis formation, documentation, account opening",
                "Weeks 1–4"
              ],
              [
                "Phase II",
                "Family office onboarding, IPS adoption, first committee",
                "Weeks 4–8"
              ],
              [
                "Phase III",
                "Asset transfer, portfolio construction, funding",
                "Weeks 6–12"
              ],
              [
                "Later",
                "Cook Islands trust at the EUR 3–5m threshold",
                "Future"
              ]
            ]
          }
        ]
      },
      {
        "id": "costs",
        "n": "17",
        "nav": "Costs",
        "title": "Consolidated Cost Summary",
        "blocks": [
          {
            "t": "p",
            "x": "The figures below bring the costs together. The IFB platform lines are alternatives, not additions: the family chooses one package. The trust layer is shown separately, as it is incurred only later."
          },
          {
            "t": "h",
            "x": "One-time"
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Item",
              "Amount"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Nevis establishment",
                "EUR 9,000"
              ],
              [
                "Governance build (Managed and Full Office)",
                "EUR 6,500"
              ]
            ]
          },
          {
            "t": "h",
            "x": "Recurring, per year"
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Item",
              "Amount"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Nevis annual maintenance",
                "EUR 2,500"
              ],
              [
                "IFB platform - Essential",
                "EUR 6,500"
              ],
              [
                "IFB platform - Managed",
                "~EUR 15,500"
              ],
              [
                "IFB platform - Full Office",
                "~EUR 20,900"
              ]
            ]
          },
          {
            "t": "h",
            "x": "Future - Cook Islands trust"
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Item",
              "Amount"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Trust establishment (one-time)",
                "EUR 20,000 – 35,000"
              ],
              [
                "Trustee (annual)",
                "EUR 6,000 – 12,000"
              ],
              [
                "IFB trust liaison (annual)",
                "EUR 2,000"
              ]
            ]
          },
          {
            "t": "note",
            "x": "Investment management inside the packages is charged on managed assets and scales with them. One-time structuring terms are confirmed in the engagement letter. Third-party trust costs are confirmed with the trustee at establishment."
          }
        ]
      },
      {
        "id": "recommendation",
        "n": "18",
        "nav": "Recommendation",
        "title": "Recommendation and Next Steps",
        "blocks": [
          {
            "t": "p",
            "x": "We recommend proceeding with Phase I and Phase II together: establish the Nevis company and open the family office relationship, then reconstruct the portfolio over the following weeks. The trust layer follows when assets justify it."
          },
          {
            "t": "p",
            "x": "On the platform, we suggest the Managed package at outset. It covers advice, treasury, committee servicing, tax coordination and reporting for roughly EUR 15,500 a year, comfortably within the income the portfolio is built to produce. The family can step up to Full Office when the trust is added, or back to Essential at any time. The choice stays with the family."
          },
          {
            "t": "ol",
            "x": [
              "Confirm instructions and complete know-your-client onboarding.",
              "Form the Nevis Family Investment LLC.",
              "Open the IFB Family Office account and choose a platform package.",
              "Adopt the Investment Policy Statement and convene the first committee.",
              "Transfer assets and construct the portfolio."
            ]
          }
        ]
      },
      {
        "id": "notice",
        "n": "19",
        "nav": "Notice",
        "title": "Important Notice",
        "blocks": [
          {
            "t": "p",
            "x": "This document is a proposal for discussion. It is not legal, tax or investment advice, and it is neither an offer nor a solicitation. Illustrative figures are not guarantees; investment values fall as well as rise, and digital assets are especially volatile. Jurisdictional features are summarised and may change. The family should obtain independent legal and tax advice in every relevant jurisdiction before proceeding. Implementation is subject to satisfactory due diligence and to the execution of formal agreements."
          },
          {
            "t": "note",
            "x": "Bitcoin is valued at a reference price of approximately EUR 54,800 per coin, giving about EUR 1,150,000 for 21 BTC. The figure is marked to market at funding, and every projection scales with it. Allocation percentages are applied to that base. Growth scenarios assume a blended return compounding annually over ten years, before fees and taxes."
          }
        ]
      }
    ]
  },
  "fr": {
    "meta": {
      "title": "Family Office d'Investissement",
      "subtitle": "Une proposition confidentielle pour la famille Jaboulet-Vercherre",
      "reference": "IFB-FO-2026-PJV",
      "date": "Juin 2026",
      "confidential": "Strictement privé et confidentiel",
      "prepared": "International Finance Bank Ltd."
    },
    "ui": {
      "brand": "International Finance Bank",
      "portal": "Espace Client Privé",
      "contents": "Sommaire",
      "preparedFor": "Préparé pour",
      "reference": "Référence",
      "print": "Imprimer / Enregistrer en PDF",
      "signOut": "Se déconnecter",
      "toLang": "English",
      "confidential": "Strictement privé et confidentiel",
      "page": "Page",
      "of": "sur"
    },
    "login": {
      "heading": "Accès Client Privé",
      "sub": "Cette proposition est confidentielle et réservée au destinataire désigné. Veuillez vous connecter pour continuer.",
      "email": "Adresse e-mail",
      "password": "Mot de passe",
      "submit": "Se connecter",
      "working": "Connexion",
      "error": "Ces identifiants n'ont pas été reconnus. Veuillez vérifier et réessayer.",
      "secured": "Protégé par une authentification chiffrée. Vos données ne sont jamais partagées."
    },
    "chartLabels": {
      "allocation": [
        "Réserve Bitcoin",
        "Revenu",
        "Liquidité",
        "Opportunité"
      ],
      "projection": [
        "Prudent - 5 %",
        "Équilibré - 8 %",
        "Croissance - 12 %"
      ],
      "fees": [
        "Essentiel",
        "Géré",
        "Full Office"
      ],
      "feesAxisEur": "EUR par an",
      "feesAxisPct": "Part des actifs",
      "projYear": "Année",
      "projValue": "Valeur du portefeuille",
      "allocShare": "Répartition"
    },
    "sections": [
      {
        "id": "overview",
        "n": "1",
        "nav": "Aperçu",
        "title": "Synthèse",
        "blocks": [
          {
            "t": "lead",
            "x": "La famille détient un actif unique, de grande valeur et non diversifié, dans une structure conçue ni pour la protection ni pour la croissance. Cette proposition transforme cette détention en un family office gouverné, défendu et productif, par étapes mesurées, sans renoncer à la conviction sur le Bitcoin."
          },
          {
            "t": "kpis",
            "x": [
              {
                "k": "Détention actuelle",
                "v": "~21 BTC"
              },
              {
                "k": "Valeur indicative",
                "v": "1 150 000 €"
              },
              {
                "k": "Véhicule principal",
                "v": "LLC de Nevis"
              },
              {
                "k": "Plateforme dès",
                "v": "6 500 € / an"
              },
              {
                "k": "Fourchette à dix ans",
                "v": "1,87 M€ – 3,57 M€"
              },
              {
                "k": "Couche de protection",
                "v": "Trust des Îles Cook"
              }
            ]
          },
          {
            "t": "p",
            "x": "La démarche est échelonnée. D'abord, une Société d'Investissement Familiale de Nevis devient le véhicule de détention central et le socle juridique de tout ce qui suit. Ensuite, la famille est intégrée à la Plateforme Family Office d'IFB, un ensemble modulaire de services pris selon les besoins, pour la banque, le reporting, le conseil et la gouvernance. Enfin, le portefeuille est reconstruit, d'un seul actif vers quatre poches disciplinées, en conservant une exposition significative au Bitcoin tout en bâtissant liquidité, revenu et croissance sélective."
          },
          {
            "t": "p",
            "x": "Lorsque les actifs atteignent environ 3 à 5 millions d'euros, un trust des Îles Cook est ajouté au-dessus de la société de Nevis pour compléter l'architecture de protection. Rien dans ce document n'est irréversible, et rien n'est imposé que la famille ne choisisse."
          }
        ]
      },
      {
        "id": "position",
        "n": "2",
        "nav": "Situation actuelle",
        "title": "La situation actuelle de la famille",
        "blocks": [
          {
            "t": "p",
            "x": "Le point de départ est un actif unique détenu dans une enveloppe unique. Les 21 Bitcoins de la famille sont détenus via une société constituée à Ras Al Khaimah. À un prix de référence supposé d'environ 54 800 € par unité, la position vaut de l'ordre de 1,15 million d'euros."
          },
          {
            "t": "p",
            "x": "Les prix des actifs numériques varient fortement. Le montant doit être réévalué au prix du marché le jour où la structure est financée, et chaque projection de ce document s'ajuste en conséquence. Trois faits définissent la situation actuelle, et chacun est traité tour à tour."
          },
          {
            "t": "ul",
            "x": [
              "Concentration. Une seule classe d'actifs porte l'ensemble du patrimoine. Un choc de marché ferait varier l'intégralité de la valeur nette de la famille.",
              "Enveloppe. Le véhicule actuel a été choisi pour sa commodité, non pour la protection, la succession ou l'accès bancaire institutionnel.",
              "Inertie. La détention ne produit rien. Elle ne génère aucun revenu et ne se valorise pas au-delà du cours de l'actif lui-même."
            ]
          }
        ]
      },
      {
        "id": "objectives",
        "n": "3",
        "nav": "Objectifs",
        "title": "Objectifs stratégiques",
        "blocks": [
          {
            "t": "p",
            "x": "La structure proposée répond à neuf objectifs, présentés par ordre de priorité."
          },
          {
            "t": "ol",
            "x": [
              "Préserver le capital contre les risques juridiques, politiques et de contrepartie.",
              "Conserver une exposition de conviction au Bitcoin tout en supprimant la fragilité d'un actif unique.",
              "Générer un revenu récurrent à partir d'une portion du patrimoine.",
              "Établir des relations bancaires et de conservation institutionnelles.",
              "Créer une structure de propriété et de contrôle claire et défendable.",
              "Préparer une succession ordonnée entre générations.",
              "Maintenir une transparence totale envers les autorités fiscales et réglementaires.",
              "Maintenir des coûts proportionnés aux actifs qu'ils servent.",
              "Bâtir une plateforme permanente pour le capital familial."
            ]
          }
        ]
      },
      {
        "id": "rationale",
        "n": "4",
        "nav": "Pourquoi & quand",
        "title": "Pourquoi structurer, et pourquoi maintenant",
        "blocks": [
          {
            "t": "p",
            "x": "Un patrimoine détenu dans un actif unique et une enveloppe légère est exposé de toutes parts : au litige, à la divulgation forcée, à la défaillance d'une contrepartie, au désordre qui suit un décès non préparé. La structuration ne réduit pas la conviction sur l'actif. Elle réduit la fragilité qui l'entoure."
          },
          {
            "t": "callout",
            "x": "La protection est bon marché par temps calme et indisponible dans la tempête. Les instruments décrits ici doivent être en place avant d'être nécessaires, et non après."
          },
          {
            "t": "p",
            "x": "Agir maintenant se justifie sur trois points. Le patrimoine est assez important pour justifier l'architecture et assez modeste pour que le travail soit léger. Les structures de protection ne sont respectées que lorsqu'elles sont établies bien avant toute réclamation. Et une position concentrée est la plus exposée précisément lorsqu'elle vaut le plus."
          },
          {
            "t": "p",
            "x": "Une règle sous-tend tout ce qui suit. Chaque structure envisagée est mesurée à l'aune des neuf objectifs énoncés plus haut. Une solution qui en méconnaît un seul parmi les objectifs non négociables, la préservation, le maintien de la conviction, un contrôle clair, une succession ordonnée, une transparence entière, n'est pas un choix plus faible. C'est le mauvais instrument. La section suivante applique cette règle aux alternatives que la famille pourrait raisonnablement considérer, et montre ce qui y résiste."
          }
        ]
      },
      {
        "id": "alternatives",
        "n": "5",
        "nav": "Alternatives",
        "title": "Pourquoi cette structure, et non une autre",
        "blocks": [
          {
            "t": "lead",
            "x": "L'architecture proposée ici n'a pas été retenue parce qu'elle est élaborée. Elle l'a été parce qu'elle est le seul agencement qui satisfait les neuf objectifs à la fois. Toute option plus simple ou plus familière en méconnaît au moins un, et le manquement à un seul objectif non négociable est rédhibitoire."
          },
          {
            "t": "p",
            "x": "La discipline est simple. Chaque candidate est mesurée aux mêmes neuf objectifs, dans le même ordre. Une option n'est pas préférée parce qu'elle est moins coûteuse ou plus rapide. Elle est écartée dès qu'elle méconnaît un objectif auquel la famille ne peut renoncer. Cinq alternatives méritent d'être pesées, car ce sont celles qu'une famille avisée examine réellement."
          },
          {
            "t": "steps",
            "x": [
              {
                "h": "Conserver l'avoir en l'état",
                "b": "La société actuelle est une enveloppe de commodité. Elle n'offre aucune protection réelle face à un créancier déterminé, ne produit aucun revenu et abandonne la succession au hasard. Elle échoue sur la préservation, le rendement et la succession avant même tout autre examen."
              },
              {
                "h": "Détenir les bitcoins en nom propre",
                "b": "L'autoconservation supprime le risque de contrepartie, et guère davantage. Le patrimoine et son détenteur ne forment qu'une seule personne juridique : une action contre l'un est une action contre l'autre, et les clés disparaissent avec le détenteur. Elle échoue d'un même mouvement sur la protection et la succession."
              },
              {
                "h": "Céder à un fonds ou à un produit coté",
                "b": "Cela guérit l'oisiveté en cédant la propriété. La famille échangerait des bitcoins qu'elle maîtrise contre la promesse d'un émetteur, accepterait une nouvelle couche de risque de contrepartie et déclencherait une réalisation intégrale aujourd'hui. Elle échoue sur le maintien de la conviction, et le paie."
              },
              {
                "h": "Placer les bitcoins directement dans un trust",
                "b": "Le trust est le bon sommet de la structure, non son socle. Un trustee tenu d'intervenir à chaque opération rend la gestion active lente et malaisée, et un trust doté avant que les actifs ne le justifient n'est qu'un coût sans objet. La bonne couche, introduite dans le mauvais ordre."
              },
              {
                "h": "Recourir à une société onshore ou à un compte crypto bancaire",
                "b": "Familier, et plus faible sur les points qui comptent. Les jugements étrangers y sont exécutés plus aisément, la propriété figure souvent sur un registre public, et l'offre groupée d'une banque privée s'ajuste rarement à un patrimoine de cette taille. Elle échoue sur la protection et la proportion."
              }
            ]
          },
          {
            "t": "p",
            "x": "Écartez chaque option qui méconnaît un objectif, et un seul agencement subsiste : une société de Nevis pour détenir et gérer, la plateforme IFB pour la banque, le suivi et la gouvernance, un portefeuille en quatre compartiments qui maintient la conviction en Bitcoin tout en corrigeant la concentration et l'oisiveté, et un trust des Îles Cook placé au-dessus de la société une fois franchi le seuil de 3 à 5 millions d'EUR. Que ce soit là le dispositif proposé n'a rien d'un hasard : c'est le résidu d'une construction partie des objectifs, et non tournée vers un produit."
          },
          {
            "t": "table",
            "caption": "Les alternatives, pesées au regard des neuf objectifs.",
            "head": [
              "Approche",
              "Verdict"
            ],
            "aligns": [
              "left",
              "left"
            ],
            "total": [
              5
            ],
            "rows": [
              [
                "Conserver l'avoir en l'état",
                "Rejetée - ni protection, ni revenu, ni succession"
              ],
              [
                "Détention en nom propre",
                "Rejetée - exposition du patrimoine et de la responsabilité"
              ],
              [
                "Fonds ou produit coté",
                "Rejetée - abandon de la propriété, réalisation forcée"
              ],
              [
                "Trust détenant directement les bitcoins",
                "Prématurée - bonne couche, mauvais ordre"
              ],
              [
                "Société onshore ou compte crypto bancaire",
                "Rejetée - protection plus faible, coût disproportionné"
              ],
              [
                "Société de Nevis, plateforme IFB, trust par étapes",
                "Retenue - satisfait les neuf objectifs"
              ]
            ]
          },
          {
            "t": "callout",
            "x": "La preuve par élimination est la manière honnête de justifier une structure. Montrez que chaque alternative méconnaît un critère que la famille a déjà accepté, et la recommandation s'impose d'elle-même."
          }
        ]
      },
      {
        "id": "architecture",
        "n": "6",
        "nav": "Architecture",
        "title": "L'architecture proposée",
        "blocks": [
          {
            "t": "p",
            "x": "La conception est une structure en couches, bâtie depuis l'actif vers le haut. Chaque couche a une seule fonction et n'est ajoutée que lorsqu'elle le mérite."
          },
          {
            "t": "steps",
            "x": [
              {
                "h": "La famille",
                "b": "Bénéficiaires effectifs et futurs constituants du trust."
              },
              {
                "h": "Trust des Îles Cook (plus tard)",
                "b": "La couche de protection, ajoutée au seuil de 3 à 5 M€."
              },
              {
                "h": "LLC d'Investissement Familiale de Nevis",
                "b": "Le véhicule de détention central et le socle juridique."
              },
              {
                "h": "Plateforme Family Office IFB",
                "b": "Banque, conservation, reporting, conseil et gouvernance."
              },
              {
                "h": "Le portefeuille",
                "b": "Quatre poches disciplinées : Bitcoin, revenu, liquidité, opportunité."
              }
            ]
          },
          {
            "t": "p",
            "x": "L'ordre compte. La société est constituée en premier, le bureau est ouvert en deuxième, le portefeuille est construit en troisième, et le trust n'est placé au-dessus de la société que lorsque les actifs le justifient."
          }
        ]
      },
      {
        "id": "nevis",
        "n": "7",
        "nav": "Phase I - Nevis",
        "title": "Phase I - La Société d'Investissement Familiale de Nevis",
        "blocks": [
          {
            "t": "p",
            "x": "Une société à responsabilité limitée (LLC) de Nevis devient le véhicule de détention central. Nevis est une juridiction mûre et respectée dont le droit est conçu précisément à cette fin."
          },
          {
            "t": "ul",
            "x": [
              "Un jugement étranger n'est pas exécuté automatiquement ; un créancier doit plaider à nouveau à Nevis, selon un standard élevé et dans un délai bref.",
              "Le demandeur doit mandater un avocat local sans honoraires de résultat et, en règle générale, consigner une caution substantielle avant d'agir.",
              "L'identité des membres et des gérants n'est pas inscrite à un registre public.",
              "La société est transparente fiscalement le cas échéant et entièrement déclarée au titre de la CRS et de FATCA."
            ]
          },
          {
            "t": "table",
            "caption": "Établissement (unique)",
            "head": [
              "Poste",
              "Coût"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [
              4
            ],
            "rows": [
              [
                "Constitution de la LLC de Nevis",
                "3 500 €"
              ],
              [
                "Documentation sociale",
                "1 500 €"
              ],
              [
                "Structuration juridique",
                "2 500 €"
              ],
              [
                "Administration initiale",
                "1 500 €"
              ],
              [
                "Coût total d'établissement",
                "9 000 €"
              ]
            ]
          },
          {
            "t": "table",
            "caption": "Maintenance annuelle",
            "head": [
              "Poste",
              "Coût"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [
              3
            ],
            "rows": [
              [
                "Agent enregistré",
                "1 000 €"
              ],
              [
                "Renouvellement public et social",
                "1 000 €"
              ],
              [
                "Administration de l'agent",
                "500 €"
              ],
              [
                "Coût annuel total",
                "2 500 €"
              ]
            ]
          },
          {
            "t": "note",
            "x": "Le suivi de conformité et le reporting sont fournis par le socle de la plateforme IFB et ne sont pas dupliqués ici."
          }
        ]
      },
      {
        "id": "platform",
        "n": "8",
        "nav": "Plateforme & frais",
        "title": "Phase II - La Plateforme Family Office IFB",
        "blocks": [
          {
            "t": "p",
            "x": "Le véhicule en place, la famille est intégrée à la Plateforme Family Office IFB. La plateforme est modulaire par conception. La famille paie un petit socle obligatoire, puis ajoute uniquement les services qu'elle souhaite et laisse le reste. Rien n'est imposé qui demeure inutilisé, et le coût diminue en part des actifs à mesure que la famille croît."
          },
          {
            "t": "h",
            "x": "Le socle"
          },
          {
            "t": "p",
            "x": "Un seul service est obligatoire. C'est le minimum requis pour faire fonctionner la structure, et il est délibérément sobre."
          },
          {
            "t": "ul",
            "x": [
              "Compte family office et accès bancaire.",
              "Coordination de la conservation, y compris le conservateur qualifié de la réserve Bitcoin.",
              "Reporting trimestriel consolidé sur l'ensemble des poches.",
              "Suivi LBC et conformité, avec coordination des déclarations CRS et FATCA.",
              "Une revue annuelle de la structure."
            ]
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Socle de la plateforme",
              "Frais annuels"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [
              0
            ],
            "rows": [
              [
                "Obligatoire pour chaque relation",
                "6 500 €"
              ]
            ]
          },
          {
            "t": "h",
            "x": "Modules optionnels"
          },
          {
            "t": "p",
            "x": "Au-delà du socle, chaque service est autonome. La famille prend ce qui le mérite et ne réserve rien d'autre."
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Module",
              "Ce qu'il couvre",
              "Frais"
            ],
            "aligns": [
              "left",
              "left",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Gestion d'investissement",
                "Gestion conseillée ou discrétionnaire selon l'IPS",
                "0,40 % / 0,75 %"
              ],
              [
                "Trésorerie et change",
                "Gestion active de la trésorerie et des devises, paiements",
                "2 500 €"
              ],
              [
                "Secrétariat du comité",
                "Dossiers trimestriels, animation, procès-verbaux",
                "3 500 €"
              ],
              [
                "Succession et patrimoine",
                "Planification des bénéficiaires, lettre de vœux, successeurs",
                "3 500 €"
              ],
              [
                "Coordination fiscale",
                "Déclarations CRS et FATCA, avec vos propres conseils",
                "2 000 €"
              ],
              [
                "Mise en place de la gouvernance",
                "Charte, Politique d'Investissement, comité",
                "6 500 € unique"
              ],
              [
                "Liaison trust (plus tard)",
                "Interface avec le trustee des Îles Cook",
                "2 000 €"
              ],
              [
                "Conciergerie et projets",
                "Mandats ponctuels",
                "Sur devis"
              ]
            ]
          },
          {
            "t": "note",
            "x": "L'investissement en exécution seule est compris dans le socle sans frais supplémentaires. Les frais de gestion ne portent que sur les actifs effectivement gérés par IFB, et jamais sur la réserve Bitcoin auto-conservée. Sur la base actuellement gérée d'environ 690 000 €, cela représente près de 2 800 € par an en conseil, ou 5 200 € en discrétionnaire."
          },
          {
            "t": "h",
            "x": "Trois façons de l'assembler"
          },
          {
            "t": "p",
            "x": "La plupart des familles retiennent l'un de trois forfaits. Chacun est tarifé environ un dixième en deçà de la somme de ses composantes."
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Service",
              "Essentiel",
              "Géré",
              "Full Office"
            ],
            "aligns": [
              "left",
              "center",
              "center",
              "center"
            ],
            "total": [
              7,
              8
            ],
            "rows": [
              [
                "Socle de la plateforme",
                "Inclus",
                "Inclus",
                "Inclus"
              ],
              [
                "Gestion d'investissement",
                "Exécution",
                "Conseil",
                "Discrétionnaire"
              ],
              [
                "Trésorerie et change",
                "-",
                "Inclus",
                "Inclus"
              ],
              [
                "Secrétariat du comité",
                "-",
                "Inclus",
                "Inclus"
              ],
              [
                "Succession et patrimoine",
                "-",
                "-",
                "Inclus"
              ],
              [
                "Coordination fiscale",
                "-",
                "Inclus",
                "Inclus"
              ],
              [
                "Gouvernance (unique)",
                "Optionnel",
                "Optionnel",
                "Inclus"
              ],
              [
                "Tout compris indicatif, par an",
                "6 500 €",
                "~15 500 €",
                "~20 900 €"
              ],
              [
                "En part de 1,15 M€",
                "0,6 %",
                "1,3 %",
                "1,8 %"
              ]
            ]
          },
          {
            "t": "chart",
            "kind": "fees",
            "caption": "Coût annuel de la plateforme et part des actifs, par forfait."
          },
          {
            "t": "p",
            "x": "Les modules fixes ne bougent pas à mesure que la famille croît. Seuls les frais de gestion varient avec les actifs, et ils diminuent en pourcentage. Un forfait qui coûte 1,3 % des actifs aujourd'hui en coûte plutôt 1 % à 3 millions d'euros, et moins au-delà. La famille choisit le forfait, et ce choix peut évoluer à chaque revue."
          }
        ]
      },
      {
        "id": "portfolio",
        "n": "9",
        "nav": "Portefeuille",
        "title": "Phase III - Construction du portefeuille",
        "blocks": [
          {
            "t": "p",
            "x": "La détention unique est reconstruite en quatre poches. Chacune a un rôle défini, un poids cible et une attente de rendement. La conviction sur le Bitcoin est conservée ; la fragilité est supprimée."
          },
          {
            "t": "chart",
            "kind": "allocation",
            "caption": "Répartition cible du patrimoine de 1,15 M€."
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Poche",
              "Poids",
              "Montant",
              "Rendement cible"
            ],
            "aligns": [
              "left",
              "right",
              "right",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Réserve Bitcoin",
                "40 %",
                "460 000 €",
                "Croissance de l'actif"
              ],
              [
                "Revenu",
                "30 %",
                "345 000 €",
                "6 % – 10 %"
              ],
              [
                "Liquidité",
                "15 %",
                "172 500 €",
                "2 % – 4 %"
              ],
              [
                "Opportunité",
                "15 %",
                "172 500 €",
                "10 % – 20 %+"
              ]
            ]
          },
          {
            "t": "h",
            "x": "Réserve Bitcoin - 40 %"
          },
          {
            "t": "p",
            "x": "460 000 € conservés en Bitcoin sous conservation qualifiée institutionnelle, avec contrôle multi-signatures. La famille conserve sa position de conviction ; ce qui change, c'est que l'actif est détenu en sécurité et ne représente plus la totalité du patrimoine."
          },
          {
            "t": "h",
            "x": "Revenu - 30 %"
          },
          {
            "t": "p",
            "x": "345 000 € placés en dette privée senior sécurisée, financement du commerce, prêts adossés à des actifs et dette d'infrastructure, visant 6 % à 10 %. Sur ces chiffres, la poche produit environ 20 700 € à 34 500 € de revenu récurrent par an. Sur les forfaits les plus légers, ce revenu couvre intégralement le coût de fonctionnement de toute la structure, de sorte que le capital de la famille finance sa propre administration plutôt que l'inverse."
          },
          {
            "t": "h",
            "x": "Liquidité - 15 %"
          },
          {
            "t": "p",
            "x": "172 500 € en quasi-liquidités et instruments à court terme, visant 2 % à 4 %. C'est la réserve qui honore les appels et supprime la nécessité de vendre un actif de long terme au mauvais moment."
          },
          {
            "t": "h",
            "x": "Opportunité - 15 %"
          },
          {
            "t": "p",
            "x": "172 500 € réservés au capital-investissement, au capital-risque et aux situations spéciales, visant 10 % à 20 % et davantage. Elle porte l'éventail de résultats le plus large, ce qui est précisément la raison pour laquelle c'est la poche la plus petite."
          }
        ]
      },
      {
        "id": "projections",
        "n": "10",
        "nav": "Projections",
        "title": "Projections de rendement et de croissance",
        "blocks": [
          {
            "t": "p",
            "x": "Le graphique ci-dessous illustre la croissance du patrimoine de 1,15 M€ sur dix ans selon trois hypothèses de rendement mixte. Les montants sont composés annuellement et présentés avant frais et impôts. Ce sont des illustrations, non des garanties."
          },
          {
            "t": "chart",
            "kind": "projection",
            "caption": "Croissance illustrative sur dix ans du patrimoine de 1,15 M€."
          },
          {
            "t": "table",
            "caption": "Résultats illustratifs à dix ans",
            "head": [
              "Scénario",
              "Rendement mixte",
              "Valeur à 10 ans"
            ],
            "aligns": [
              "left",
              "right",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Prudent",
                "5 %",
                "1 873 000 €"
              ],
              [
                "Équilibré",
                "8 %",
                "2 483 000 €"
              ],
              [
                "Croissance",
                "12 %",
                "3 572 000 €"
              ]
            ]
          },
          {
            "t": "p",
            "x": "Outre la croissance du capital, la poche de revenu devrait distribuer environ 20 700 € à 34 500 € par an. Les chiffres ci-dessus traitent ce revenu comme distribué plutôt que réinvesti ; la composition présentée est donc prudente."
          }
        ]
      },
      {
        "id": "trust",
        "n": "11",
        "nav": "Couche trust",
        "title": "La couche de protection - Trust des Îles Cook",
        "blocks": [
          {
            "t": "p",
            "x": "Lorsque les actifs atteignent environ 3 à 5 millions d'euros, un trust des Îles Cook est placé au-dessus de la société de Nevis. Les Îles Cook sont largement considérées comme la juridiction de protection patrimoniale civile la plus solide en usage courant. Un jugement étranger n'y est pas reconnu ; un créancier doit porter la réclamation à nouveau devant les tribunaux locaux, selon un standard de preuve élevé, dans un délai de prescription bref."
          },
          {
            "t": "p",
            "x": "Il s'agit d'un instrument de protection civile, non d'un dispositif de dissimulation ou d'évitement fiscal. Le trust est entièrement déclaré aux autorités compétentes au titre de la CRS et de FATCA, et la position fiscale de la famille n'en est pas affectée."
          },
          {
            "t": "table",
            "caption": "Coût indicatif (futur, tiers)",
            "head": [
              "Poste",
              "Coût"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Établissement du trust (unique)",
                "20 000 – 35 000 €"
              ],
              [
                "Trustee (annuel)",
                "6 000 – 12 000 €"
              ],
              [
                "Liaison trust IFB (annuel)",
                "2 000 €"
              ]
            ]
          },
          {
            "t": "note",
            "x": "Ces montants ne sont engagés qu'au seuil d'actifs et sont confirmés avec le trustee lors de l'établissement."
          }
        ]
      },
      {
        "id": "governance",
        "n": "12",
        "nav": "Gouvernance",
        "title": "Gouvernance familiale",
        "blocks": [
          {
            "t": "p",
            "x": "Une structure sans gouvernance n'est qu'un ensemble de comptes en attente d'un différend. Quatre instruments donnent à la famille une constitution."
          },
          {
            "t": "ul",
            "x": [
              "Charte familiale. Les valeurs, la philosophie d'investissement, la tolérance au risque et les principes de succession à l'aune desquels chaque décision ultérieure est éprouvée.",
              "Politique d'Investissement (IPS). Le mandat : les poches, leurs poids, les règles de rééquilibrage et les limites de gestion des actifs.",
              "Comité d'investissement. L'instance qui se réunit chaque trimestre, examine le portefeuille et prend des décisions consignées.",
              "Droits de décision. Une cartographie claire de qui peut instruire, qui doit approuver et qui est informé."
            ]
          },
          {
            "t": "p",
            "x": "Ces documents sont rédigés une fois, lors de la mise en place de la gouvernance, et revus chaque année. Ce sont les premiers documents que la génération suivante devrait lire."
          }
        ]
      },
      {
        "id": "succession",
        "n": "13",
        "nav": "Succession",
        "title": "Planification successorale",
        "blocks": [
          {
            "t": "p",
            "x": "La structure est conçue pour survivre à son fondateur. La succession est planifiée dès l'origine plutôt qu'improvisée après une perte."
          },
          {
            "t": "ul",
            "x": [
              "Les parts de la société de Nevis se transmettent selon un plan défini, et non dans le désordre d'une succession ab intestat.",
              "Une lettre de vœux guide le trustee, une fois le trust en place, sur les intentions de la famille.",
              "Les successeurs sont identifiés, informés et préparés, afin que le contrôle se transfère sans rupture.",
              "Les dispositifs de conservation et de signature survivent à l'absence de tout individu."
            ]
          },
          {
            "t": "p",
            "x": "L'objectif est la continuité : que le bureau fonctionne le lendemain d'une perte exactement comme la veille."
          }
        ]
      },
      {
        "id": "tax",
        "n": "14",
        "nav": "Fiscalité",
        "title": "La position fiscale",
        "blocks": [
          {
            "t": "lead",
            "x": "La fiscalité n'est pas un accessoire de cette structure. Elle en est l'un des objets. Le but est précis : que la famille acquitte ce qui est légalement dû, au bon endroit, au bon moment, et pas un euro de plus, avec la certitude que confère le fait d'agir au grand jour."
          },
          {
            "t": "p",
            "x": "On confond souvent efficience et dissimulation. Ce sont des contraires. La dissimulation, soustraire un actif à l'autorité qui détient une créance sur lui, est fragile et illégale ; sous la norme commune de déclaration, elle ne fonctionne d'ailleurs plus : un compte étranger est signalé à l'autorité de résidence du titulaire de manière routinière. L'efficience, elle, est légale, durable et déclarée. Elle organise les affaires de sorte que les règles elles-mêmes produisent une charge plus légère et plus claire. Cette structure poursuit la seconde et n'a aucune part à la première."
          },
          {
            "t": "p",
            "x": "Trois leviers légaux font le travail."
          },
          {
            "t": "steps",
            "x": [
              {
                "h": "La neutralité de l'entité",
                "b": "Une société de Nevis n'est pas imposée sur ses avoirs au niveau de l'entité. La famille n'est donc pas imposée deux fois, une fois dans la structure et une fois entre ses mains. L'impôt naît là où la famille est résidente, non comme une couche supplémentaire à l'intérieur du véhicule."
              },
              {
                "h": "La maîtrise du calendrier",
                "b": "Un actif détenu au sein d'une société peut être réalisé de manière planifiée plutôt que par à-coups, ce qui permet d'organiser, de compenser et de cadencer les plus-values au lieu de les cristalliser par accident. La mesure dans laquelle cela diffère l'impôt dépend de la résidence de la famille et des règles qui s'y appliquent."
              },
              {
                "h": "L'efficience successorale",
                "b": "L'impôt le plus lourd que rencontre la plupart des familles est celui qui frappe la transmission à la génération suivante. Une société placée sous un trust, constituée en temps utile, permet de préparer cette transmission et d'en réduire le coût, dans les limites du droit applicable à la famille, plutôt que de la laisser aux taux par défaut qui s'imposent lorsque rien n'est fait."
              },
              {
                "h": "La résidence, levier décisif",
                "b": "C'est là où la famille est fiscalement résidente que se détermine la plus grande part de la note. Tout changement de résidence obéit à ses propres règles, y compris l'imposition des plus-values latentes au moment du départ, et doit être préparé avec un conseil avant d'être engagé, jamais après. La structure est conçue pour accueillir cette préparation, non pour s'y substituer."
              }
            ]
          },
          {
            "t": "callout",
            "x": "La transparence entière n'est pas le prix de cette structure. Elle en est la protection. Un dispositif que les autorités peuvent voir et accepter ne peut être défait par elles plus tard. Cette certitude vaut, pour une famille, davantage que toute économie achetée par le secret."
          },
          {
            "t": "p",
            "x": "La fiscalité dépend de faits que ce document ne présume pas : où chaque membre de la famille est résident, où il est domicilié, et comment chaque juridiction qualifie la société, le trust et l'actif. Rien ici ne constitue un conseil fiscal. La structure est conçue pour être mise en œuvre aux côtés d'un conseil fiscal qualifié dans le pays de la famille, et chaque montant de cette proposition est exprimé avant impôt."
          }
        ]
      },
      {
        "id": "compliance",
        "n": "15",
        "nav": "Conformité & risque",
        "title": "Conformité, conservation et risque",
        "blocks": [
          {
            "t": "h",
            "x": "Conformité et transparence"
          },
          {
            "t": "p",
            "x": "Chaque couche de cette structure est entièrement déclarée. La société de Nevis, la relation de family office et le trust éventuel sont déclarés au titre de la CRS et de FATCA, et la position fiscale de la famille est tenue avec ses propres conseils. Il s'agit d'une structuration licite, ouvertement déclarée. Ce n'est ni de la dissimulation, ni de l'évitement."
          },
          {
            "t": "h",
            "x": "Conservation"
          },
          {
            "t": "p",
            "x": "La réserve Bitcoin est détenue auprès d'un conservateur qualifié institutionnel sous contrôle multi-signatures. Aucune clé seule et aucune personne seule ne peuvent déplacer les actifs."
          },
          {
            "t": "h",
            "x": "Risque opérationnel et de personne-clé"
          },
          {
            "t": "p",
            "x": "Deux défaillances sont anticipées : la perte d'une clé et la perte d'une personne. La conservation multi-signatures supprime toute clé unique comme point de défaillance. Une liste définie de signataires autorisés, consignée dans les documents de gouvernance, maintient le fonctionnement du bureau si le principal est indisponible. La concentration sur les conservateurs et contreparties est revue chaque année."
          },
          {
            "t": "h",
            "x": "Risque de portefeuille"
          },
          {
            "t": "p",
            "x": "Les risques du portefeuille sont compris et dimensionnés plutôt qu'ignorés. Le Bitcoin est volatil, et limité à 40 %. La dette privée est moins liquide que la dette cotée, et adossée à son échéance. La poche d'opportunité porte l'éventail de résultats le plus large, ce qui est précisément pourquoi elle est la plus petite."
          }
        ]
      },
      {
        "id": "roadmap",
        "n": "16",
        "nav": "Feuille de route",
        "title": "Feuille de route de mise en œuvre",
        "blocks": [
          {
            "t": "p",
            "x": "Les deux premières phases se déroulent en parallèle et s'achèvent en environ trois mois. La couche trust suit plus tard, selon le seuil d'actifs plutôt que le calendrier."
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Phase",
              "Activités",
              "Calendrier"
            ],
            "aligns": [
              "left",
              "left",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Phase I",
                "KYC, constitution de Nevis, documentation, ouverture de compte",
                "Semaines 1–4"
              ],
              [
                "Phase II",
                "Intégration family office, adoption de l'IPS, premier comité",
                "Semaines 4–8"
              ],
              [
                "Phase III",
                "Transfert des actifs, construction du portefeuille, financement",
                "Semaines 6–12"
              ],
              [
                "Plus tard",
                "Trust des Îles Cook au seuil de 3 à 5 M€",
                "Futur"
              ]
            ]
          }
        ]
      },
      {
        "id": "costs",
        "n": "17",
        "nav": "Coûts",
        "title": "Récapitulatif consolidé des coûts",
        "blocks": [
          {
            "t": "p",
            "x": "Les chiffres ci-dessous rassemblent les coûts. Les lignes de la plateforme IFB sont des alternatives, non des additions : la famille choisit un seul forfait. La couche trust est présentée séparément, car elle n'est engagée que plus tard."
          },
          {
            "t": "h",
            "x": "Unique"
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Poste",
              "Montant"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Établissement de Nevis",
                "9 000 €"
              ],
              [
                "Gouvernance (Géré et Full Office)",
                "6 500 €"
              ]
            ]
          },
          {
            "t": "h",
            "x": "Récurrent, par an"
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Poste",
              "Montant"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Maintenance annuelle de Nevis",
                "2 500 €"
              ],
              [
                "Plateforme IFB - Essentiel",
                "6 500 €"
              ],
              [
                "Plateforme IFB - Géré",
                "~15 500 €"
              ],
              [
                "Plateforme IFB - Full Office",
                "~20 900 €"
              ]
            ]
          },
          {
            "t": "h",
            "x": "Futur - Trust des Îles Cook"
          },
          {
            "t": "table",
            "caption": "",
            "head": [
              "Poste",
              "Montant"
            ],
            "aligns": [
              "left",
              "right"
            ],
            "total": [],
            "rows": [
              [
                "Établissement du trust (unique)",
                "20 000 – 35 000 €"
              ],
              [
                "Trustee (annuel)",
                "6 000 – 12 000 €"
              ],
              [
                "Liaison trust IFB (annuel)",
                "2 000 €"
              ]
            ]
          },
          {
            "t": "note",
            "x": "La gestion d'investissement au sein des forfaits est facturée sur les actifs gérés et varie avec eux. Les conditions de structuration uniques sont confirmées dans la lettre de mission. Les coûts de trust tiers sont confirmés avec le trustee lors de l'établissement."
          }
        ]
      },
      {
        "id": "recommendation",
        "n": "18",
        "nav": "Recommandation",
        "title": "Recommandation et prochaines étapes",
        "blocks": [
          {
            "t": "p",
            "x": "Nous recommandons de mener la Phase I et la Phase II ensemble : constituer la société de Nevis et ouvrir la relation de family office, puis reconstruire le portefeuille dans les semaines qui suivent. La couche trust suit lorsque les actifs le justifient."
          },
          {
            "t": "p",
            "x": "Sur la plateforme, nous suggérons le forfait Géré au départ. Il couvre le conseil, la trésorerie, le secrétariat du comité, la coordination fiscale et le reporting pour environ 15 500 € par an, confortablement dans les limites du revenu que le portefeuille est conçu pour produire. La famille peut évoluer vers Full Office lorsque le trust est ajouté, ou revenir à Essentiel à tout moment. Le choix demeure celui de la famille."
          },
          {
            "t": "ol",
            "x": [
              "Confirmer les instructions et achever l'intégration KYC.",
              "Constituer la LLC d'Investissement Familiale de Nevis.",
              "Ouvrir le compte Family Office IFB et choisir un forfait de plateforme.",
              "Adopter la Politique d'Investissement et réunir le premier comité.",
              "Transférer les actifs et construire le portefeuille."
            ]
          }
        ]
      },
      {
        "id": "notice",
        "n": "19",
        "nav": "Avertissement",
        "title": "Avertissement important",
        "blocks": [
          {
            "t": "p",
            "x": "Ce document est une proposition de discussion. Il ne constitue ni un conseil juridique, fiscal ou d'investissement, ni une offre, ni une sollicitation. Les chiffres illustratifs ne sont pas des garanties ; la valeur des investissements peut baisser comme augmenter, et les actifs numériques sont particulièrement volatils. Les caractéristiques juridictionnelles sont résumées et peuvent évoluer. La famille devrait obtenir un conseil juridique et fiscal indépendant dans chaque juridiction concernée avant de procéder. La mise en œuvre est subordonnée à une diligence satisfaisante et à la signature d'accords formels."
          },
          {
            "t": "note",
            "x": "Le Bitcoin est valorisé à un prix de référence d'environ 54 800 € par unité, soit environ 1 150 000 € pour 21 BTC. Le montant est réévalué au prix du marché lors du financement, et chaque projection s'ajuste en conséquence. Les pourcentages de répartition s'appliquent à cette base. Les scénarios de croissance supposent un rendement mixte composé annuellement sur dix ans, avant frais et impôts."
          }
        ]
      }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) module.exports = CONTENT;
if (typeof window !== "undefined") window.__FALLBACK_CONTENT__ = null;
