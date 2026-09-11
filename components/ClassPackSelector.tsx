'use client';

import { useState } from 'react';
import { classPricing } from '@/content/site';

export default function ClassPackSelector() {
  const [selected, setSelected] = useState(1); // default to the 5-class pack

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {classPricing.items.map((p, i) => {
        const isSelected = i === selected;
        return (
          <button
            key={p.name}
            type="button"
            onClick={() => setSelected(i)}
            aria-pressed={isSelected}
            className={`flex flex-col text-left transition-colors duration-150 ${
              isSelected
                ? 'bg-pine text-chalk'
                : 'border border-pine/20 bg-chalk-bright text-pine hover:border-cobalt/50'
            } p-6`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-base font-bold tracking-tight">{p.name}</h3>
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
            <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-cobalt">
              {p.price}
            </p>
            <p className={`mt-3 flex-1 text-sm ${isSelected ? 'text-sage' : 'text-pine/70'}`}>
              {p.detail}
            </p>
          </button>
        );
      })}
    </div>
  );
}
