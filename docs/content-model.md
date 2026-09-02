# Content Model

## Editorial Collections

Typed modules under `src/data` define the shared editorial records:

| Collection | Required fields | Optional detail |
| --- | --- | --- |
| Activities | title, image, summary, date | content paragraphs |
| Programs | title, image, category | content paragraphs |
| Achievements | title, image, date, content | summary |

Collection titles are converted into URL slugs by the shared utility layer.
Changing a published title may therefore change its public URL.

## Education Content

Education routes live under `src/pages/Education`. Shared components cover
headlines, missions, organizations, facilities, activities, and achievements,
while each unit controls the sections relevant to its own story.

## Publication Rules

- Verify factual content with the responsible institution.
- Use ISO-friendly source dates even when the rendered copy is localized.
- Keep summaries concise enough for cards and provide full detail separately.
- Use public, licensed media with descriptive alternative text.
- Avoid publishing personal data unless approval and purpose are explicit.
