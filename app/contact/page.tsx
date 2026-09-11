import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ImageSlot from '@/components/ImageSlot';
import Reveal from '@/components/Reveal';
import { business, hours, hoursNote, gettingHere, firstVisit } from '@/content/site';

export const metadata: Metadata = {
  title: `Contact — ${business.name}`,
  description: `Ironbark Studio is at ${business.address.line1}, ${business.address.line2}. Hours, location, and how to reach us.`,
};

const mapQuery = encodeURIComponent(business.address.mapQuery);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Down the driveway, black roller door."
        intro={`${business.address.line1}, ${business.address.line2}`}
      />

      {/* ------------------------------------------------------- Contact + map */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <h2 className="text-heading">Get in touch</h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="font-display text-sm font-bold tracking-tight text-pine/55">Phone</dt>
                <dd className="mt-1">
                  <a href={business.phoneHref} className="text-lg text-cobalt underline underline-offset-4">
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-bold tracking-tight text-pine/55">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${business.email}`}
                    className="text-lg text-cobalt underline underline-offset-4"
                  >
                    {business.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-bold tracking-tight text-pine/55">
                  Instagram
                </dt>
                <dd className="mt-1">
                  <a
                    href={business.instagramUrl}
                    className="text-lg text-cobalt underline underline-offset-4"
                  >
                    {business.instagram}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-bold tracking-tight text-pine/55">
                  Address
                </dt>
                <dd className="mt-1 text-lg">
                  <address className="not-italic">
                    {business.address.line1}
                    <br />
                    {business.address.line2}
                  </address>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    className="mt-2 inline-block font-display text-sm font-bold tracking-tight text-cobalt underline decoration-2 underline-offset-4"
                    rel="noopener"
                  >
                    Get directions
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 bg-stone p-6">
              <h3 className="font-display text-sm font-bold tracking-tight">Not ready to book?</h3>
              <p className="mt-2 text-sm text-pine/70">
                Questions about injuries, which class to start with, or 1:1 training go through the
                enquiry form — a coach reads every one.
              </p>
              <Link
                href="/book/#enquiry"
                className="mt-4 inline-block bg-cobalt px-5 py-2.5 font-display text-sm font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep"
              >
                Send an enquiry
              </Link>
            </div>

            <h2 className="mt-12 text-heading">Hours</h2>
            <dl className="mt-6 space-y-2">
              {hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-6 bg-stone px-4 py-3">
                  <dt>{h.days}</dt>
                  <dd className="text-pine/65">{h.open}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-pine/65">{hoursNote}</p>
          </Reveal>

          <Reveal delayMs={100} className="grid gap-5">
            <ImageSlot slot="visitExterior" />
            <div className="border border-pine/20">
              <iframe
                title={`Map showing ${business.name}`}
                src={`https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`}
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: 'block' }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- Getting here */}
      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="text-heading">Getting here</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {gettingHere.map((g) => (
                <p key={g.heading} className="text-pine/80">
                  <span className="font-display text-sm font-bold tracking-tight text-pine">
                    {g.heading}.{' '}
                  </span>
                  {g.body}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- First visit */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <h2 className="text-title">Your first class</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {firstVisit.map((f) => (
              <li key={f} className="bg-stone p-5 text-pine/80">
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-pine text-chalk">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-5 py-16 sm:px-8">
          <h2 className="max-w-xl text-title text-chalk-bright">See you down the driveway.</h2>
          <Link
            href="/book/"
            className="bg-cobalt px-7 py-4 font-display text-base font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep"
          >
            Book a class
          </Link>
        </Reveal>
      </section>
    </>
  );
}
