import mark from '../assets/logo-mark.png'

export default function Logo({
  className = '',
  showWordmark = true,
  variant = 'color',
  height = 32,
}) {
  const isInverse = variant === 'inverse'
  const text = isInverse ? 'text-white' : 'text-charcoal'

  return (
    <span className={`inline-flex items-center gap-2.5 ${text} ${className}`}>
      <img
        src={mark}
        alt=""
        height={height}
        width={Math.round(height * 1.42)}
        className="block h-[1em] w-auto"
        style={{ height }}
        draggable={false}
      />
      {showWordmark && (
        <span
          className="font-sans text-[1.35rem] font-medium lowercase tracking-[-0.02em]"
          style={{ fontSize: Math.max(16, Math.round(height * 0.72)) }}
        >
          embrace
        </span>
      )}
    </span>
  )
}
