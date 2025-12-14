package io.github.nitrogensulfide.portfolio.backend.resume.service;

import io.github.nitrogensulfide.portfolio.backend.resume.api.dto.*;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ResumeQueryService {

    private final JdbcTemplate jdbcTemplate;

    public ResumeQueryService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public ResumeResponse getDefaultResume() {
        return new ResumeResponse(
                "default",
                loadOverview(),
                loadExperience(),
                loadSkills(),
                loadEducation()
        );
    }

    private ResumeOverviewDto loadOverview() {
        String sql = """
        SELECT full_name, headline, summary, location, website, linkedin, github
        FROM portfolio.public.resume_profile
        ORDER BY updated_at DESC
        LIMIT 1
    """;

        return jdbcTemplate.query(sql, rs -> {
            if (!rs.next()) {
                return new ResumeOverviewDto(
                        "", "", "", "", "", "", ""
                );
            }

            return new ResumeOverviewDto(
                    rs.getString("full_name"),
                    rs.getString("headline"),
                    rs.getString("summary"),
                    rs.getString("location"),
                    rs.getString("website"),
                    rs.getString("linkedin"),
                    rs.getString("github")
            );
        });
    }



    private List<ResumeExperienceDto> loadExperience() {
        String sql = """
        SELECT id, company, role, start_date, end_date, description
        FROM portfolio.public.resume_experience
        ORDER BY start_date DESC
    """;

        return jdbcTemplate.query(
                sql,
                (rs, rowNum) -> {
                    String startDate = rs.getString("start_date");
                    String endDate = rs.getString("end_date");

                    return new ResumeExperienceDto(
                            UUID.fromString(rs.getString("id")),
                            rs.getString("company"),
                            rs.getString("role"),
                            formatDateRange(startDate, endDate),
                            splitBullets(rs.getString("description"))
                    );
                }
        );
    }


    private ResumeSkillsDto loadSkills() {
        String sql = """
        SELECT name, category
        FROM portfolio.public.resume_skill
        ORDER BY created_at
    """;

        List<String> languages = new ArrayList<>();
        List<String> tools = new ArrayList<>();

        jdbcTemplate.query(sql, rs -> {
            String name = rs.getString("name");
            String category = rs.getString("category");

            switch (category) {
                case "LANGUAGE" -> languages.add(name);
                case "TOOL" -> tools.add(name);
                default -> {
                    // ignore unknown categories for now
                }
            }
        });

        return new ResumeSkillsDto(languages, tools);
    }

    private ResumeEducationDto loadEducation() {
        String sql = """
        SELECT institution, degree, start_date, end_date
        FROM portfolio.public.resume_education
        ORDER BY end_date DESC NULLS LAST, start_date DESC
        LIMIT 1
    """;

        return jdbcTemplate.query(sql, rs -> {
            if (!rs.next()) {
                // No education yet — return empty DTO
                return new ResumeEducationDto("", "", "");
            }

            String endDate = rs.getString("end_date");
            String startDate = rs.getString("start_date");

            String year =
                    endDate != null && endDate.length() >= 4
                            ? endDate.substring(0, 4)
                            : (startDate != null && startDate.length() >= 4
                            ? startDate.substring(0, 4)
                            : "");

            return new ResumeEducationDto(
                    rs.getString("degree"),
                    rs.getString("institution"),
                    year
            );
        });
    }

    private List<String> splitBullets(String description) {
        if (description == null || description.isBlank()) {
            return List.of();
        }

        return Arrays.stream(description.split("\\r?\\n"))
                .map(String::trim)
                .filter(line -> !line.isEmpty())
                .toList();
    }

    private String formatDateRange(String startDate, String endDate) {
        String start = formatYearMonth(startDate);

        if (endDate == null) {
            return start + " – Present";
        }

        return start + " – " + formatYearMonth(endDate);
    }

    private String formatYearMonth(String isoDate) {
        if (isoDate == null || isoDate.length() < 7) {
            return "";
        }
        return isoDate.substring(0, 7); // yyyy-MM
    }


}

