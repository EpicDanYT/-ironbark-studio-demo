import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Timetable from '@/components/Timetable';
import ImageSlot from '@/components/ImageSlot';
import Reveal from '@/components/Reveal';
import { classTypes, scheduleNote, business } from '@/content/site';

export const metadata: Metadata = {
  title: `Classes — ${business.name}`,
  description: 'The full weekly timetable at Ironbark Studio — reformer, strength and mobility classes.',
};

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        kicker="Classes"
        title="Six ways to train, one timetable."
        intro="Pick the class that suits the day you are having. Every pack and membership works across the whole schedule."
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ImageSlot slot="classesHeader" className="w-full" />
      </div>

      {/* --------------------------------------------------------- Class types */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-title">The classes</h2>
            <Link
              href="/pricing/"
              className="bg-cobalt px-6 py-3 font-display text-sm font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep"
            >
              See pricing
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {classTypes.map((c, i) => (
            <Reveal key={c.id} delayMs={(i % 3) * 80}>
              <div className="flex h-full flex-col bg-stone p-7">
                <h3 className="text-heading">{c.name}</h3>
                <p className="mt-2 font-display text-sm font-semibold tracking-tight text-cobalt">
                  {c.length} · {c.cap} · {c.level}
                </p>
                <p className="mt-3 flex-1 text-lg text-pine/80">{c.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- Timetable */}
      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-title">This week</h2>
              <Link
                href="/book/"
                className="bg-cobalt px-6 py-3 font-display text-sm font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep"
              >
                Book a class
              </Link>
            </div>
          </Reveal>

          <Reveal delayMs={100} className="mt-12">
            <Timetable />
          </Reveal>

          <p className="mt-6 max-w-2xl text-sm text-pine/65">{scheduleNote}</p>
        </div>
      </section>

      {/* --------------------------------------------------------------- CTA */}
      <section className="bg-pine text-chalk">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-5 py-16 sm:px-8">
          <h2 className="max-w-xl text-title text-chalk-bright">Ready to see what it costs?</h2>
          <Link
            href="/pricing/"
            className="bg-cobalt px-7 py-4 font-display text-base font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep"
          >
            See pricing
          </Link>
        </Reveal>
      </section>
    </>
  );
}
