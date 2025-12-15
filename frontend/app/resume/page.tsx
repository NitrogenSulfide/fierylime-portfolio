"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";


import PageLayout from "@/components/PageLayout";
import ResumeOverview from "@/components/resume/ResumeOverview";
import ResumeExperience from "@/components/resume/ResumeExperience";
import ResumeSkills from "@/components/resume/ResumeSkills";
import ResumeEducation from "@/components/resume/ResumeEducation";

import { ResumeResponse } from "@/types/resume";

const sections = ["overview", "experience", "skills", "education"] as const;
type Section = (typeof sections)[number];


export default function ResumePage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const sectionParam = searchParams.get("section") as Section | null;

    const [activeSection, setActiveSection] = useState<Section>(
        sections.includes(sectionParam as Section) ? sectionParam! : "overview"
    );

    const [resume, setResume] = useState<ResumeResponse | null>(null);
    const [loading, setLoading] = useState(true);

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
        async function loadResume() {
            try {
                const res = await fetch("/api/resume");

                if (!res.ok) {
                    const text = await res.text();
                    console.error("Resume API error:", res.status, text);
                    setResume(null);
                    setLoading(false);
                    return;
                }

                const data: ResumeResponse = await res.json();
                setResume(data);
            } catch (err) {
                console.error("Failed to load resume:", err);
                setResume(null);
            } finally {
                setLoading(false);
            }
        }

        loadResume();
    }, []);

    if (loading) {
        return (
            <PageLayout>
                <p className="text-neutral-400">Loading resume…</p>
            </PageLayout>
        );
    }

    if (!resume) {
        return (
            <PageLayout>
                <p className="text-red-400">Failed to load resume.</p>
            </PageLayout>
        );
    }


    return (
        <PageLayout>
            <h1 className="text-3xl font-semibold">Resume</h1>

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


            {/*<ResumeOverview overview={resume.overview} />*/}
            {activeSection === "overview" && (
                <ResumeOverview overview={resume.overview} />
            )}

            {activeSection === "experience" && (
                <ResumeExperience experience={resume.experience} />
            )}

            {activeSection === "skills" && (
                <ResumeSkills skills={resume.skills} />
            )}

            {activeSection === "education" && (
                <ResumeEducation education={resume.education} />
            )}

        </PageLayout>
    );
}
