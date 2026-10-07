'use client'
import { useState } from 'react'

export default function ClickCounter({ start }: { start: number }) {
  console.log('[client] counter rendered')
  const [count, setCount] = useState(start)
  return (
    <button
      onClick={() => setCount(count + 1)}
      className="rounded-md bg-ink px-5 py-3 font-bold text-white tabular-nums transition-colors duration-150 ease-out hover:bg-ink-soft"
    >
      Clicked {count} times
    </button>
  )
}
