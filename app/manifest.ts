import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Photo Fixion", short_name: "Photo Fixion", start_url: "/", display: "standalone", background_color: "#FFFFFF", theme_color: "#D91B63", icons: [{ src: "/icon-512.png", sizes: "512x512", type: "image/png" }] };
}
