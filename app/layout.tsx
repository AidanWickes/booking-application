import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="flex items-center justify-between bg-slate-900 p-4 text-white">
          <Link href="/" className="text-lg font-semibold">
            Campus Bookings
          </Link>
          <nav aria-label="Main" className="flex gap-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/resources" className="hover:underline">
              Resources
            </Link>
            <Link href="/bookings" className="hover:underline">
              My bookings
            </Link>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 p-6">{children}</main>
        <footer className="bg-slate-900 p-4 text-center text-sm text-slate-300">
          © South Devon College · SOUD2528
        </footer>
      </body>
    </html>
  );
}
