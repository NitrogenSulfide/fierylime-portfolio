package io.github.nitrogensulfide.portfolio.backend.resume.api.dto;

public record ResumeEducationDto(
        String degree,
        String institution,
        String year
) {}
