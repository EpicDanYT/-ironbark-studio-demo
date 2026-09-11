import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ClassPackSelector from '@/components/ClassPackSelector';
import MembershipSelector from '@/components/MembershipSelector';
import PersonalTrainingSelector from '@/components/PersonalTrainingSelector';
import Reveal from '@/components/Reveal';
import { intro, classPricing, membershipPricing, ptPricing, business } from '@/content/site';

export const metadata: Metadata = {
  title: `Pricing — ${business.name}`,
  description: 'Class packs, memberships and personal training rates at Ironbark Studio.',
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        kicker="Pricing"
        title="No lock-in, no joining fee."
        intro="Every pack and membership works across the whole timetable — reformer, strength and mobility."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        {/* Intro offer */}
        <Reveal className="flex flex-wrap items-baseline justify-between gap-6 bg-pine p-8 text-chalk sm:p-10">
          <div className="max-w-xl">
            <h2 className="text-heading text-chalk-bright">{intro.name}</h2>
            <p className="mt-3 text-sage">{intro.detail}</p>
          </div>
          <p className="font-display text-5xl font-extrabold tracking-tight text-chalk-bright">
            {intro.price}
          </p>
        </Reveal>

        {/* Packs */}
        <div className="mt-16">
          <Reveal>
            <h2 className="text-heading">{classPricing.heading}</h2>
            <p className="mt-2 max-w-2xl text-pine/70">{classPricing.note}</p>
          </Reveal>

          <Reveal delayMs={80} className="mt-8">
            <ClassPackSelector />
          </Reveal>
        </div>

        {/* Memberships — interactive */}
        <div className="mt-16">
          <Reveal>
            <h2 className="text-heading">{membershipPricing.heading}</h2>
            <p className="mt-2 max-w-2xl text-pine/70">{membershipPricing.note}</p>
          </Reveal>

          <Reveal delayMs={80} className="mt-8">
            <MembershipSelector />
          </Reveal>
        </div>

        {/* Personal training — interactive */}
        <div className="mt-16">
          <Reveal>
            <h2 className="text-heading">{ptPricing.heading}</h2>
            <p className="mt-2 max-w-2xl text-pine/70">{ptPricing.note}</p>
          </Reveal>

          <Reveal delayMs={80} className="mt-8">
            <PersonalTrainingSelector />
          </Reveal>
        </div>

        <Link
          href="/book/"
          className="mt-12 inline-block bg-cobalt px-7 py-4 font-display text-base font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep"
        >
          Book a class
        </Link>
      </section>
    </>
  );
}
