# Deploying the Zeisnet Kenya Website to cPanel

The site builds to a **fully static export** — plain HTML, CSS and JS. No Node.js
app, no server process, nothing to keep running. It works on any cPanel shared
hosting plan.

## 1. Build (on your computer)

```bash
npm install
npm run build
```

This produces the complete site in the **`out/`** folder. To package it for
upload, run:

```powershell
powershell -File scripts\make-zip.ps1
```

which creates `zeisnet-site.zip` in the project root.

> **Always use this script, not right-click → "Compress" or PowerShell's
> `Compress-Archive`** — those write Windows-style paths inside the zip,
> which cPanel's Linux extractor mangles (subfolders like `assets/` never
> get created, and the site's CSS/JS 404s).

## 2. Upload to cPanel

1. Log in to cPanel → **File Manager**.
2. Open **`public_html`** (delete or move away any old site files first).
3. Click **Upload** and upload `zeisnet-site.zip`.
4. Back in File Manager, right-click the zip → **Extract** into `public_html`.
5. Delete the zip after extraction.

The contents of `public_html` should look like:

```
public_html/
├── .htaccess            ← Apache config (redirects, caching, HTTPS)
├── index.html           ← home page
├── 404.html
├── services/index.html
├── capacity-building/index.html
├── packages/index.html
├── contact/index.html
├── assets/              ← CSS/JS/fonts (content-hashed, cached 1 year)
├── icon                 ← favicon (PNG)
├── opengraph-image      ← social sharing image (PNG)
├── manifest.webmanifest
├── robots.txt
└── sitemap.xml
```

> **Can't see `.htaccess`?** In File Manager, click **Settings** (top right)
> and enable **Show Hidden Files (dotfiles)**. The `.htaccess` is essential —
> it handles HTTPS redirects, old-URL redirects, caching and MIME types.

## 3. Enable HTTPS

In cPanel → **SSL/TLS Status**, run **AutoSSL** for `zeisnet.co.ke` (free
Let's Encrypt certificate). The `.htaccess` already redirects all HTTP and
`www.` traffic to `https://zeisnet.co.ke`.

## 4. After going live

1. **Google Search Console** — verify the domain and submit
   `https://zeisnet.co.ke/sitemap.xml`.
2. **Google Business Profile** — create/claim it with the exact same
   name, address and phone as the website.
3. Test social previews at [opengraph.xyz](https://www.opengraph.xyz) and
   rich results at [search.google.com/test/rich-results](https://search.google.com/test/rich-results).

## Updating the site later

Make your changes, run `npm run build` again, and re-upload the contents of
`out/` (or the refreshed zip), overwriting the old files. Because HTML is
served with `no-cache` and assets are content-hashed, visitors see updates
immediately — no cache clearing needed.

## Notes & gotchas

- **Why `assets/` instead of Next's default `_next/`:** some cPanel/Apache
  configurations block underscore-prefixed folders, causing every asset to
  404. The build automatically renames the folder and rewrites all
  references (`scripts/postbuild.mjs`) — no manual step needed.

- **Old URLs preserved:** `/our-packages` and `/service-request` from the
  previous site 301-redirect to the new pages (see `.htaccess`).
- The contact form currently **simulates** submission (static hosting has no
  backend). To make it live, point it at a form service (e.g. Formspree,
  Web3Forms) or a small PHP mail script — the form markup is in
  `components/contact-form.tsx`.
- If your cPanel host runs LiteSpeed instead of Apache, everything in
  `.htaccess` still works (LiteSpeed reads Apache directives).
