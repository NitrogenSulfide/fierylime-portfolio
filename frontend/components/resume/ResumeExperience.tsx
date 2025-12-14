import { ResumeExperience as ResumeExperienceType } from "@/types/resume";

interface ResumeExperienceProps {
    experience: ResumeExperienceType[];
}

export default function ResumeExperience({ experience }: ResumeExperienceProps) {
    return (
        <section id="experience" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-medium">Experience</h2>

            <div className="mt-6 space-y-8">
                {experience.map((exp) => (
                    <div key={`${exp.company}-${exp.role}`}>
                        <h3 className="font-medium">{exp.company}</h3>
                        <p className="text-sm text-neutral-400">
                            {exp.role} · {exp.dateRange}
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-300">
                            {exp.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}