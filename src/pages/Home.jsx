import Button from '../components/Button'
import Section from '../components/Section'
import FeatureCard from '../components/FeatureCard'
import AudioPlayer from '../components/AudioPlayer'
import BreathCircle from '../components/BreathCircle'
import FadeIn from '../components/FadeIn'
import { IconBreath, IconMeditation, IconMusic } from '../components/icons'

export default function Home() {
  return (
    <>
      {/* Hero — Nothing to achieve */}
      <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="animate-drift absolute -left-20 top-28 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
          <div className="animate-drift absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-blue/15 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-4xl flex-col items-center px-6 pb-16 text-center sm:px-8">
          <FadeIn>
            <h1 className="font-display text-4xl leading-tight tracking-tight text-charcoal sm:text-5xl md:text-6xl">
              Nothing to achieve.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base text-muted sm:text-lg">
              A quiet space for when things feel like too much.
            </p>
          </FadeIn>

          <FadeIn delay={0.12} className="my-10 sm:my-14">
            <BreathCircle />
          </FadeIn>

          <FadeIn delay={0.2} className="w-full max-w-md">
            <AudioPlayer />
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <Button to="/pricing" variant="orange">
                Download Now
              </Button>
              <Button to="/features" variant="blue">
                Explore Sessions
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <Section>
        <div className="mb-14 max-w-lg md:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-blue">
            Inside the app
          </p>
          <h2 className="font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            Small tools. Soft pace.
          </h2>
          <p className="mt-4 text-muted">
            Open what you need. Leave the rest. No streaks. No pressure.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
          <FeatureCard
            icon={<IconMeditation />}
            title="Guided Meditation"
            description="Soft voices that meet you where you are — no pressure to feel better."
            accent="blue"
          />
          <FeatureCard
            icon={<IconMusic />}
            title="Calming Music"
            description="Quiet soundscapes meant to settle the room around you."
            accent="orange"
            delay={0.08}
          />
          <FeatureCard
            icon={<IconBreath />}
            title="Breathing Exercises"
            description="Simple rhythms to help you slow down, one breath at a time."
            accent="blue"
            delay={0.16}
          />
        </div>
      </Section>

      {/* Philosophy band */}
      <section className="relative overflow-hidden">
        <div className="logo-pattern absolute inset-0 opacity-90" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:px-8 sm:py-28">
          <FadeIn>
            <h2 className="font-display text-3xl text-charcoal sm:text-4xl md:text-5xl">
              Just support.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-charcoal/85 sm:text-lg">
              Embrace isn&apos;t clinical. It isn&apos;t about getting more done.
              It&apos;s a small place to rest when the day feels heavy.
            </p>
            <div className="mt-10">
              <Button to="/about" variant="orange">
                Our Story
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <Section>
        <div className="overflow-hidden rounded-4xl bg-white ring-1 ring-line">
          <div className="brand-gradient h-1.5 w-full" />
          <div className="px-8 py-14 text-center sm:px-12 sm:py-16">
            <h2 className="font-display text-3xl text-charcoal sm:text-4xl">
              Take a moment for yourself
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Whenever you&apos;re ready. There&apos;s no rush.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button href="#" variant="orange" className="min-w-40">
                App Store
              </Button>
              <Button href="#" variant="blue" className="min-w-40">
                Play Store
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
