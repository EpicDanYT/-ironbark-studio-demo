'use client';

import { useState } from 'react';
import { ptPricing } from '@/content/site';

export default function PersonalTrainingSelector() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {ptPricing.items.map((p, i) => {
        const isSelected = i === selected;
        return (
          <button
            key={p.name}
            type="button"
            onClick={() => setSelected(i)}
            aria-pressed={isSelected}
            className={`flex items-start justify-between gap-6 p-6 text-left transition-colors duration-150 ${
              isSelected
                ? 'bg-pine text-chalk'
                : 'border border-pine/20 bg-chalk-bright text-pine hover:border-cobalt/50'
            }`}
          >
            <div>
              <div className="flex items-center gap-3">
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
                <h3 className="font-display text-lg font-bold tracking-tight">{p.name}</h3>
              </div>
              <p className={`mt-2 text-base ${isSelected ? 'text-sage' : 'text-pine/70'}`}>
                {p.detail}
              </p>
            </div>
            <p
              className={`shrink-0 font-display text-3xl font-extrabold tracking-tight ${
                isSelected ? 'text-cobalt' : 'text-pine'
              }`}
            >
              {p.price}
            </p>
          </button>
        );
      })}
    </div>
  );
}
