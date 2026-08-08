import { useEffect, useRef, useState } from 'react'

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function AudioPlayer({
  title = 'The Mountain',
  src = '/audio/the-mountain.mp3',
}) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTime = () => setCurrent(audio.currentTime)
    const onMeta = () => setDuration(audio.duration || 0)
    const onEnded = () => {
      setPlaying(false)
      setCurrent(0)
    }

    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  async function togglePlay() {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
      return
    }

    try {
      await audio.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }

  function seek(e) {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    audio.currentTime = ratio * duration
    setCurrent(audio.currentTime)
  }

  const progress = duration ? (current / duration) * 100 : 0

  return (
    <div className="flex w-full items-center gap-4 rounded-2xl border border-line bg-white px-4 py-3.5 shadow-[0_8px_30px_rgba(45,44,43,0.04)] sm:gap-5 sm:px-5">
      <audio ref={audioRef} src={src} preload="metadata" />

      <button
        type="button"
        onClick={togglePlay}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue text-white transition-colors duration-400 hover:bg-blue-deep"
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <rect x="2.5" y="2" width="3" height="10" rx="0.8" />
            <rect x="8.5" y="2" width="3" height="10" rx="0.8" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <path d="M4 2.2v9.6l8-4.8-8-4.8z" />
          </svg>
        )}
      </button>

      <div className="min-w-0 flex-1">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="truncate text-sm font-medium text-charcoal">{title}</p>
          <span className="shrink-0 text-xs text-muted">
            {formatTime(current)} / {formatTime(duration)}
          </span>
        </div>
        <button
          type="button"
          onClick={seek}
          className="block h-[3px] w-full overflow-hidden rounded-full bg-line"
          aria-label="Seek"
        >
          <div
            className="h-full rounded-full bg-orange transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </button>
      </div>
    </div>
  )
}
