package io.github.nitrogensulfide.portfolio.backend.resume.api.dto;

import java.util.List;
import java.util.UUID;

public record ResumeExperienceDto(
        UUID id,
        String company,
        String role,
        String dateRange,
        List<String> bullets
) {}

