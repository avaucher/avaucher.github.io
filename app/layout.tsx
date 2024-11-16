import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { StyledPage } from "@/app/lib/page_styling";
import NavLinks from "@/app/ui/nav-links";

const inter = Inter({ subsets: ["latin"] })

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
        <div className="max-w-2xl mx-auto py-10 px-4">
          <header>
            <div className="flex items-center justify-between">
              <nav className="ml-auto text-sm font-medium space-x-6">
                <NavLinks/>
              </nav>
            </div>
          </header>
          <hr className="my-4" />
          <main>
            <StyledPage>
              {children}
            </StyledPage>
          </main>
        </div>
      </body>
    </html>
  );
}