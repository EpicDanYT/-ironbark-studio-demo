import { imageSlots } from '@/content/site';

type Props = {
  slot: keyof typeof imageSlots;
  className?: string;
  /** Override the ratio defined in site.ts for a particular layout. */
  ratio?: string;
};

/**
 * Renders the real photograph once `src` is set on the slot in content/site.ts.
 * Until then it renders a labelled placeholder that names the shot, the search
 * term, and the aspect ratio — so the photo can be sourced without guessing.
 */
export default function ImageSlot({ slot, className = '', ratio }: Props) {
  const def = imageSlots[slot];
  const aspect = ratio ?? def.ratio;

  if (def.src) {
    return (
      <div className={`overflow-hidden bg-stone ${className}`} style={{ aspectRatio: aspect }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={def.src} alt={def.alt} className="h-full w-full object-cover" loading="lazy" />
      </div>
    );
  }

  return (
    <div
      className={`slot-hatch relative flex flex-col justify-between overflow-hidden border border-cobalt/35 bg-pine p-4 sm:p-5 ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={`Image placeholder: ${def.label}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="bg-cobalt px-2 py-1 font-display text-xs font-extrabold tracking-tight text-chalk-bright">
          {def.id}
        </span>
        <span className="font-display text-[0.7rem] font-semibold tracking-tight text-sage">
          {aspect.replace(/\s/g, '')}
        </span>
      </div>

      <div className="max-w-[46ch]">
        <p className="font-display text-sm leading-snug font-bold text-chalk sm:text-base">{def.label}</p>
        <p className="mt-2 text-[0.8rem] leading-snug text-sage">
          Unsplash search: <span className="text-chalk">{def.search}</span>
        </p>
        <p className="mt-1 text-[0.7rem] text-sage/70">{def.page}</p>
      </div>
    </div>
  );
}
