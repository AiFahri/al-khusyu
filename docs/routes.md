# Route Catalogue

All routes are client-rendered and require a production SPA fallback to
`index.html`.

## Foundation Routes

| Pattern | Module | Responsibility |
| --- | --- | --- |
| `/` | Home | Foundation overview and primary discovery |
| `/tentang` | About | History and mission |
| `/kegiatan` | Activity | Activity collection |
| `/kegiatan/:slug` | ActivityDetail | Activity narrative |
| `/program` | Program | Program collection |
| `/program/:slug` | ProgramDetail | Program narrative |
| `/prestasi` | Achievement | Achievement collection |
| `/prestasi/:slug` | AchievementEntry | Achievement narrative |

## Education Routes

The `/pendidikan/:unit` family currently provides `madrasah`, `tk`, `smp`,
`smk`, `tahfidz`, `pesantren`, `diniyah`, `tpq`, `bq`, `sanggar`, and `lksa`.

## Route Contract

- Collection slugs should remain stable after publication.
- Each public route needs an intentional page title and description.
- Unknown routes must produce a clear recovery path rather than a blank screen.
- Every sitemap URL must resolve through a direct browser request after deploy.
