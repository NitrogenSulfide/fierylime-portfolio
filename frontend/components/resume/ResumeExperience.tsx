export default function ResumeExperience() {
    return (
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
    );
}
