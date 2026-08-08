import { useState } from 'react'
import Section from '../components/Section'
import Button from '../components/Button'
import FadeIn from '../components/FadeIn'

const fieldClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[15px] text-charcoal placeholder:text-muted/70 transition-colors duration-300 focus:border-blue focus:outline-none'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Section className="pt-36 sm:pt-40" narrow>
        <div className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-orange-deep">
            Contact
          </p>
          <h1 className="font-display text-4xl tracking-tight text-charcoal sm:text-5xl">
            We&apos;re listening.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-muted sm:text-lg">
            Questions, thoughts, or just need a little help — take your time.
          </p>
        </div>
      </Section>

      <Section narrow className="pt-0 sm:pt-0 md:pt-0">
        <FadeIn>
          <div className="rounded-[1.75rem] border border-line bg-white p-7 sm:p-10">
            {submitted ? (
              <div className="py-10 text-center">
                <p className="font-display text-3xl text-charcoal">Thank you</p>
                <p className="mx-auto mt-4 max-w-sm text-muted">
                  We&apos;ve received your message. We&apos;ll reply gently, and
                  soon.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl text-charcoal sm:text-3xl">
                  Say hello.
                </h2>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={fieldClass}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-muted">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={fieldClass}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-muted">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={`${fieldClass} min-h-[140px] resize-y`}
                      placeholder="What's on your mind?"
                    />
                  </div>

                  <Button type="submit" variant="dark" className="mt-2 w-full sm:w-auto">
                    Send message
                  </Button>
                </form>
              </>
            )}
          </div>
        </FadeIn>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted">Or write to us directly</p>
          <a
            href="mailto:support@embrace.app"
            className="mt-2 inline-block font-medium text-blue transition-colors hover:text-blue-deep"
          >
            support@embrace.app
          </a>
        </div>
      </Section>

      <section className="px-6 pb-24 sm:px-8 sm:pb-28">
        <FadeIn>
          <div className="logo-pattern mx-auto max-w-5xl overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:py-20">
            <p className="font-display text-3xl text-white sm:text-4xl">
              You&apos;re not alone in this.
            </p>
            <p className="mx-auto mt-4 max-w-md text-white/80">
              Acceptance is where it starts.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
