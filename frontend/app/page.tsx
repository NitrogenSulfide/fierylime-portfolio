import { siteConfig } from '@/data/site';

export default function HomePage() {
  return (
      <main className="relative mx-auto max-w-5xl px-6 py-20">
        {/* Subtle background gradient - extended beyond container */}
        <div className="pointer-events-none absolute -left-1/2 -right-1/2 top-0 bottom-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5 blur-3xl" />

        {/* Hero */}
        <section className="relative mb-20 animate-fade-in">
          <h1 className="gradient-text text-5xl font-bold tracking-tight sm:text-6xl">
              {siteConfig.ownerName}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
            Full-stack engineer focused on data-driven systems, infrastructure,
            and creative tooling.
          </p>

          <div className="mt-8 flex gap-4">
            <a
                href="/resume"
                className="group relative overflow-hidden rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              <span className="relative z-10">View Resume</span>
            </a>

            <a
                href="/projects"
                className="group rounded-lg border border-neutral-700 bg-neutral-900/50 px-6 py-3 text-sm font-medium text-neutral-200 backdrop-blur-sm transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-800/50"
            >
              Projects
            </a>
          </div>
        </section>

        {/* Navigation Grid */}
        <section className="relative grid gap-6 sm:grid-cols-2">
          <NavCard
              title="Resume"
              description="Professional experience and skills"
              href="/resume"
              delay={1}
          />
          <NavCard
              title="Photography"
              description="Selected visual work"
              href="/photography"
              delay={2}
          />
          <NavCard
              title="Piano / Music"
              description="Musical projects and recordings"
              href="/piano"
              delay={3}
          />
          <NavCard
              title="Technical Projects"
              description="Engineering work and experiments"
              href="/projects"
              delay={4}
          />
        </section>
      </main>
  );
}

function NavCard({
                   title,
                   description,
                   href,
                   delay,
                 }: {
  title: string;
  description: string;
  href: string;
  delay: number;
}) {
  const delayClass = `animate-fade-in-delay-${delay}`;

  return (
      <a
          href={href}
          className={`group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-900/70 hover:shadow-xl hover:shadow-neutral-900/50 ${delayClass}`}
      >
        <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <h3 className="relative text-lg font-semibold text-white">{title}</h3>
        <p className="relative mt-2 text-sm text-neutral-400 transition-colors group-hover:text-neutral-300">{description}</p>
      </a>
  );
}