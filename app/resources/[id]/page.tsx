import { notFound } from 'next/navigation'
import { getResource } from '@/lib/resources'

export default async function ResourcePage(props: PageProps<'/resources/[id]'>) {
  const { id } = await props.params
  const resource = getResource(id)
  if (!resource) notFound()

  return (
    <article data-type={resource.type} className="space-y-4 rounded-md bg-(--block) p-6 text-(--on-block) sm:p-8">
      <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">{resource.name}</h1>
      <p className="border-t border-current/25 pt-4 text-xl font-semibold tabular-nums">Up to {resource.capacity} people</p>
    </article>
  )
}
