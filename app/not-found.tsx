import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="text-lg text-ink-soft">We couldn’t find that page or resource.</p>
      <Link href="/resources" className="inline-block rounded-md bg-ink px-5 py-3 font-bold text-white transition-colors duration-150 ease-out hover:bg-ink-soft">
        Back to all resources
      </Link>
    </section>
  )
}
