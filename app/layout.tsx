import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Alain Vaucher',
    default: 'Alain Vaucher',
  },
  description: 'Alain Vaucher — Senior Software Engineer working on Gemini.',
  metadataBase: new URL('https://avaucher.github.io'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alain Vaucher',
  url: 'https://avaucher.github.io',
  image: 'https://avaucher.github.io/alain_vaucher.jpg',
  jobTitle: 'Software Engineer / Researcher',
  worksFor: { '@type': 'Organization', 'name': 'Google Research' },
  alumniOf: { '@type': 'Organization', 'name': 'ETH Zurich' },
  homeLocation: { '@type': 'Place', 'name': 'Zurich, Switzerland' },
  award: 'MIT Technology Review 35 Innovators Under 35, 2022',
  description: 'Senior Software Engineer (ML) at Google Research, working on Gemini. ETH Zurich alumnus with a background in ML and chemistry.',
  sameAs: [
    'https://github.com/avaucher',
    'https://www.linkedin.com/in/acvaucher/',
    'https://x.com/acvaucher',
    'https://scholar.google.com/citations?user=fWS-rosAAAAJ',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        {children}
        <GoogleAnalytics gaId="G-H568MBVZZJ" />
      </body>
    </html>
  );
}
