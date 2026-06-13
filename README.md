# IFB Family Office - Client Portal

Multi-client private proposal portal. Platform home for portal.ifcifb.com.

- `public/` - static site (client portal at `/`, administrator console at `/admin/`)
- `public/assets/js/config.js` - public Supabase URL + publishable key (data protected by Row Level Security)
- `seed/content.js` - reference content model (source of truth lives in Supabase)

Backend: Supabase project `wrdmipucobvbiimwwcoo` (Frankfurt), edge function `admin-api`.
Each client is one auth user; isolation is enforced by RLS (`user_id = auth.uid()`).
Deploy: Netlify, publish directory `public`.
