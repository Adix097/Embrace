import FadeIn from './FadeIn'

export default function FeatureCard({ icon, title, description, delay = 0, accent = 'blue' }) {
  const accents = {
    blue: 'bg-blue-soft text-blue',
    orange: 'bg-orange-soft text-orange-deep',
  }

  return (
    <FadeIn delay={delay}>
      <article className="group h-full rounded-3xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(45,44,43,0.06)] sm:p-8">
        <div
          className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accents[accent]}`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-medium tracking-tight text-charcoal">{title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>
      </article>
    </FadeIn>
  )
}
