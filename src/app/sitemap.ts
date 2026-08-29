import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{return ["/","/recruiter"].map(url=>({url,lastModified:new Date()}))}
