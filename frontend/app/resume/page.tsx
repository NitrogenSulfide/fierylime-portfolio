import PageLayout from "@/components/PageLayout";

export default function ResumePage() {
    return (
        <PageLayout>
            <main className="mx-auto max-w-5xl px-6 py-20">
                <h1 className="text-3xl font-semibold">Resume</h1>
                <p className="mt-4 text-neutral-400">
                    This section will contain my professional experience, skills, and education.
                </p>
            </main>
        </PageLayout>
    );
}