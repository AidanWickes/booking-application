import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p>We couldn’t find that page or resource.</p>
      <Link href="/resources" className="underline">
        Back to all resources
      </Link>
    </section>
  )
}
