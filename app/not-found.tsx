import Link from 'next/link'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Page not found",
};
 
export default function NotFound() {
  return (
    <div>
      <h2>404 — Not Found</h2>
      <p>This page does not exist.</p>
      <Link href="/">Return to the homepage</Link>
    </div>
  )
}