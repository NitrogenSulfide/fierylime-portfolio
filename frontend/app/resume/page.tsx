import PageLayout from "@/components/PageLayout";
import ResumeOverview from "@/components/resume/ResumeOverview";
import ResumeExperience from "@/components/resume/ResumeExperience";
import ResumeSkills from "@/components/resume/ResumeSkills";
import ResumeEducation from "@/components/resume/ResumeEducation";

export default function ResumePage() {
    return (
        <PageLayout>
            <ResumeOverview />
            <ResumeExperience />
            <ResumeSkills />
            <ResumeEducation />
        </PageLayout>
    );
}