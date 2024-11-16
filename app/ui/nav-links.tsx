import Link from "next/link";

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
    return (
      <>
        {links.map((link) => {
          return (
            <Link 
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </>
    );
  }
