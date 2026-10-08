import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import NavLinks from "./_components/nav-links";
import "./globals.css";

// Self-hosted (latin subset, variable weight) so next/font can measure the file for a
// size-matched fallback; next/font/google has no metrics for this family under Turbopack.
const atkinson = localFont({
  src: "./fonts/AtkinsonHyperlegibleNext-latin.woff2",
  weight: "200 800",
  variable: "--font-atkinson",
});

export const metadata: Metadata = {
  title: {
    template: "%s · Campus Bookings",
    default: "Campus Bookings",
  },
  description: "Book study rooms, IT kit and sports facilities at South Devon College.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${atkinson.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <header className="bg-ink text-white">
          <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3 sm:px-6">
            <Link
              href="/"
              className="flex items-center gap-2.5 rounded-sm text-lg font-bold tracking-tight focus-visible:outline-equipment"
            >
              <svg viewBox="0 0 32 32" aria-hidden="true" className="size-7 shrink-0">
                <rect width="32" height="32" rx="6" fill="#ffffff" fillOpacity="0.12" />
                <rect x="5" y="5" width="10" height="22" rx="2" fill="#4a6fa5" />
                <rect x="17" y="5" width="10" height="10" rx="2" fill="#e0a458" />
                <rect x="17" y="17" width="10" height="10" rx="2" fill="#7fb685" />
              </svg>
              Campus Bookings
            </Link>
            <nav aria-label="Main" className="flex gap-1">
              <NavLinks />
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-10">{children}</main>
        <footer className="bg-ink text-sm text-white/80">
          <div aria-hidden="true" className="flex h-1.5">
            <span className="flex-1 bg-room" />
            <span className="flex-1 bg-equipment" />
            <span className="flex-1 bg-sport" />
          </div>
          <p className="p-4 text-center">© South Devon College · SOUD2528</p>
        </footer>
      </body>
    </html>
  );
}
