import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zeisnet Kenya — IT Services & Technology Solutions, Mombasa",
    short_name: "Zeisnet",
    description:
      "IT consulting, cloud, cybersecurity, networking and digital skills training for businesses in Mombasa, Kenya and across Africa.",
    start_url: "/",
    display: "standalone",
    background_color: "#050a16",
    theme_color: "#050a16",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
