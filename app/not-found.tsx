import Link from 'next/link'
import { Metadata } from 'next';
import { StyledPage } from "@/app/lib/page_styling";
import Navigation from "@/app/ui/navigation";
import Sidebar from "@/app/ui/sidebar";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-1/4">
        <Sidebar />
      </div>
      <div className="w-full md:w-3/4">
        <Navigation />
        <main>
          <StyledPage>
            <h2>404 — Not Found</h2>
            <p>This page does not exist.</p>
            <Link href="/">Return to the homepage</Link>
          </StyledPage>
        </main>
      </div>
    </div>
  )
}