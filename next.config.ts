import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for cPanel/Apache hosting — `npm run build` emits plain
  // HTML/CSS/JS into `out/`, uploaded to public_html.
  output: "export",
  // Emit pages as directories (services/index.html) so Apache serves
  // /services/ natively without rewrite rules.
  trailingSlash: true,
  // Static export has no image optimization server — serve images as-is.
  images: { unoptimized: true },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
