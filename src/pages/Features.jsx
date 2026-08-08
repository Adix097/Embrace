import Section from '../components/Section'
import FadeIn from '../components/FadeIn'
import AudioPlayer from '../components/AudioPlayer'
import BreathCircle from '../components/BreathCircle'
import Button from '../components/Button'
import { IconBreath, IconMeditation, IconMusic } from '../components/icons'

function SessionList({ items }) {
  return (
    <div className="space-y-1 rounded-3xl border border-line bg-white p-3 sm:p-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex items-center justify-between gap-4 rounded-2xl px-4 py-4 transition-colors duration-300 hover:bg-canvas"
        >
          <div>
            <p className="text-[15px] font-medium text-charcoal">{item.title}</p>
            <p className="mt-0.5 text-sm text-muted">{item.meta}</p>
          </div>
          <span className="text-xs font-medium text-blue">{item.length}</span>
        </div>
      ))}
    </div>
  )
}

export default function Features() {
  return (
    <>
      <Section className="pt-36 sm:pt-40">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-blue">
            Product
          </p>
          <h1 className="font-display text-4xl tracking-tight text-charcoal sm:text-5xl">
            Made to feel unhurried.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Everything in Embrace moves at a human pace. Open what you need,
            leave the rest.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-soft text-blue">
              <IconMeditation />
            </div>
            <h2 className="font-display text-3xl text-charcoal sm:text-4xl">
              Guided meditation
            </h2>
            <p className="max-w-md leading-relaxed text-muted">
              Sessions that don&apos;t ask you to empty your mind. Just a calm
              voice, a little space, and permission to arrive as you are.
            </p>
          </div>
          <FadeIn delay={0.1}>
            <SessionList
              items={[
                { title: 'Soft landing', meta: 'For heavy evenings', length: '10 min' },
                { title: 'Sitting with worry', meta: 'Gentle presence', length: '15 min' },
                { title: 'Morning quiet', meta: 'Before the day begins', length: '8 min' },
              ]}
            />
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn className="order-2 md:order-1">
            <div className="rounded-3xl border border-line bg-canvas p-6 sm:p-8">
              <AudioPlayer title="The Mountain" />
              <p className="mt-5 text-sm text-muted">
                Ambient · a quiet listen
              </p>
            </div>
          </FadeIn>
          <div className="order-1 space-y-5 md:order-2">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-soft text-orange-deep">
              <IconMusic />
            </div>
            <h2 className="font-display text-3xl text-charcoal sm:text-4xl">
              Music library
            </h2>
            <p className="max-w-md leading-relaxed text-muted">
              Soft beds of sound — piano, rain, distant tones — made for filling
              a room without asking for your attention.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-soft text-blue">
              <IconBreath />
            </div>
            <h2 className="font-display text-3xl text-charcoal sm:text-4xl">
              Breathing exercises
            </h2>
            <p className="max-w-md leading-relaxed text-muted">
              Visual guides that move at a human pace. The point isn&apos;t
              perfection — it&apos;s giving your body something steady to hold
              onto.
            </p>
            <Button to="/pricing" variant="orange">
              Try a session
            </Button>
          </div>
          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-line bg-white py-8">
              <BreathCircle />
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  )
}
