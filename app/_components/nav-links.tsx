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
      className="hover:underline aria-[current=page]:font-bold"
    >
      {label}
    </Link>
  ))
}
