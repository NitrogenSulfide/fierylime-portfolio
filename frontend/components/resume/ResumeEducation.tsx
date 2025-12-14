import {resumeEducation} from "@/data/resume.data";

export default function ResumeEducation() {
    return (
        <section id="education" className="mb-16 scroll-mt-24">
            <h2 className="text-xl font-medium">Education</h2>
            <div className="mt-4">
                <p className="mt-2">
                    <span className="font-medium">{resumeEducation.degree}</span>
                    <span className="text-neutral-400"> • {resumeEducation.institution} • {resumeEducation.year}</span>
                </p>
            </div>
        </section>
    );
}
