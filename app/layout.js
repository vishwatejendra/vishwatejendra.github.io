import "./globals.css";
import { Space_Grotesk, Sora } from "next/font/google";

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const SITE_URL = "https://vishwatejendra.github.io";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vishwa Pernapati - Portfolio",
    template: "%s · Vishwa Pernapati",
  },
  description:
    "AI Engineer portfolio for Vishwa Pernapati, focused on Azure OpenAI, enterprise RAG systems, .NET, and Oracle-backed intelligent applications.",
  keywords: [
    "Portfolio",
    "Vishwa Pernapati",
    "Projects",
    "Resume",
    "AI Engineer",
    "Azure OpenAI",
    ".NET",
    "Oracle",
    "RAG",
  ],
  authors: [{ name: "Vishwa Pernapati" }],
  creator: "Vishwa Pernapati",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Vishwa Pernapati - Portfolio",
    description:
      "AI Engineer focused on Azure OpenAI, enterprise RAG systems, .NET, and Oracle-backed intelligent applications.",
    siteName: "Vishwa Pernapati",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwa Pernapati - Portfolio",
    description:
      "AI Engineer focused on Azure OpenAI, enterprise RAG systems, .NET, and Oracle-backed intelligent applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vishwa Pernapati",
  url: SITE_URL,
  jobTitle: "Lead Azure AI Engineer",
  description:
    "AI Engineer focused on Azure OpenAI, enterprise RAG systems, .NET, and Oracle-backed intelligent applications.",
  knowsAbout: [
    "Azure OpenAI",
    "RAG Pipelines",
    ".NET",
    "Oracle Database",
    "Enterprise AI",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
