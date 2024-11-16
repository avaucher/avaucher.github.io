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
          return (
            <Link 
              key={link.name}
              href={link.href}
              className={clsx(
                '',
                {
                  'font-extrabold': pathname === link.href,
                },
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </>
    );
  }
