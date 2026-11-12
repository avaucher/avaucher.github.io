import Science from '@/markdown/science.mdx'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Science",
  description: "Scientific publications, talks, and posters by Alain Vaucher across machine learning, Gemini, digital chemistry, and quantum chemistry.",
};

export default function Page() {
    return <Science />
}