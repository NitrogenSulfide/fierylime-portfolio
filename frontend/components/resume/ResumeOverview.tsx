import { ResumeOverview as ResumeOverviewType } from "@/types/resume";

export default function ResumeOverview({
                                           overview,
                                       }: {
    overview: ResumeOverviewType;
}) {
    return (
        <section id="overview" className="space-y-4 mb-16 scroll-mt-24">
            <h1 className="text-3xl font-semibold">
                {overview.fullName}
            </h1>

            <p className="text-neutral-400">
                {overview.headline}
            </p>

            <p className="max-w-2xl text-neutral-300">
                {overview.summary}
            </p>
        </section>
    );
}
