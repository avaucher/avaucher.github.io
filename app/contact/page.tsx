import Contact from '@/markdown/contact.mdx'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
    return <Contact />
}