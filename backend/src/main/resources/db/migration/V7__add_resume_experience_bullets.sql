CREATE TABLE portfolio.public.resume_experience_bullet (
                                                           id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                                                           experience_id UUID NOT NULL
                                                               REFERENCES portfolio.public.resume_experience(id)
                                                                   ON DELETE CASCADE,
                                                           content TEXT NOT NULL,
                                                           sort_order INT NOT NULL,
                                                           created_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE INDEX idx_resume_experience_bullet_experience
    ON portfolio.public.resume_experience_bullet (experience_id, sort_order);