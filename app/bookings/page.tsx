export const metadata = {
  title: 'My bookings',
}

export default function BookingsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight">My bookings</h1>
      <p className="period-grid mt-6 rounded-md border-2 border-dashed border-rule-strong px-6 py-16 text-center text-lg font-semibold text-ink-soft">
        No bookings yet.
      </p>
    </>
  )
}
