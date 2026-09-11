import { schedule, classTypes } from '@/content/site';

const byId = Object.fromEntries(classTypes.map((c) => [c.id, c]));

/**
 * A real timetable, not a set of cards: the day is the structural unit and
 * every row carries time, class, duration, cap and coach. Reads as a list on
 * mobile and as an aligned grid from `sm` up.
 */
export default function Timetable() {
  return (
    <div className="divide-y divide-pine/12 border-y border-pine/20">
      {schedule.map((day) => (
        <div key={day.day} className="grid gap-2 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8">
          <h3 className="font-display text-heading whitespace-nowrap text-pine sm:pt-1">
            {day.day}
          </h3>

          <ul className="divide-y divide-pine/10">
            {day.sessions.map((s) => {
              const c = byId[s.type];
              return (
                <li
                  key={`${day.day}-${s.time}-${s.type}`}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-2.5"
                >
                  <span className="w-20 shrink-0 font-display text-sm font-bold tracking-tight tabular-nums">
                    {s.time}
                  </span>
                  <span className="min-w-0 flex-1 font-display text-base font-semibold tracking-tight">
                    {c.name}
                  </span>
                  <span className="text-sm text-pine/60">{c.length}</span>
                  <span className="w-24 text-sm text-pine/60">{c.cap}</span>
                  <span className="w-16 text-sm text-pine/60">{s.coach}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
