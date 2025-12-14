package io.github.nitrogensulfide.portfolio.backend.resume.api.dto;

import java.util.List;

public record ResumeResponse(
        String version,
        ResumeOverviewDto overview,
        List<ResumeExperienceDto> experience,
        ResumeSkillsDto skills,
        ResumeEducationDto education
) {}

