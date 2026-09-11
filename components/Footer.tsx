import Link from 'next/link';
import { business, hours } from '@/content/site';

export default function Footer() {
  return (
    <footer className="bg-pine-deep text-chalk">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight">{business.name}</p>
            <p className="mt-3 max-w-sm text-sage">{business.tagline}</p>
            <Link
              href="/book/"
              className="mt-6 inline-block bg-cobalt px-6 py-3 font-display text-sm font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep"
            >
              Book a class
            </Link>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold tracking-tight text-chalk">Find us</h2>
            <address className="mt-4 space-y-1 text-sm not-italic text-sage">
              <p>{business.address.line1}</p>
              <p>{business.address.line2}</p>
              <p className="pt-3">
                <a href={business.phoneHref} className="hover:text-chalk">
                  {business.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${business.email}`} className="hover:text-chalk">
                  {business.email}
                </a>
              </p>
              <p>
                <a href={business.instagramUrl} className="hover:text-chalk">
                  {business.instagram}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold tracking-tight text-chalk">Open</h2>
            <dl className="mt-4 space-y-2 text-sm text-sage">
              {hours.map((h) => (
                <div key={h.days}>
                  <dt className="text-chalk/90">{h.days}</dt>
                  <dd>{h.open}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-chalk/12 pt-6 text-xs text-sage sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. ABN {business.abn}.
          </p>
          <nav className="flex flex-wrap gap-5" aria-label="Footer">
            <Link href="/classes/" className="hover:text-chalk">
              Classes
            </Link>
            <Link href="/pricing/" className="hover:text-chalk">
              Pricing
            </Link>
            <Link href="/about/" className="hover:text-chalk">
              About
            </Link>
            <Link href="/contact/" className="hover:text-chalk">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
