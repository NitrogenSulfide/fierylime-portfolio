import { resumeOverview } from "@/data/resume.data";

export default function ResumeOverview() {
    return (
        <section id="overview" className="mb-16 scroll-mt-24">
            <h1 className="text-3xl font-semibold">Resume</h1>
            <p className="mt-4 max-w-2xl text-neutral-400">
                {resumeOverview.summary}
            </p>
        </section>
    );
}