import { resources } from '@/lib/resources'

export const metadata = {
  title: 'Resources',
}

export default function ResourcesPage() {
  return (
    <ul>
      {resources.map((r) => (
        <li key={r.id}>{r.name}</li>
      ))}
    </ul>
  )
}
