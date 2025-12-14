import { ResumeEducation as ResumeEducationType } from "@/types/resume";

interface ResumeEducationProps {
    education: ResumeEducationType;
}

export default function ResumeEducation({ education }: ResumeEducationProps) {
    return (
        <section id="education" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-medium">Education</h2>
            <div className="mt-4">
                <p className="mt-2">
                    <span className="font-medium">{education.degree}</span>
                    <span className="text-neutral-400"> • {education.institution} • {education.startDate} • {education.endDate}</span>
                </p>
            </div>
        </section>
    );
}
