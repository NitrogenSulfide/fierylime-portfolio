import PageLayout from "@/components/PageLayout";

export default function ResumePage() {
    return (
        <PageLayout>
            <section className="mb-16">
                <h1 className="text-3xl font-semibold">Resume</h1>
                <p className="mt-4 max-w-2xl text-neutral-400">
                    Full-stack engineer with experience in data platforms,
                    backend systems, and modern frontend frameworks.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-xl font-medium">Experience</h2>

                <div className="mt-6 space-y-8">
                    <div>
                        <h3 className="font-medium">Company Name</h3>
                        <p className="text-sm text-neutral-400">
                            Role · Start Date – End Date
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-300">
                            <li>Brief achievement or responsibility</li>
                            <li>Another measurable impact</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-xl font-medium">Skills</h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                        <h3 className="font-medium">Languages</h3>
                        <p className="text-sm text-neutral-400">
                            Java, Kotlin, TypeScript, SQL
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium">Frameworks & Tools</h3>
                        <p className="text-sm text-neutral-400">
                            Spring Boot, Next.js, PostgreSQL, Docker
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-medium">Education</h2>
                <p className="mt-2 text-neutral-400">
                    Degree · Institution · Year
                </p>
            </section>
        </PageLayout>
    );
}