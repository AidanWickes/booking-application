import Link from 'next/link'

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Campus Bookings</h1>
      <p className="text-xl text-ink-soft">Rooms, IT kit and sports facilities.</p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg font-semibold">
        <li data-type="room" className="flex items-center gap-2">
          <span aria-hidden="true" className="size-4 rounded-sm bg-(--block)" />
          Study rooms
        </li>
        <li data-type="equipment" className="flex items-center gap-2">
          <span aria-hidden="true" className="size-4 rounded-sm bg-(--block)" />
          IT equipment
        </li>
        <li data-type="sport" className="flex items-center gap-2">
          <span aria-hidden="true" className="size-4 rounded-sm bg-(--block)" />
          Sports facilities
        </li>
      </ul>
      <p>
        <Link
          href="/resources"
          className="inline-block rounded-md bg-ink px-5 py-3 font-bold text-white transition-colors duration-150 ease-out hover:bg-ink-soft"
        >
          Browse resources
        </Link>
      </p>
      <p>
        <Link href="/boundary" className="font-semibold underline decoration-2 underline-offset-4">
          Server vs client demo
        </Link>
      </p>
      <p className="text-sm text-ink-soft">Built by Aidan Wickes · SOUD2528</p>
    </section>
  )
}
