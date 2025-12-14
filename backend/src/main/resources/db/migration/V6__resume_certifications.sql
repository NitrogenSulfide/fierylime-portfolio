CREATE TABLE resume_certification (
                                      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

                                      profile_id UUID NOT NULL,
                                      name TEXT NOT NULL,
                                      issuer TEXT,
                                      issue_date DATE,
                                      expiration_date DATE,
                                      credential_url TEXT,

                                      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

                                      CONSTRAINT fk_resume_certification_profile
                                          FOREIGN KEY (profile_id)
                                              REFERENCES resume_profile(id)
                                              ON DELETE CASCADE,

                                      CONSTRAINT chk_resume_certification_dates
                                          CHECK (
                                              expiration_date IS NULL
                                                  OR issue_date IS NULL
                                                  OR expiration_date >= issue_date
                                              )
);
