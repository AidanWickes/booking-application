import Link from 'next/link'
import type { Resource } from '@/lib/resources'

type Props = { resource: Resource; popular?: boolean }

export default function ResourceCard({ resource, popular }: Props) {
  return (
    <article
      data-type={resource.type}
      className="flex h-48 flex-col rounded-md bg-(--block) p-5 text-(--on-block) shadow-[0_1px_3px_rgb(34_34_59/0.18)]"
    >
      <h2 className="text-2xl font-bold leading-tight text-balance">{resource.name}</h2>
      {popular && <p className="mt-1 text-sm font-semibold">Popular this week</p>}
      <div className="mt-auto flex items-baseline gap-4 border-t border-current/25 pt-3">
        <p className="text-sm font-bold uppercase tracking-wider">{resource.type}</p>
        <p className="font-semibold tabular-nums">{resource.capacity} seats</p>
        <Link
          href={`/resources/${resource.id}`}
          className="ml-auto rounded-sm font-bold underline decoration-2 underline-offset-4 transition-[text-underline-offset] duration-150 ease-out hover:underline-offset-2"
        >
          View
        </Link>
      </div>
    </article>
  )
}
