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

const SITE_URL = "https://your-site.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vishwa Pernapati - Portfolio",
    template: "%s · Vishwa Pernapati",
  },
  description:
    "The personal portfolio of Vishwa Pernapati.",
  keywords: [
    "Portfolio",
    "Vishwa Pernapati",
    "Projects",
    "Resume",
    "Personal Website",
  ],
  authors: [{ name: "Vishwa Pernapati" }],
  creator: "Vishwa Pernapati",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Vishwa Pernapati - Portfolio",
    description:
      "The personal portfolio of Vishwa Pernapati.",
    siteName: "Vishwa Pernapati",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwa Pernapati - Portfolio",
    description:
      "The personal portfolio of Vishwa Pernapati.",
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
  jobTitle: "Portfolio Owner",
  description:
    "The personal portfolio of Vishwa Pernapati.",
  knowsAbout: [
    "Projects",
    "Communication",
    "Problem Solving",
    "Digital Work",
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
