import Link from 'next/link'
import type { Resource } from '@/lib/resources'

type Props = { resource: Resource; popular?: boolean }

export default function ResourceCard({ resource, popular }: Props) {
  return (
    <article className="rounded-xl bg-white p-6 text-slate-900 shadow-sm hover:shadow-lg">
      <h2 className="text-xl font-semibold">{resource.name}</h2>
      <p className="mt-2">
        <span className="rounded-full bg-teal-100 px-3 text-sm">{resource.type}</span>
      </p>
      <p className="mt-2">{resource.capacity} seats</p>
      {popular && <p className="text-sm text-slate-500">Popular this week</p>}
      <Link
        href={`/resources/${resource.id}`}
        className="mt-4 inline-block font-medium underline focus-visible:outline-2"
      >
        View
      </Link>
    </article>
  )
}
