import Link from 'next/link';
import { business } from '@/content/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/classes/', label: 'Classes' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-pine/12 bg-chalk/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="font-display text-lg font-extrabold tracking-tight">
          {business.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-sm font-semibold tracking-tight text-pine/75 hover:text-pine"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book/"
            className="bg-cobalt px-5 py-2.5 font-display text-sm font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep"
          >
            Book a class
          </Link>
        </nav>

        {/* Mobile menu — a <details> element, so no client JS ships for this. */}
        <details className="group relative lg:hidden">
          <summary className="cursor-pointer list-none border border-pine/25 px-4 py-2 font-display text-sm font-bold tracking-tight [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Menu</span>
            <span className="hidden group-open:inline">Close</span>
          </summary>
          <div className="absolute right-0 mt-3 w-60 border border-pine/15 bg-chalk-bright p-2 shadow-xl">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block px-3 py-3 font-display text-sm font-semibold tracking-tight"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book/"
              className="mt-1 block bg-cobalt px-3 py-3 font-display text-sm font-bold tracking-tight text-chalk-bright"
            >
              Book a class
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
