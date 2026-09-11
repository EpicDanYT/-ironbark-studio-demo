import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ImageSlot from '@/components/ImageSlot';
import Reveal from '@/components/Reveal';
import { founder, coaches, studioFacts, business } from '@/content/site';

export const metadata: Metadata = {
  title: `About — ${business.name}`,
  description: `${founder.name} founded Ironbark Studio in Marrickville in 2021. Reformer Pilates and strength coaching under one roof.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About"
        title="One room, one continuum."
        intro="Rehab at one end, a loaded barbell at the other, and no line drawn between them."
      />

      {/* ---------------------------------------------------------- The founder */}
      {/* Note: the portrait uses `sticky`, so it — and its direct ancestors —
          deliberately stay outside the Reveal wrapper. A CSS transform on any
          ancestor (even translateY(0)) breaks position:sticky. Only the text
          column animates. */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <ImageSlot slot="founderPortrait" className="w-full lg:sticky lg:top-28" />

          <Reveal>
            <h2 className="text-title">{founder.name}</h2>
            <p className="mt-2 font-display text-sm font-semibold tracking-tight text-cobalt">
              {founder.role}
            </p>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-pine/85">
              {founder.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h3 className="mt-12 font-display text-base font-bold tracking-tight">Qualifications</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {founder.credentials.map((c) => (
                <li
                  key={c}
                  className="border border-pine/25 bg-stone px-4 py-2 text-sm text-pine/85"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------ The studio */}
      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-title">The room itself</h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-pine/85">
                <p>
                  A joinery workshop for forty years before it was a studio, which is why the ceiling
                  is high enough to press overhead and the floor is solid enough to drop a deadlift
                  on. The reformers sit along the north wall under the original sawtooth windows.
                </p>
                <p>
                  Nothing about the space is designed to hide in. There are no mirrors on the
                  lifting floor, no rows deep enough to disappear into, and no music loud enough to
                  stop a coach talking to you. That is deliberate, and it is the reason the class
                  caps are what they are.
                </p>
              </div>

              <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {studioFacts.map((f) => (
                  <div
                    key={f.label}
                    className="flex min-h-[6.5rem] flex-col justify-center bg-chalk-bright p-4"
                  >
                    <dd className="font-display text-3xl font-extrabold tracking-tight">
                      {f.value}
                    </dd>
                    <dt className="mt-1 text-sm text-pine/60">{f.label}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delayMs={100} className="grid gap-5">
              <ImageSlot slot="aboutStudio" />
              <ImageSlot slot="aboutCoaching" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- The coaches */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <h2 className="text-title">Who is on the floor</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {coaches.map((c, i) => (
            <Reveal key={c.name} delayMs={i * 90}>
              <div className="flex gap-5 bg-stone p-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.photo}
                  alt={c.name}
                  className="h-24 w-24 shrink-0 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-heading">{c.name}</h3>
                  <p className="mt-1 font-display text-sm font-semibold tracking-tight text-cobalt">
                    {c.role}
                  </p>
                  <p className="mt-3 max-w-prose text-pine/80">{c.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------------- CTA */}
      <section className="bg-pine text-chalk">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-5 py-16 sm:px-8">
          <h2 className="max-w-xl text-title text-chalk-bright">Start with one class.</h2>
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
