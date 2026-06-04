export default function robots() {
  const base = "https://vishwatejendra.github.io";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
