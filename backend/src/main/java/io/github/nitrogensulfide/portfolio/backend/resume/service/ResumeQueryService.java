package io.github.nitrogensulfide.portfolio.backend.resume.service;

import io.github.nitrogensulfide.portfolio.backend.resume.api.dto.*;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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

    private Map<UUID, List<String>> loadExperienceBullets() {
        String sql = """
        SELECT experience_id, content
        FROM portfolio.public.resume_experience_bullet
        ORDER BY experience_id, sort_order
    """;

        return jdbcTemplate.query(sql, rs -> {
            Map<UUID, List<String>> map = new HashMap<>();

            while (rs.next()) {
                UUID experienceId = UUID.fromString(rs.getString("experience_id"));
                String content = rs.getString("content");

                map.computeIfAbsent(experienceId, k -> new ArrayList<>())
                        .add(content);
            }

            return map;
        });
    }

    private List<ResumeExperienceDto> loadExperience() {
        Map<UUID, List<String>> bulletsByExperience = loadExperienceBullets();

        String sql = """
        SELECT id, company, role, start_date, end_date
        FROM portfolio.public.resume_experience
        ORDER BY start_date DESC
    """;

        return jdbcTemplate.query(
                sql,
                (rs, rowNum) -> {
                    UUID id = UUID.fromString(rs.getString("id"));

                    return new ResumeExperienceDto(
                            id,
                            rs.getString("company"),
                            rs.getString("role"),
                            formatDateRange(
                                    rs.getString("start_date"),
                                    rs.getString("end_date")
                            ),
                            bulletsByExperience.getOrDefault(id, List.of())
                    );
                }
        );
    }



    private ResumeSkillsDto loadSkills() {
        String sql = """
        SELECT name, category
        FROM portfolio.public.resume_skill
        ORDER BY category, proficiency_level DESC, name
    """;

        List<String> languages = new ArrayList<>();
        List<String> tools = new ArrayList<>();

        jdbcTemplate.query(sql, rs -> {
            String name = rs.getString("name");
            String category = rs.getString("category");

            switch (category) {
                case "LANGUAGE" -> languages.add(name);
                case "TOOL" -> tools.add(name);
            }
        });

        return new ResumeSkillsDto(languages, tools);
    }


    private List<ResumeEducationDto> loadEducation() {
        String sql = """
        SELECT
            id,
            institution,
            degree,
            field_of_study,
            start_date,
            end_date,
            description
        FROM portfolio.public.resume_education
        ORDER BY start_date DESC
    """;

        return jdbcTemplate.query(
                sql,
                (rs, rowNum) -> new ResumeEducationDto(
                        UUID.fromString(rs.getString("id")),
                        rs.getString("institution"),
                        rs.getString("degree"),
                        rs.getString("field_of_study"),
                        rs.getObject("start_date", LocalDate.class),
                        rs.getObject("end_date", LocalDate.class),
                        rs.getString("description")
                )
        );
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

