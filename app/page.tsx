import Link from 'next/link'

export default function Home() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Campus Bookings</h1>
      <p>Rooms, IT kit and sports facilities.</p>
      <ul className="list-disc pl-6">
        <li>Study rooms</li>
        <li>IT equipment</li>
        <li>Sports facilities</li>
      </ul>
      <p>
        <Link href="/resources" className="font-medium underline">
          Browse resources
        </Link>
      </p>
      <p>
        <Link href="/boundary" className="underline">
          Server vs client demo
        </Link>
      </p>
      <p className="text-sm text-slate-500">Built by Aidan Wickes · SOUD2528</p>
    </section>
  )
}
