CREATE TABLE resume_section (
                                id          UUID PRIMARY KEY,
                                section_key TEXT NOT NULL UNIQUE,
                                title       TEXT NOT NULL,
                                content     TEXT NOT NULL,
                                created_at  TIMESTAMP NOT NULL DEFAULT now()
);