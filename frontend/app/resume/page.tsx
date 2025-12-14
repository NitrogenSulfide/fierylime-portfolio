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

const versions = ["default", "backend", "frontend"] as const;
type ResumeVersion = (typeof versions)[number];


export default function ResumePage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const versionParam = searchParams.get("version") as ResumeVersion | null;
    const [activeVersion, setActiveVersion] = useState<ResumeVersion>(
        versions.includes(versionParam as ResumeVersion)
            ? versionParam!
            : "default"
    );

    const sectionParam = searchParams.get("section") as Section | null;

    const [activeSection, setActiveSection] = useState<Section>(
        sections.includes(sectionParam as Section) ? sectionParam! : "overview"
    );

    useEffect(() => {
        if (sectionParam && sections.includes(sectionParam)) {
            setActiveSection(sectionParam);
        }
    }, [sectionParam]);

    useEffect(() => {
        if (!sectionParam) {
            router.replace("?section=overview", { scroll: false });
        }
    }, [sectionParam, router]);

    useEffect(() => {
        if (versionParam && versions.includes(versionParam)) {
            setActiveVersion(versionParam);
        }
    }, [versionParam]);

    useEffect(() => {
        if (!versionParam) {
            router.replace(
                `?section=${activeSection}&version=${activeVersion}`,
                { scroll: false }
            );
        }
    }, [versionParam, activeSection, activeVersion, router]);

    return (
        <PageLayout>
            <h1 className="text-3xl font-semibold">Resume</h1>

            {/*Resume version selector*/}
            <div className="mt-8 mb-6 flex gap-2 text-sm">
                {versions.map((version) => (
                    <button
                        key={version}
                        onClick={() => {
                            setActiveVersion(version);
                            router.push(
                                `?section=${activeSection}&version=${version}`,
                                { scroll: false }
                            );
                        }}
                        className={
                            activeVersion === version
                                ? "rounded-md bg-neutral-800 px-3 py-1 text-white"
                                : "rounded-md px-3 py-1 text-neutral-400 hover:text-white"
                        }
                    >
                        {version.charAt(0).toUpperCase() + version.slice(1)}
                    </button>
                ))}
            </div>


            {/*Section Tabs*/}
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
