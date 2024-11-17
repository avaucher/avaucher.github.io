import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StyledPage } from "@/app/lib/page_styling";
import Navigation from "@/app/ui/navigation";
import Sidebar from "@/app/ui/sidebar";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Alain Vaucher',
    default: 'Alain Vaucher',
  },
  description: 'Alain Vaucher\'s webpage',
  metadataBase: new URL('https://avaucher.github.io'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <div className="max-w-4xl mx-auto py-10 px-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/4">
            <Sidebar />
          </div>

          {/* Main content area */}
          <div className="w-full md:w-3/4">
            <Navigation />

            <main>
              <StyledPage>
                {children}
              </StyledPage>
            </main>
          </div>
        </div>
      </body>
      <GoogleAnalytics gaId="G-H568MBVZZJ" />
    </html>
  );
}
