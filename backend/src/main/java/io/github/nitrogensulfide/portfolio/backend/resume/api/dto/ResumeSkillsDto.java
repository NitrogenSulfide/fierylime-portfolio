package io.github.nitrogensulfide.portfolio.backend.resume.api.dto;

import java.util.List;

public record ResumeSkillsDto(
        List<String> languages,
        List<String> tools
) {}
