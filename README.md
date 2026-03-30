# SCA Test Monorepo

Test repository for Fluid Attacks SCA auto-remediation agent.
Contains **47 known npm vulnerabilities** across 7 package.json files.

## Structure

```
/                          # Root: lodash, semver (direct), minimist (devDep)
packages/
  api/                     # Direct: express, axios, jsonwebtoken
  frontend/                # Direct: glob-parent, nth-check, postcss
  shared/                  # Direct: moment, underscore, node-forge
  legacy/                  # Transitive: mkdirp->minimist, request->tough-cookie+qs
                           # Multi-parent: mkdirp+optimist both pull minimist@0.0.8
  conflicts/               # Conflict: chokidar pulls glob-parent (also direct dep)
                           # Direct: yargs-parser, json5
services/
  auth/                    # Direct: passport, bcrypt, cookie-parser, helmet
  worker/                  # Deep transitives: webpack-dev-server->many vulns
                           # Direct: ini, ansi-regex
                           # Abandoned parent: node-notifier
```

## Vulnerability Categories

### Direct (simple patch/minor bump)
| Package | Version | Fix | Location |
|---------|---------|-----|----------|
| lodash | 4.17.20 | 4.17.21 | root |
| semver | 7.5.3 | 7.5.4 | root |
| ini | 1.3.5 | 1.3.6 | services/worker |
| ansi-regex | 4.1.0 | 4.1.1 | services/worker |
| json5 | 1.0.1 | 1.0.2 | packages/conflicts |
| moment | 2.29.1 | 2.29.4 | packages/shared |

### Direct (major upgrade, breaking changes possible)
| Package | Version | Fix | Location |
|---------|---------|-----|----------|
| minimist | 1.2.5 | 1.2.8+ | root |
| axios | 0.21.1 | 1.x | packages/api |
| jsonwebtoken | 8.5.1 | 9.x | packages/api |
| express | 4.17.1 | 4.21.x+ | packages/api |
| glob-parent | 5.1.1 | 5.1.2+ | packages/frontend |
| node-forge | 0.10.0 | 1.3.1+ | packages/shared |

### Transitive (single parent)
| Vuln Package | Via Parent | Location |
|-------------|-----------|----------|
| tough-cookie | request@2.88.2 | packages/legacy |
| qs | request@2.88.2 | packages/legacy |
| form-data | request@2.88.2 | packages/legacy |
| braces | micromatch (via chokidar) | packages/conflicts |
| ip | webpack-dev-server | services/worker |

### Transitive (multi-parent — hardest case)
| Vuln Package | Via Parents | Location |
|-------------|------------|----------|
| minimist@0.0.8 | mkdirp@0.5.1 + optimist@0.6.1 | packages/legacy |

### Abandoned parent (override needed)
| Vuln Package | Abandoned Parent | Reason |
|-------------|-----------------|--------|
| minimist@0.0.8 | optimist@0.6.1 | optimist is unmaintained, no version fixes minimist |
| (various) | request@2.88.2 | request is deprecated, no updates |

### Conflicts
| Issue | Details |
|-------|---------|
| glob-parent | Direct dep@5.1.1 AND transitive via chokidar@3.5.1 |
| minimist | Direct devDep@1.2.5 (root) AND transitive@0.0.8 (legacy) |
