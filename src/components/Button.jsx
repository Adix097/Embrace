import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium tracking-wide transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-blue'

const variants = {
  orange: 'bg-orange text-white hover:bg-orange-deep',
  blue: 'bg-blue text-white hover:bg-blue-deep',
  dark: 'bg-charcoal text-white hover:bg-charcoal-soft',
  ghost:
    'bg-transparent text-muted border border-line hover:border-charcoal/30 hover:text-charcoal',
  soft: 'bg-blue-soft text-blue-deep hover:bg-blue-mist',
}

export default function Button({
  children,
  variant = 'orange',
  to,
  href,
  type = 'button',
  className = '',
  onClick,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
