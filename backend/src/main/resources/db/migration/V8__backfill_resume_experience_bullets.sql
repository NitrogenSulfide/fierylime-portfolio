INSERT INTO portfolio.public.resume_experience_bullet (
    experience_id,
    content,
    sort_order
)
SELECT
    re.id,
    trim(bullet),
    row_number() OVER (PARTITION BY re.id ORDER BY ord)
FROM portfolio.public.resume_experience re
         CROSS JOIN LATERAL
    unnest(string_to_array(re.description, E'\n')) WITH ORDINALITY AS t(bullet, ord)
WHERE re.description IS NOT NULL
  AND trim(bullet) <> '';
