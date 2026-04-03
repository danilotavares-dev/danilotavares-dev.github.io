import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export const CosmosBackground = () => {
  const { scrollYProgress } = useScroll()

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    mass: 0.1,
  })

  const yOrbe1 = useTransform(smoothScroll, [0, 1], ['0vh', '60vh'])
  const xOrbe1 = useTransform(smoothScroll, [0, 1], ['0vw', '30vw'])
  const rotateOrbe1 = useTransform(smoothScroll, [0, 1], [0, 180])

  const yOrbe2 = useTransform(smoothScroll, [0, 1], ['20vh', '-40vh'])
  const xOrbe2 = useTransform(smoothScroll, [0, 1], ['0vw', '-20vw'])
  const rotateOrbe2 = useTransform(smoothScroll, [0, 1], [0, -180])

  const yStars = useTransform(smoothScroll, [0, 1], ['0%', '15%'])

  return (
    <div className="fixed top-0 left-0 w-full h-[120vh] z-[-1] overflow-hidden bg-[#030014]">
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

      <motion.div
        style={{ y: yStars }}
        className="absolute inset-[-50%] opacity-30 pointer-events-none"
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
      </motion.div>

      <div className="absolute inset-0 opacity-50 mix-blend-screen pointer-events-none">
        <motion.div
          style={{ y: yOrbe1, x: xOrbe1, rotate: rotateOrbe1 }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-800 blur-[120px]"
        />

        <motion.div
          style={{ y: yOrbe2, x: xOrbe2, rotate: rotateOrbe2 }}
          className="absolute top-[40%] right-[0%] w-[45vw] h-[45vw] rounded-full bg-fuchsia-950 blur-[130px]"
        />

        <motion.div
          style={{ y: yStars }}
          className="absolute top-[20%] left-[30%] w-[60vw] h-[40vw] rounded-full bg-violet-800 blur-[150px] opacity-60"
        />
      </div>

      <motion.div
        style={{ y: yOrbe1 }}
        className="absolute top-1/3 left-[15%] z-10"
      >
        <div className="w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_20px_4px_rgba(34,211,238,0.8)]" />
      </motion.div>

      <motion.div
        style={{ y: yOrbe2 }}
        className="absolute bottom-1/4 right-[20%] z-10"
      >
        <div className="w-3 h-3 rounded-full bg-fuchsia-300 shadow-[0_0_25px_5px_rgba(217,70,239,0.8)]" />
      </motion.div>
    </div>
  )
}
