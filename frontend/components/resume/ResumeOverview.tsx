export default function ResumeOverview({
                                           summary,
                                       }: {
    summary: string;
}) {
    return (
        <section>
            <h2 className="text-xl font-medium">Overview</h2>
            <p className="mt-4 max-w-2xl text-neutral-400">
                {summary}
            </p>
        </section>
    );
}
