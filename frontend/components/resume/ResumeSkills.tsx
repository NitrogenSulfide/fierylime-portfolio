import { ResumeSkills as ResumeSkillsType } from "@/types/resume";

interface ResumeSkillsProps {
    skills: ResumeSkillsType;
}

export default function ResumeSkills({ skills }: ResumeSkillsProps) {
    return (
        <section id="skills" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-medium">Skills</h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                    <h3 className="font-medium">Languages</h3>
                    <p className="text-sm text-neutral-400">
                        {skills.languages.join(" • ")}
                    </p>
                </div>

                <div>
                    <h3 className="font-medium">Frameworks & Tools</h3>
                    <p className="text-sm text-neutral-400">
                        {skills.tools.join(" • ")}
                    </p>
                </div>
            </div>
        </section>
    );
}
