package io.github.nitrogensulfide.portfolio.backend.resume.api;

import io.github.nitrogensulfide.portfolio.backend.resume.api.dto.ResumeResponse;
import io.github.nitrogensulfide.portfolio.backend.resume.service.ResumeQueryService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public/resume")
public class ResumePublicController {

    private final ResumeQueryService resumeQueryService;

    public ResumePublicController(ResumeQueryService resumeQueryService) {
        this.resumeQueryService = resumeQueryService;
    }

    @GetMapping
    public ResumeResponse getResume() {
        return resumeQueryService.getDefaultResume();
    }
}
