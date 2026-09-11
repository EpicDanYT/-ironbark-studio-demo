'use client';

import { useState } from 'react';
import { membershipPricing } from '@/content/site';

export default function MembershipSelector() {
  const defaultIndex = Math.max(
    membershipPricing.items.findIndex((m) => 'featured' in m && m.featured),
    0
  );
  const [selected, setSelected] = useState(defaultIndex);

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {membershipPricing.items.map((m, i) => {
        const isSelected = i === selected;
        return (
          <button
            key={m.name}
            type="button"
            onClick={() => setSelected(i)}
            aria-pressed={isSelected}
            className={`group text-left transition-colors duration-150 ${
              isSelected
                ? 'bg-pine text-chalk'
                : 'border border-pine/20 bg-chalk-bright text-pine hover:border-cobalt/50'
            } p-7`}
          >
            <div className="flex items-center justify-between gap-3">
              <h4 className="font-display text-lg font-bold tracking-tight">{m.name}</h4>
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                  isSelected ? 'border-cobalt bg-cobalt' : 'border-pine/30'
                }`}
                aria-hidden="true"
              >
                {isSelected && (
                  <svg viewBox="0 0 12 12" className="h-3 w-3 fill-none stroke-chalk-bright" strokeWidth={2}>
                    <path d="M2.5 6.5l2.5 2.5 4.5-5.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
            </div>

            <p className="mt-4 flex items-baseline gap-2">
              <span
                className={`font-display text-4xl font-extrabold tracking-tight ${
                  isSelected ? 'text-cobalt' : 'text-pine'
                }`}
              >
                {m.price}
              </span>
              <span className={`text-sm ${isSelected ? 'text-sage' : 'text-pine/55'}`}>
                {m.period}
              </span>
            </p>

            <p className={`mt-4 text-sm leading-relaxed ${isSelected ? 'text-sage' : 'text-pine/70'}`}>
              {m.detail}
            </p>
          </button>
        );
      })}
    </div>
  );
}
