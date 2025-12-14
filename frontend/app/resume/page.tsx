"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";


import PageLayout from "@/components/PageLayout";
import ResumeOverview from "@/components/resume/ResumeOverview";
import ResumeExperience from "@/components/resume/ResumeExperience";
import ResumeSkills from "@/components/resume/ResumeSkills";
import ResumeEducation from "@/components/resume/ResumeEducation";

const sections = ["overview", "experience", "skills", "education"] as const;
type Section = (typeof sections)[number];

export default function ResumePage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const sectionParam = searchParams.get("section") as Section | null;

    const [activeSection, setActiveSection] = useState<Section>(
        sections.includes(sectionParam as Section) ? sectionParam! : "overview"
    );

    useEffect(() => {
        if (sectionParam && sections.includes(sectionParam)) {
            setActiveSection(sectionParam);
        }
    }, [sectionParam]);

    return (
        <PageLayout>
            <h1 className="text-3xl font-semibold">Resume</h1>

            <nav className="mt-8 mb-12 flex gap-6 text-sm">
                {sections.map((id) => (
                    <button
                        key={id}
                        onClick={() => {
                            setActiveSection(id);
                            router.push(`?section=${id}`, { scroll: false });
                        }}
                        className={
                            activeSection === id
                                ? "text-white font-medium"
                                : "text-neutral-400 hover:text-white"
                        }
                    >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </button>
                ))}
            </nav>


            {activeSection === "overview" && <ResumeOverview />}
            {activeSection === "experience" && <ResumeExperience />}
            {activeSection === "skills" && <ResumeSkills />}
            {activeSection === "education" && <ResumeEducation />}
        </PageLayout>
    );
}
