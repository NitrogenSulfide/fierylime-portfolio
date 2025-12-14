CREATE TABLE resume_skill (
                              id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

                              profile_id UUID NOT NULL,
                              name TEXT NOT NULL,
                              category TEXT,

                              proficiency_level INT CHECK (proficiency_level BETWEEN 1 AND 5),

                              created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

                              CONSTRAINT fk_resume_skill_profile
                                  FOREIGN KEY (profile_id)
                                      REFERENCES resume_profile(id)
                                      ON DELETE CASCADE,

                              CONSTRAINT uq_resume_skill_unique
                                  UNIQUE (profile_id, name)
);