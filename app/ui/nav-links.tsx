"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
    { 
      name: 'About me', 
      href: '/', 
    },
    { 
      name: 'Science', 
      href: '/science', 
    },
    { 
      name: 'CV', 
      href: '/cv', 
    },
    { 
      name: 'Contact', 
      href: '/contact', 
    },
  ];


export default function NavLinks() {
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          const isActive =
            link.href === '/'
              ? pathname === '/'
              : pathname === link.href || pathname === `${link.href}/`;
          return (
            <Link 
              key={link.name}
              href={link.href}
              aria-current={isActive ? 'page' : undefined}
              className={clsx(
                'transition-colors underline-offset-8',
                isActive
                  ? 'text-slate-900 dark:text-white underline decoration-2'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </>
    );
  }
