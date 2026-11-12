import Contact from '@/markdown/contact.mdx'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Alain Vaucher or connect on LinkedIn, GitHub, and Stack Overflow.",
};

export default function Page() {
    return <Contact />
}