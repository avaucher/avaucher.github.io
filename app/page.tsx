import About from '@/markdown/about.mdx'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About me | Alain Vaucher",  // template from layout.tsx not applied because it's in the same segment.
};

export default function Page() {
    return <About />
}