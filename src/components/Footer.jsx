import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="brand-gradient h-1.5 w-full" aria-hidden="true" />
      <div className="bg-charcoal text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <Logo variant="inverse" height={28} />
            <p className="max-w-xs text-sm leading-relaxed text-white/65">
              Acceptance is where it starts. A quiet space for when things feel
              like too much.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
            <Link to="/about" className="transition-colors hover:text-white">
              Our Story
            </Link>
            <Link to="/features" className="transition-colors hover:text-white">
              Product
            </Link>
            <Link to="/pricing" className="transition-colors hover:text-white">
              Pricing
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-6xl border-t border-white/10 px-6 py-5 sm:px-8">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} embrace. Take your time.
          </p>
        </div>
      </div>
    </footer>
  )
}
