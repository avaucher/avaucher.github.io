import { StyledPage } from "@/app/lib/page_styling";
import Navigation from "@/app/ui/navigation";
import Sidebar from "@/app/ui/sidebar";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-white focus:text-black"
      >
        Skip to main content
      </a>
      <div className="max-w-4xl mx-auto py-10 px-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="w-full md:w-3/4">
          <Navigation />

          <main id="main-content">
            <StyledPage>
              {children}
            </StyledPage>
          </main>
        </div>
      </div>
    </>
  );
}
