package io.github.nitrogensulfide.portfolio.backend.resume.api.dto;

import java.time.LocalDate;
import java.util.UUID;

public record ResumeEducationDto(
        UUID id,
        String institution,
        String degree,
        String fieldOfStudy,
        LocalDate startDate,
        LocalDate endDate,
        String description
) {}
