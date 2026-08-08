import Section from '../components/Section'
import Button from '../components/Button'
import FadeIn from '../components/FadeIn'

export default function About() {
  return (
    <>
      <Section className="pt-36 sm:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-orange-deep">
            Our Story
          </p>
          <h1 className="font-display text-4xl tracking-tight text-charcoal sm:text-5xl md:text-6xl">
            Why we built a slow app.
          </h1>
        </div>

        <FadeIn delay={0.1}>
          <figure className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-[1.75rem] sm:mt-16">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80"
              alt="Friends gathered in a warm, sunlit room talking quietly"
              className="aspect-[16/10] w-full object-cover"
              loading="eager"
            />
          </figure>
        </FadeIn>
      </Section>

      <Section narrow className="pt-8 sm:pt-10 md:pt-12">
        <div className="space-y-7 text-base leading-[1.9] text-muted sm:text-lg">
          <p>
            We built Embrace for the moments when everything stacks up. When
            stress sits in your chest. When burnout makes even small things feel
            far away. When overwhelm doesn&apos;t have a neat explanation.
          </p>
          <p>
            There are plenty of tools that want to fix you, organize you, or push
            you forward. This isn&apos;t one of them.
          </p>
        </div>
      </Section>

      {/* Mission on brand gradient */}
      <section className="brand-gradient">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
          <FadeIn>
            <p className="font-display text-2xl leading-relaxed text-white sm:text-3xl md:leading-[1.45]">
              “Embrace” exists because mental health still goes unspoken in too
              many rooms. We build spaces, campaigns, conversations, and
              community where people can ask for help without having to justify
              why they need it. The name says it plainly: acceptance is where it
              starts.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section narrow>
        <blockquote className="border-l-2 border-blue pl-6 sm:pl-8">
          <p className="font-display text-2xl leading-relaxed text-charcoal sm:text-3xl">
            You don&apos;t have to feel better right away. You only have to take
            a moment.
          </p>
        </blockquote>
        <p className="mt-8 text-muted">
          That&apos;s the whole idea — and we&apos;re still holding onto it.
        </p>
        <div className="mt-10">
          <Button to="/contact" variant="dark">
            Say hello
          </Button>
        </div>
      </Section>

      {/* Atmospheric close */}
      <section className="px-6 pb-24 sm:px-8 sm:pb-32">
        <FadeIn>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=80"
              alt="Sunlight filtering through trees into a quiet clearing"
              className="aspect-[21/9] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 font-display text-xl text-white sm:bottom-8 sm:left-8 sm:text-2xl">
              Quiet is enough.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
