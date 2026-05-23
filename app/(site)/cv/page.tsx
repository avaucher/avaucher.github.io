import CV from '@/markdown/cv.mdx'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CV",
};

export default function Page() {
    return <CV />
}