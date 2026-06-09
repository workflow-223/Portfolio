import { useState, useEffect, useCallback } from 'react'

interface Props {
  strings: string[]
  speed?: number
  deleteSpeed?: number
  pause?: number
}

export function TypeAnimation({ strings, speed = 100, deleteSpeed = 50, pause = 2000 }: Props) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const tick = useCallback(() => {
    const current = strings[idx]

    if (!deleting) {
      if (charIdx < current.length) {
        setDisplay(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      } else {
        setTimeout(() => setDeleting(true), pause)
        return
      }
    } else {
      if (charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      } else {
        setDeleting(false)
        setIdx((i) => (i + 1) % strings.length)
        return
      }
    }
  }, [idx, charIdx, deleting, strings, pause])

  useEffect(() => {
    const timer = setTimeout(tick, deleting ? deleteSpeed : speed)
    return () => clearTimeout(timer)
  }, [tick, deleting, deleteSpeed, speed])

  return (
    <span>
      {display}
      <span className="animate-pulse text-primary-500">|</span>
    </span>
  )
}
