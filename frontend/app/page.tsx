import { siteConfig } from '@/data/site';

export default function HomePage() {
  return (
      <main className="mx-auto max-w-5xl px-6 py-20">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-4xl font-semibold tracking-tight">
              {siteConfig.ownerName}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            Full-stack engineer focused on data-driven systems, infrastructure,
            and creative tooling.
          </p>

          <div className="mt-8 flex gap-4">
            <a
                href="/resume"
                className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-neutral-200"
            >
              View Resume
            </a>

            <a
                href="/projects"
                className="rounded-md border border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-200 hover:bg-neutral-900"
            >
              Projects
            </a>
          </div>
        </section>

        {/* Navigation Grid */}
        <section className="grid gap-6 sm:grid-cols-2">
          <NavCard
              title="Resume"
              description="Professional experience and skills"
              href="/resume"
          />
          <NavCard
              title="Photography"
              description="Selected visual work"
              href="/photography"
          />
          <NavCard
              title="Piano / Music"
              description="Musical projects and recordings"
              href="/piano"
          />
          <NavCard
              title="Technical Projects"
              description="Engineering work and experiments"
              href="/projects"
          />
        </section>
      </main>
  );
}

function NavCard({
                   title,
                   description,
                   href,
                 }: {
  title: string;
  description: string;
  href: string;
}) {
  return (
      <a
          href={href}
          className="rounded-lg border border-neutral-800 p-6 transition hover:border-neutral-600 hover:bg-neutral-900"
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 text-sm text-neutral-400">{description}</p>
      </a>
  );
}