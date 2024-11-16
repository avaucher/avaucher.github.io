import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StyledPage } from "@/app/lib/page_styling";
import NavLinks from "@/app/ui/nav-links";
import Image from "next/image";

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
          {/* Sidebar block */}
          <aside className="w-full md:w-1/4 p-1 md:p-4 space-y-1 md:space-y-4 rounded shadow flex flex-col items-center mx-auto">
            <div className="font-bold text-center text-2xl">Alain Vaucher</div>
            <div className="w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden">
              <Image
                src="/alain_vaucher.jpg"
                alt="Alain Vaucher"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </aside>

          {/* Main content area */}
          <div className="w-full md:w-3/4">
            <header>
              <div className="flex items-center md:justify-end justify-center">
                <nav className="text-sm font-medium space-x-6">
                  <NavLinks />
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
        </div>
      </body>
    </html>
  );
}
