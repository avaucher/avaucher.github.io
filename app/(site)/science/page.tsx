import Science from '@/markdown/science.mdx'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Science",
};

export default function Page() {
    return <Science />
}