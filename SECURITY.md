# Security Policy

## Reporting A Vulnerability

Do not publish security findings in a public issue. Contact the repository
owner through GitHub and provide the affected route or component, reproduction
steps, observed impact, and any suggested mitigation.

Please avoid including student information, credentials, private documents, or
other sensitive foundation data in the report. Maintainers should acknowledge a
complete report before discussing a public disclosure timeline.

## Public Repository Boundary

This repository is a static institutional frontend. It must not contain:

- Environment files, access tokens, API keys, or private deployment settings.
- Student, parent, employee, donor, or applicant records.
- Passwords, session data, database exports, or server logs.
- Internal documents that have not been approved for publication.

Rotate any exposed secret at its provider before removing it from Git history.
Deleting a secret from the latest commit does not invalidate the credential or
remove it from earlier commits.

## Copyright

Copyright (c) 2026 [AiFahri](https://github.com/AiFahri) and
[ibamzjr](https://github.com/ibamzjr). All rights reserved.

Security reports, private correspondence, and remediation details do not grant
permission to redistribute the project's protected materials.
