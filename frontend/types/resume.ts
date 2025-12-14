export interface ResumeResponse {
    version: string;
    overview: {
        summary: string;
    };
    experience: {
        id: string;
        company: string;
        role: string;
        startDate: string;
        endDate: string;
        bullets: string[];
    }[];
    skills: {
        languages: string[];
        tools: string[];
    };
    education: {
        degree: string;
        institution: string;
        year: string;
    };
}