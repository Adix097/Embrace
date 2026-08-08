import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const phases = [
  { label: 'Breathe in', duration: 4000 },
  { label: 'Hold', duration: 2000 },
  { label: 'Breathe out', duration: 4500 },
]

export default function BreathCircle() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % phases.length)
    }, phases[index].duration)
    return () => clearTimeout(timer)
  }, [index])

  const expanding = phases[index].label === 'Breathe in'

  return (
    <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
      <motion.div
        className="absolute inset-0 rounded-full border border-blue/25"
        animate={{ scale: expanding ? 1.06 : 0.94 }}
        transition={{ duration: phases[index].duration / 1000, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border border-orange/30 sm:inset-10"
        animate={{ scale: expanding ? 1.08 : 0.9 }}
        transition={{ duration: phases[index].duration / 1000, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-[4.5rem] rounded-full bg-blue/10 sm:inset-24"
        animate={{ scale: expanding ? 1.15 : 0.85, opacity: expanding ? 0.9 : 0.45 }}
        transition={{ duration: phases[index].duration / 1000, ease: 'easeInOut' }}
      />
      <AnimatePresence mode="wait">
        <motion.p
          key={phases[index].label}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center text-sm font-medium tracking-wide text-muted"
        >
          {phases[index].label}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
