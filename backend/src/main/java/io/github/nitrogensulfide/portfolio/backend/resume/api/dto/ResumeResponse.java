package io.github.nitrogensulfide.portfolio.backend.resume.api.dto;

import java.util.List;

public record ResumeResponse(
        ResumeOverviewDto overview,
        List<ResumeExperienceDto> experience,
        ResumeSkillsDto skills,
        List<ResumeEducationDto> education
) {}


