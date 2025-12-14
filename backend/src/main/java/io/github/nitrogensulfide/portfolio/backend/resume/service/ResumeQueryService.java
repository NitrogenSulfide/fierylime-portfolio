package io.github.nitrogensulfide.portfolio.backend.resume.service;

import io.github.nitrogensulfide.portfolio.backend.resume.api.dto.*;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ResumeQueryService {

    public ResumeResponse getDefaultResume() {

        ResumeOverviewDto overview = new ResumeOverviewDto(
                "\uD83D\uDEA8 BACKEND HARDCODED STRING \uD83D\uDEA8"
        );

        ResumeExperienceDto experience = new ResumeExperienceDto(
                UUID.randomUUID(),
                "Company Name",
                "Role",
                "2022-01",
                "2024-01",
                List.of(
                        "Brief achievement or responsibility",
                        "Another measurable impact"
                )
        );

        ResumeSkillsDto skills = new ResumeSkillsDto(
                List.of("Java", "Kotlin", "TypeScript", "SQL"),
                List.of("Spring Boot", "PostgreSQL", "Docker", "Next.js")
        );

        ResumeEducationDto education = new ResumeEducationDto(
                "Degree",
                "Institution",
                "2021"
        );

        return new ResumeResponse(
                "default",
                overview,
                List.of(experience),
                skills,
                education
        );
    }
}
