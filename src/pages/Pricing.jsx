import { useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import FadeIn from '../components/FadeIn'
import Button from '../components/Button'

const faqs = [
  {
    q: 'Can I use Embrace for free?',
    a: 'Yes. The free plan includes a handful of sessions, music, and breathing guides — enough to begin gently.',
  },
  {
    q: 'Is there a commitment?',
    a: 'No. Cancel anytime. We won’t send noisy reminders or countdown timers.',
  },
  {
    q: 'Does Premium work offline?',
    a: 'Yes. With Premium you can download sessions and listen without a connection.',
  },
  {
    q: 'Who is Embrace for?',
    a: 'Anyone who needs a quieter moment — no experience required, and nothing to achieve.',
  },
]

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-charcoal sm:text-base">
          {item.q}
        </span>
        <span
          className={`text-xl leading-none text-muted transition-transform duration-400 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-muted sm:text-[15px]">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <Section className="pt-36 sm:pt-40">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-blue">
            Pricing
          </p>
          <h1 className="font-display text-4xl tracking-tight text-charcoal sm:text-5xl">
            Simple, quiet options.
          </h1>
          <p className="mt-5 text-muted sm:text-lg">
            No pressure. Take what helps.
          </p>
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 md:pt-0">
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2 md:gap-6">
          <FadeIn>
            <div className="flex h-full flex-col rounded-[1.75rem] bg-white p-8 ring-1 ring-line sm:p-10">
              <p className="text-sm font-medium text-muted">Monthly</p>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl text-charcoal">$6</span>
                <span className="text-sm text-muted">/ month</span>
              </p>
              <p className="mt-3 text-sm text-muted">
                Full library, when you want a little more.
              </p>
              <ul className="my-8 flex-1 space-y-3 text-[15px] text-muted">
                <li>Full meditation library</li>
                <li>Expanded calming music</li>
                <li>Longer breathing journeys</li>
              </ul>
              <Button to="/contact" variant="blue" className="w-full">
                Start Monthly
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-charcoal p-8 text-white sm:p-10">
              <div
                className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-orange/30 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-blue/25 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-sm font-medium text-white/60">Annual</p>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl">$48</span>
                  <span className="text-sm text-white/55">/ year</span>
                </p>
                <p className="mt-3 text-sm text-white/65">
                  Two months kindly on us. Same quiet access.
                </p>
                <ul className="my-8 flex-1 space-y-3 text-[15px] text-white/70">
                  <li>Everything in Monthly</li>
                  <li>Offline listening</li>
                  <li>Early access to new sessions</li>
                </ul>
                <Button to="/contact" variant="orange" className="w-full">
                  Start Annual
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>

        <p className="mx-auto mt-10 max-w-md text-center text-sm text-muted">
          Prefer to begin gently?{' '}
          <Link to="/" className="font-medium text-blue transition-colors hover:text-blue-deep">
            Stay on Free
          </Link>
        </p>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
