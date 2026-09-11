'use client';

import { useState } from 'react';
import { booking, business, enquiryReasons, classTypes } from '@/content/site';

const inputStyles =
  'mt-2 w-full border border-pine/30 bg-chalk-bright px-4 py-3 font-body text-base text-pine placeholder:text-pine/40 focus:border-cobalt';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  reason: 'What brings you in',
  interest: 'Class you are curious about',
  availability: 'When you could usually train',
  message: 'Anything a coach should know',
};

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>('idle');
  const hasAccessKey = booking.formAccessKey.length > 0;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // No access key configured: fall back to opening the visitor's own email
    // app with the enquiry pre-filled, so the form is still useful with zero
    // setup.
    if (!hasAccessKey) {
      const name = String(formData.get('name') ?? '');
      const subject = `Enquiry from ${name || 'the website'}`;
      const bodyLines = Object.keys(FIELD_LABELS)
        .map((key) => {
          const value = String(formData.get(key) ?? '').trim();
          return value ? `${FIELD_LABELS[key]}: ${value}` : null;
        })
        .filter(Boolean);

      const mailtoUrl = `mailto:${business.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

      window.location.href = mailtoUrl;
      return;
    }

    // Access key configured: submit straight to Web3Forms.
    setStatus('submitting');

    try {
      const payload = Object.fromEntries(formData.entries());
      payload.access_key = booking.formAccessKey;
      payload.subject = `Enquiry from ${payload.name || 'the website'} — ${business.name}`;

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="border-l-4 border-cobalt bg-chalk-bright p-6">
        <p className="font-display text-base font-bold tracking-tight text-pine">
          Enquiry sent.
        </p>
        <p className="mt-2 text-pine/75">
          A coach will get back to you {booking.enquiryResponseTime}.
        </p>
      </div>
    );
  }

  return (
    <>
      {!hasAccessKey && (
        <p className="mb-8 border-l-4 border-cobalt bg-chalk-bright p-4 text-sm text-pine/80">
          <span className="font-display font-bold">Demo note.</span> No form key is set yet, so
          sending this will open your email app with the enquiry pre-filled instead of sending
          directly. Add a key from{' '}
          <a
            href="https://web3forms.com"
            className="text-cobalt underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            web3forms.com
          </a>{' '}
          to <code className="text-cobalt">booking.formAccessKey</code> in{' '}
          <code className="text-cobalt">content/site.ts</code> to send straight from the page.
        </p>
      )}

      {status === 'error' && (
        <p className="mb-8 border-l-4 border-red-700 bg-chalk-bright p-4 text-sm text-pine/80">
          <span className="font-display font-bold">Something went wrong.</span> The enquiry did
          not send — please try again, or call or email the studio directly.
        </p>
      )}

      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="font-display text-sm font-bold tracking-tight">
              Your name
            </label>
            <input id="name" name="name" type="text" required className={inputStyles} />
          </div>
          <div>
            <label htmlFor="email" className="font-display text-sm font-bold tracking-tight">
              Email
            </label>
            <input id="email" name="email" type="email" required className={inputStyles} />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="font-display text-sm font-bold tracking-tight">
              Phone <span className="font-normal text-pine/50">(optional)</span>
            </label>
            <input id="phone" name="phone" type="tel" className={inputStyles} />
          </div>
          <div>
            <label htmlFor="reason" className="font-display text-sm font-bold tracking-tight">
              What brings you in
            </label>
            <select id="reason" name="reason" className={inputStyles} defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              {enquiryReasons.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="interest" className="font-display text-sm font-bold tracking-tight">
            Class you are curious about{' '}
            <span className="font-normal text-pine/50">(optional)</span>
          </label>
          <select id="interest" name="interest" className={inputStyles} defaultValue="">
            <option value="">Not sure yet — recommend something</option>
            {classTypes.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="availability" className="font-display text-sm font-bold tracking-tight">
            When you could usually train
          </label>
          <input
            id="availability"
            name="availability"
            type="text"
            placeholder="Weekday mornings, or Tuesday and Thursday evenings"
            className={inputStyles}
          />
        </div>

        <div>
          <label htmlFor="message" className="font-display text-sm font-bold tracking-tight">
            Anything a coach should know
          </label>
          <p className="mt-1 text-sm text-pine/60">
            Injuries, surgeries, how long since you last trained, what you are hoping to get out
            of it. The more detail, the more useful the reply.
          </p>
          <textarea id="message" name="message" rows={5} className={inputStyles} />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="justify-self-start bg-cobalt px-8 py-4 font-display text-base font-bold tracking-tight text-chalk-bright hover:bg-cobalt-deep disabled:cursor-not-allowed disabled:bg-pine/30"
        >
          {status === 'submitting' ? 'Sending…' : 'Send an enquiry'}
        </button>

        <p className="text-sm text-pine/60">
          Your details go to the studio inbox and nowhere else. Nothing is charged on this
          website — all payments happen on {booking.platform.name} or in the studio.
        </p>
      </form>
    </>
  );
}
