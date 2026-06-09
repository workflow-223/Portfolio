import { useEffect, useRef, useState, type RefObject } from 'react'

interface Options {
  threshold?: number
  once?: boolean
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
): { ref: RefObject<T | null>; inView: boolean } {
  const { threshold = 0.1, once = true } = options
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, inView }
}
