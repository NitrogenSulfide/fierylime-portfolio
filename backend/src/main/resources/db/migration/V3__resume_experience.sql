CREATE TABLE resume_experience (
                                   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

                                   profile_id UUID NOT NULL,
                                   company TEXT NOT NULL,
                                   role TEXT NOT NULL,

                                   start_date DATE NOT NULL,
                                   end_date DATE,

                                   description TEXT,

                                   created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

                                   CONSTRAINT fk_resume_experience_profile
                                       FOREIGN KEY (profile_id)
                                           REFERENCES resume_profile(id)
                                           ON DELETE CASCADE,

                                   CONSTRAINT chk_resume_experience_dates
                                       CHECK (end_date IS NULL OR end_date >= start_date)
);