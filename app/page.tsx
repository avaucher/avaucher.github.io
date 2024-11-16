import About from '@/markdown/about.mdx'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Alain Vaucher's personal webpage",
};

export default function Page() {
    return <About />
}