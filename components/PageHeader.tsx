export default function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-pine text-chalk">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-display text-sm font-semibold tracking-tight text-cobalt">{kicker}</p>
        <h1 className="mt-4 max-w-4xl text-title text-chalk-bright">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-sage">{intro}</p>}
      </div>
    </section>
  );
}
