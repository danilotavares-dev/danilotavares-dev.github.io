'use client'

import {
  useScroll,
  useTransform,
  motion,
  useReducedMotion,
} from 'framer-motion'
import { useEffect, useState } from 'react'

function MobileBackground() {
  const { scrollYProgress } = useScroll()

  const pathLength1 = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const pathLength2 = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <div className="fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none flex items-center justify-center">
      <motion.svg
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="absolute w-full h-full"
        style={{
          transform: 'translateZ(0)',
        }}
      >
        <motion.path
          d="M0,0 C30,150 90,50 90,200 C90,350 30,250 30,400 C30,550 90,450 90,600 C90,750 30,650 30,800 C30,950 90,850 90,1000"
          fill="none"
          stroke="url(#grad1-mobile)"
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            pathLength: pathLength1,
            willChange: 'stroke-dashoffset',
          }}
        />
        <motion.path
          d="M100,0 C70,150 10,50 10,200 C10,350 70,250 70,400 C70,550 10,450 10,600 C10,750 70,650 70,800 C70,950 10,850 10,1000"
          fill="none"
          stroke="url(#grad2-mobile)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            pathLength: pathLength2,
            willChange: 'stroke-dashoffset',
          }}
        />

        <defs>
          <linearGradient id="grad1-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#58a6ff" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#79c0ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b949e" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="grad2-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#79c0ff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#30363d" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0d1117" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}

function DesktopBackground() {
  const { scrollYProgress } = useScroll()

  const pathLength1 = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const pathLength2 = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <div className="fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none flex items-center justify-center">
      <motion.svg
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="absolute w-full h-full"
        style={{
          filter: 'blur(75px)',
          transform: 'translateZ(0)',
        }}
      >
        <motion.path
          d="M0,0 C30,150 90,50 90,200 C90,350 30,250 30,400 C30,550 90,450 90,600 C90,750 30,650 30,800 C30,950 90,850 90,1000"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength: pathLength1, willChange: 'stroke-dashoffset' }}
        />
        <motion.path
          d="M100,0 C70,150 10,50 10,200 C10,350 70,250 70,400 C70,550 10,450 10,600 C10,750 70,650 70,800 C70,950 10,850 10,1000"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength: pathLength2, willChange: 'stroke-dashoffset' }}
        />

        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#58a6ff" stopOpacity="1" />
            <stop offset="50%" stopColor="#79c0ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b949e" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#79c0ff" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#30363d" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0d1117" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}

export function BackgroundAnimated() {
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia('(max-width: 768px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (!mounted) {
    return <div className="fixed inset-0 z-[-1] bg-black pointer-events-none" />
  }

  if (shouldReduceMotion || isMobile) {
    return <MobileBackground />
  }

  return <DesktopBackground />
}