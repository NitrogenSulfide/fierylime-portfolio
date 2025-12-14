export interface ResumeResponse {
    version: string;
    overview: ResumeOverview
    experience: ResumeExperience[]
    skills: ResumeSkills;
    education: ResumeEducation;
}

export interface ResumeOverview {
    fullName: string;
    headline: string;
    summary: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
}

export interface ResumeExperience {
    company: string;
    role: string;
    dateRange: string;
    bullets: string[];
}

export interface ResumeSkills {
    languages: string[];
    tools: string[];
}

export interface ResumeEducation {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    description: string;
}