import { notFound } from 'next/navigation'
import { getResource } from '@/lib/resources'

export default async function ResourcePage(props: PageProps<'/resources/[id]'>) {
  const { id } = await props.params
  const resource = getResource(id)
  if (!resource) notFound()

  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-bold">{resource.name}</h1>
      <p>Up to {resource.capacity} people</p>
    </article>
  )
}
