export default function sitemap() {
  const base = "https://vishwatejendra.github.io";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
