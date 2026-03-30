# SCA Test Monorepo

Test repository for Fluid Attacks SCA auto-remediation agent.

## Structure

```
/                          # Root workspace with lodash, semver, minimist
packages/
  api/                     # Express + axios + jsonwebtoken
  frontend/                # glob-parent + nth-check + postcss
  shared/                  # moment + underscore + node-forge
services/
  auth/                    # passport + bcrypt + cookie-parser + helmet
```

## Known Vulnerabilities

This repo intentionally uses vulnerable dependency versions for testing:

| Package | Version | CVE | Severity | Type |
|---------|---------|-----|----------|------|
| lodash | 4.17.20 | CVE-2021-23337 | High | Direct (root) |
| semver | 7.5.3 | CVE-2022-25883 | Medium | Direct (root) |
| minimist | 1.2.5 | CVE-2021-44906 | Critical | DevDep (root) |
| express | 4.17.1 | CVE-2024-29041 | Medium | Direct (api) |
| axios | 0.21.1 | CVE-2021-3749 | High | Direct (api) |
| jsonwebtoken | 8.5.1 | CVE-2022-23529 | High | Direct (api) |
| glob-parent | 5.1.1 | CVE-2021-35065 | High | Direct (frontend) |
| nth-check | 1.0.2 | CVE-2021-3803 | High | Direct (frontend) |
| postcss | 7.0.35 | CVE-2021-23382 | Medium | Direct (frontend) |
| node-forge | 0.10.0 | CVE-2022-24771 | High | Direct (shared) |
| moment | 2.29.1 | CVE-2022-31129 | High | Direct (shared) |
| passport | 0.4.1 | CVE-2022-25896 | Medium | Direct (auth) |
