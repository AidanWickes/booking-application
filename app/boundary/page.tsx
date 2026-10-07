import Link from 'next/link'
import ClickCounter from './click-counter'

export const metadata = {
  title: 'Server vs client',
}

export default function BoundaryPage() {
  console.log('[server] page rendered')
  const secret = process.env.SECRET_MESSAGE ?? ''
  const time = new Date().toLocaleTimeString()
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">Server vs client</h1>
      <p className="tabular-nums">Server time: {time}</p>
      <p className="tabular-nums">Secret length: {secret.length}</p>
      <ClickCounter start={3} />
      <Link href="/" className="block font-semibold underline decoration-2 underline-offset-4">Home</Link>
    </section>
  )
}
