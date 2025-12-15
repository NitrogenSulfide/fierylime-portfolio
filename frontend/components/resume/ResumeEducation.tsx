import { ResumeEducation } from "@/types/resume";

function formatYear(date: string | null) {
    return date ? date.slice(0, 4) : "Present";
}

export default function ResumeEducationSection({
                                                   education,
                                               }: {
    education: ResumeEducation[];
}) {
    if (education.length === 0) {
        return (
            <section className="text-neutral-400">
                No education information available.
            </section>
        );
    }

    return (
        <section id="education" className="space-y-4 mb-16 scroll-mt-24">
            <h2 className="text-3xl font-medium">Education</h2>
            {education.map((edu) => (
                <div key={edu.id} className="space-y-1">
                    <h3 className="text-lg font-medium">
                        {edu.degree}
                        {edu.fieldOfStudy ? ` — ${edu.fieldOfStudy}` : ""}
                    </h3>

                    <p className="text-neutral-400">{edu.institution}</p>

                    <p className="text-sm text-neutral-500">
                        {formatYear(edu.startDate)} – {formatYear(edu.endDate)}
                    </p>

                    {edu.description && (
                        <p className="pt-2 text-neutral-300 max-w-2xl">
                            {edu.description}
                        </p>
                    )}
                </div>
            ))}
        </section>
    );
}
