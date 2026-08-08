import FadeIn from './FadeIn'

export default function Section({
  children,
  id,
  className = '',
  narrow = false,
  fade = true,
}) {
  const content = (
    <div
      className={`mx-auto w-full px-6 sm:px-8 ${
        narrow ? 'max-w-2xl' : 'max-w-5xl'
      }`}
    >
      {children}
    </div>
  )

  return (
    <section id={id} className={`py-24 sm:py-32 md:py-36 ${className}`}>
      {fade ? <FadeIn>{content}</FadeIn> : content}
    </section>
  )
}
