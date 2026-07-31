import type { MetadataRoute } from "next";
import { siteUrl } from "./layout";
import { EVENTS } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/events", "/team", "/contact-us", "/apply"];

  return [
    ...routes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    })),
    ...EVENTS.map((e) => ({
      url: `${siteUrl}/events/${e.slug}`,
      lastModified: new Date(),
    })),
  ];
}
