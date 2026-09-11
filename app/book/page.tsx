import type { Metadata } from 'next';
import ImageSlot from '@/components/ImageSlot';
import Reveal from '@/components/Reveal';
import EnquiryForm from '@/components/EnquiryForm';
import { booking, business, intro } from '@/content/site';

export const metadata: Metadata = {
  title: `Book — ${business.name}`,
  description:
    'Book a class at Ironbark Studio through Mindbody, or send an enquiry if you would rather ask a question first.',
};

export default function BookPage() {
  return (
    <>
      {/* -------------------------------------------------- Path one: book now */}
      <section className="bg-pine text-chalk">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <p className="font-display text-sm font-semibold tracking-tight text-cobalt">Book</p>
            <h1 className="mt-4 text-title text-chalk-bright">
              Pick a time. Two minutes, done.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-sage">
              The live timetable, your remaining credits and your bookings all sit on{' '}
              {booking.platform.name}. Spots open at the same time each week and the popular classes
              go quickly.
            </p>

            <a
              href={booking.platform.url}
              className="mt-10 inline-block bg-cobalt px-8 py-5 font-display text-lg font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep"
              rel="noopener"
            >
              Book on {booking.platform.name}
            </a>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="bg-pine-deep/60 p-5">
                <h2 className="font-display text-base font-bold tracking-tight text-chalk">
                  First time here
                </h2>
                <p className="mt-2 text-sage">
                  Create an account on {booking.platform.name}, choose the {intro.name} pass ({intro.price}), then
                  book your first class. Arrive ten minutes early and a coach will set you up.
                </p>
              </div>

              <div className="bg-pine-deep/60 p-5">
                <h2 className="font-display text-base font-bold tracking-tight text-chalk">
                  On your phone
                </h2>
                <p className="mt-2 text-sage">{booking.platform.appNote}</p>
              </div>

              <div className="bg-pine-deep/60 p-5">
                <h2 className="font-display text-base font-bold tracking-tight text-chalk">
                  Changing a booking
                </h2>
                <p className="mt-2 text-sage">
                  Cancel more than {booking.cancellationHours} hours before the class and the credit
                  goes straight back to your account. Inside {booking.cancellationHours} hours the
                  class is used, because someone else could have taken the spot.
                </p>
              </div>

              <div className="bg-pine-deep/60 p-5">
                <h2 className="font-display text-base font-bold tracking-tight text-chalk">
                  Class full
                </h2>
                <p className="mt-2 text-sage">{booking.waitlistNote}</p>
              </div>
            </div>
          </div>

          <ImageSlot slot="bookHeader" className="w-full lg:mt-16" />
        </div>
      </section>

      {/* ------------------------------------------------ Path two: enquiry form */}
      <section id="enquiry" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <h2 className="text-title">Not ready to book?</h2>
              <p className="mt-6 text-lg text-pine/80">
                Send a question instead. A coach reads every one of these and replies{' '}
                {booking.enquiryResponseTime} — no sales call, no membership pitch.
              </p>

              <h3 className="mt-10 font-display text-base font-bold tracking-tight">
                Worth asking about
              </h3>
              <ul className="mt-4 space-y-3 text-pine/75">
                <li>An injury, a recent surgery, or something a physio has told you to avoid.</li>
                <li>Which class to start with if you have never used a reformer.</li>
                <li>Training through pregnancy or returning after birth.</li>
                <li>Whether a pack or a membership makes more sense for how often you can come.</li>
                <li>1:1 or semi-private sessions and when a coach has time free.</li>
              </ul>

              <p className="mt-10 text-pine/70">
                You can also call{' '}
                <a href={business.phoneHref} className="text-cobalt underline underline-offset-4">
                  {business.phone}
                </a>{' '}
                or email{' '}
                <a
                  href={`mailto:${business.email}`}
                  className="text-cobalt underline underline-offset-4"
                >
                  {business.email}
                </a>
                .
              </p>
            </Reveal>

            <Reveal delayMs={100} className="bg-stone p-7 sm:p-10">
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
