CREATE TABLE resume_profile (
                                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

                                full_name TEXT NOT NULL,
                                headline TEXT,
                                summary TEXT,

                                location TEXT,
                                email TEXT,
                                website TEXT,
                                linkedin TEXT,
                                github TEXT,

                                created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
                                updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);