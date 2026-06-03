export default function sitemap() {
  const base = "https://your-site.vercel.app";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
