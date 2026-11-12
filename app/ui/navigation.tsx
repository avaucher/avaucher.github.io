import NavLinks from "@/app/ui/nav-links";


export default function Navigation() {
    return (
      <>
        <hr className="mb-4 border-slate-200 dark:border-slate-800" />
        <header>
            <div className="flex items-center md:justify-end justify-center">
            <nav className="text-sm font-medium space-x-6">
                <NavLinks />
            </nav>
            </div>
        </header>
        <hr className="mt-4 border-slate-200 dark:border-slate-800" />
      </>
    );
}