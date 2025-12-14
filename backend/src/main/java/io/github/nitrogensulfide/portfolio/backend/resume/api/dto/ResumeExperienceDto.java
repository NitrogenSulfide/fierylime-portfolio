package io.github.nitrogensulfide.portfolio.backend.resume.api.dto;

import java.util.List;
import java.util.UUID;

public record ResumeExperienceDto(
        UUID id,
        String company,
        String role,
        String startDate,
        String endDate,
        List<String> bullets
) {}
