import CV from '@/markdown/cv.mdx'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum Vitae of Alain Vaucher — experience at Google Research, IBM Research, and BenevolentAI, education at ETH Zurich, and awards.",
};

export default function Page() {
    return <CV />
}