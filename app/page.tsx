import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import Reveal from '@/components/Reveal';
import { business, differences, classTypes, intro, hours } from '@/content/site';

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="bg-pine text-chalk">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="reveal font-display text-sm font-semibold tracking-tight text-cobalt">
              {business.suburb}, {business.city}
            </p>

            <h1 className="reveal reveal-2 mt-5 text-display text-chalk-bright">
              Strength
              <br />
              takes
              <br />
              its time.
            </h1>

            <p className="reveal reveal-3 mt-8 max-w-lg text-lg leading-relaxed text-sage">
              Ironbark is a reformer Pilates and strength studio built for people who want to keep
              training for the next thirty years, not the next thirty days. Eight reformers, six
              barbells, and a coach who knows your name and your springs.
            </p>

            <div className="reveal reveal-4 mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/book/"
                className="bg-cobalt px-7 py-4 font-display text-base font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep"
              >
                Book a class
              </Link>
              <Link
                href="/classes/"
                className="border border-chalk/35 px-7 py-4 font-display text-base font-bold tracking-tight text-chalk hover:border-chalk"
              >
                See the timetable
              </Link>
            </div>
          </div>

          <ImageSlot slot="heroMain" className="reveal reveal-4 w-full" />
        </div>
      </section>

      {/* ------------------------------------------------------ Intro offer bar */}
      <section className="bg-cobalt text-chalk-bright">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-6 sm:px-8">
          <p className="max-w-2xl font-display text-base font-semibold tracking-tight sm:text-lg">
            {intro.name} — {intro.price}. Any class in the timetable.
          </p>
          <Link
            href="/book/"
            className="border border-chalk-bright/60 px-5 py-2.5 font-display text-sm font-bold tracking-tight hover:bg-chalk-bright hover:text-cobalt"
          >
            Start here
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------- What's different */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="max-w-3xl text-title">A small room, run properly.</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {differences.map((d, i) => (
            <Reveal key={d.heading} delayMs={i * 90}>
              <div className="bg-stone p-7">
                <h3 className="text-heading">{d.heading}</h3>
                <p className="mt-3 text-pine/75">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 grid gap-5 sm:grid-cols-2">
          <ImageSlot slot="homeStrength" />
          <ImageSlot slot="homeReformer" />
        </Reveal>
      </section>

      {/* ------------------------------------------------------------- Classes */}
      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-title">What you can train here.</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/classes/"
                className="border border-pine/25 bg-chalk-bright px-5 py-2.5 font-display text-sm font-bold tracking-tight hover:border-pine/50"
              >
                Full timetable
              </Link>
              <Link
                href="/pricing/"
                className="bg-cobalt px-5 py-2.5 font-display text-sm font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep"
              >
                Pricing
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {classTypes.map((c, i) => (
              <Reveal key={c.id} delayMs={(i % 3) * 80}>
                <div className="flex h-full flex-col bg-chalk-bright p-7">
                  <h3 className="font-display text-xl font-bold tracking-tight">{c.name}</h3>
                  <p className="mt-1.5 font-display text-sm font-semibold tracking-tight text-cobalt">
                    {c.length} · {c.cap}
                  </p>
                  <p className="mt-3 flex-1 text-base text-pine/75">{c.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Studio band */}
      <Reveal>
        <ImageSlot slot="homeBand" className="w-full" />
      </Reveal>

      {/* --------------------------------------------------------------- Visit */}
      <section className="bg-pine text-chalk">
        <Reveal className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <div>
            <h2 className="text-title text-chalk-bright">Come and try one.</h2>
            <p className="mt-6 max-w-md text-lg text-sage">
              The first class is the hardest one to book and the easiest one to do. If you are not
              sure which class suits you, or you have an injury to work around, send an enquiry and
              a coach will tell you where to start.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book/"
                className="bg-cobalt px-7 py-4 font-display text-base font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep"
              >
                Book a class
              </Link>
              <Link
                href="/book/#enquiry"
                className="border border-chalk/35 px-7 py-4 font-display text-base font-bold tracking-tight text-chalk hover:border-chalk"
              >
                Ask a question first
              </Link>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <h3 className="font-display text-sm font-bold tracking-tight text-cobalt">Open</h3>
            <dl className="mt-5 space-y-3">
              {hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-8 border-b border-chalk/12 pb-3">
                  <dt className="text-chalk/90">{h.days}</dt>
                  <dd className="text-sage">{h.open}</dd>
                </div>
              ))}
            </dl>
            <address className="mt-8 text-sage not-italic">
              {business.address.line1}
              <br />
              {business.address.line2}
            </address>
          </div>
        </Reveal>
      </section>
    </>
  );
}
