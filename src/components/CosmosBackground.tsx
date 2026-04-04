import { useEffect, useRef } from 'react'

export const CosmosBackground = () => {
  const orbe1Ref = useRef<HTMLDivElement>(null)
  const orbe2Ref = useRef<HTMLDivElement>(null)
  const orbe3Ref = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)
  const dot1Ref = useRef<HTMLDivElement>(null)
  const dot2Ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const scrollRef = useRef(0)
  const targetRef = useRef(0)

  useEffect(() => {
    const getScrollProgress = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      return max > 0 ? doc.scrollTop / max : 0
    }

    const applyTransforms = (progress: number) => {
      const p = progress

      if (orbe1Ref.current) {
        const y = p * 60
        const x = p * 30
        orbe1Ref.current.style.transform = `translate(${x}vw, ${y}vh) rotate(${p * 180}deg)`
      }

      if (orbe2Ref.current) {
        const y = p * -60
        const x = p * -20
        orbe2Ref.current.style.transform = `translate(${x}vw, ${y}vh) rotate(${p * -180}deg)`
      }

      if (orbe3Ref.current) {
        orbe3Ref.current.style.transform = `translateY(${p * 15}%)`
      }

      if (starsRef.current) {
        starsRef.current.style.transform = `translateY(${p * 15}%)`
      }

      if (dot1Ref.current) {
        dot1Ref.current.style.transform = `translateY(${p * 60}vh)`
      }

      if (dot2Ref.current) {
        dot2Ref.current.style.transform = `translateY(${p * -60}vh)`
      }
    }

    const animate = () => {
      scrollRef.current += (targetRef.current - scrollRef.current) * 0.08
      applyTransforms(scrollRef.current)
      rafRef.current = requestAnimationFrame(animate)
    }

    const onScroll = () => {
      targetRef.current = getScrollProgress()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-dvh z-[-1] overflow-hidden bg-black contain:strict">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] z-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <div
        ref={starsRef}
        className="absolute inset-[-50%] opacity-30 pointer-events-none will-change-transform"
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="modernStars"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="#ffffff" opacity="0.8" />
              <circle cx="50" cy="40" r="1.5" fill="#c084fc" opacity="0.6" />
              <circle cx="70" cy="70" r="0.5" fill="#22d3ee" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#modernStars)" />
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={orbe1Ref}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-900 blur-[80px] opacity-50 mix-blend-screen will-change-transform"
        />

        <div
          ref={orbe2Ref}
          className="absolute top-[40%] right-[0%] w-[45vw] h-[45vw] rounded-full bg-violet-800/40 blur-[90px] opacity-50 mix-blend-screen will-change-transform"
        />

        <div
          ref={orbe3Ref}
          className="absolute top-[20%] left-[30%] w-[60vw] h-[40vw] rounded-full bg-violet-900 blur-[100px] opacity-30 will-change-transform"
        />
      </div>

      <div
        ref={dot1Ref}
        className="absolute top-1/3 left-[15%] z-10 will-change-transform"
      >
        <div className="w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_20px_4px_rgba(34,211,238,0.8)]" />
      </div>

      <div
        ref={dot2Ref}
        className="absolute bottom-1/4 right-[20%] z-10 will-change-transform"
      >
        <div className="w-3 h-3 rounded-full bg-fuchsia-300 shadow-[0_0_25px_5px_rgba(217,70,239,0.8)]" />
      </div>
    </div>
  )
}
