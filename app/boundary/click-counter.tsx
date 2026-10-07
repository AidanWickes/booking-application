'use client'
import { useState } from 'react'

export default function ClickCounter({ start }: { start: number }) {
  console.log('[client] counter rendered')
  const [count, setCount] = useState(start)
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  )
}
