CREATE TABLE resume_education (
                                  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

                                  profile_id UUID NOT NULL,
                                  institution TEXT NOT NULL,
                                  degree TEXT,
                                  field_of_study TEXT,

                                  start_date DATE,
                                  end_date DATE,

                                  description TEXT,

                                  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

                                  CONSTRAINT fk_resume_education_profile
                                      FOREIGN KEY (profile_id)
                                          REFERENCES resume_profile(id)
                                          ON DELETE CASCADE,

                                  CONSTRAINT chk_resume_education_dates
                                      CHECK (
                                          start_date IS NULL
                                              OR end_date IS NULL
                                              OR end_date >= start_date
                                          )
);