'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/resources', label: 'Resources' },
  { href: '/bookings', label: 'My bookings' },
]

export default function NavLinks() {
  const pathname = usePathname()
  return links.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      aria-current={pathname === href ? 'page' : undefined}
      className="rounded-sm px-3 py-1.5 font-semibold text-white/90 transition-colors duration-150 ease-out hover:bg-white/10 hover:text-white focus-visible:outline-equipment aria-[current=page]:bg-white aria-[current=page]:text-ink"
    >
      {label}
    </Link>
  ))
}
