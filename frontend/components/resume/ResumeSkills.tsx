import {resumeSkills} from "@/data/resume.data";

export default function ResumeSkills() {
    return (
        <section id="skills" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-medium">Skills</h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                    <h3 className="font-medium">Languages</h3>
                    <p className="text-sm text-neutral-400">
                        {resumeSkills.languages.join(" • ")}
                    </p>
                </div>

                <div>
                    <h3 className="font-medium">Frameworks & Tools</h3>
                    <p className="text-sm text-neutral-400">
                        {resumeSkills.tools.join(" • ")}
                    </p>
                </div>
            </div>
        </section>
    );
}
