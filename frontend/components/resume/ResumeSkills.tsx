export default function ResumeSkills() {
    return (
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
    );
}
