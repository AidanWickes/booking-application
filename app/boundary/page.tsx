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
    <section>
      <h1>Server vs client</h1>
      <p>Server time: {time}</p>
      <p>Secret length: {secret.length}</p>
      <ClickCounter start={3} />
      <Link href="/">Home</Link>
    </section>
  )
}
