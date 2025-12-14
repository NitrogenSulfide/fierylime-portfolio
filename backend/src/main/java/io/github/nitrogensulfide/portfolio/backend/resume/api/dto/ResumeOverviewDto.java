package io.github.nitrogensulfide.portfolio.backend.resume.api.dto;

public record ResumeOverviewDto(
        String fullName,
        String headline,
        String summary,
        String location,
        String website,
        String linkedin,
        String github
) {}


