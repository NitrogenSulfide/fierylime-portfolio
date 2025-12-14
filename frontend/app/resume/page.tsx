import PageLayout from "@/components/PageLayout";
import ResumeOverview from "@/components/resume/ResumeOverview";
import ResumeExperience from "@/components/resume/ResumeExperience";
import ResumeSkills from "@/components/resume/ResumeSkills";
import ResumeEducation from "@/components/resume/ResumeEducation";

export default function ResumePage() {
    return (
        <PageLayout>
            {/* Resume title + summary */}
            <ResumeOverview />

            {/* Resume sub-navigation */}
            <nav className="mb-12 flex gap-6 text-sm text-neutral-400">
                <a href="#overview" className="hover:text-white">Overview</a>
                <a href="#experience" className="hover:text-white">Experience</a>
                <a href="#skills" className="hover:text-white">Skills</a>
                <a href="#education" className="hover:text-white">Education</a>
            </nav>

            {/* Resume sections */}
            <ResumeExperience />
            <ResumeSkills />
            <ResumeEducation />
        </PageLayout>
    );
}