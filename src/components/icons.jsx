export function IconMeditation({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="7" r="2.5" />
      <path d="M7 21c1.2-4 3.2-6 5-6s3.8 2 5 6" />
      <path d="M6 14c2 .8 4 1.2 6 1.2s4-.4 6-1.2" />
      <path d="M8.5 14.2 6.5 11" />
      <path d="M15.5 14.2 17.5 11" />
    </svg>
  )
}

export function IconMusic({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path d="M20 15a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path d="M9 18V6l11-2v11" />
    </svg>
  )
}

export function IconBreath({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="7" opacity="0.55" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" opacity="0.4" />
    </svg>
  )
}
