// Snapshots metadata for your *private* GitHub repos into src/data/privateRepos.json
// so the portfolio can list them without ever shipping a token to the browser.
//
// Needs a token with read access to private repos, from either:
//   - the GITHUB_TOKEN env var, or
//   - a GITHUB_TOKEN=... line in .env.local (gitignored)
// Fine-grained token: "Metadata: read" on the repos you want listed.
// Classic token: the `repo` scope.
//
// With no token the existing JSON is kept as-is, so builds never fail on this.

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const OUT = fileURLToPath(new URL('../src/data/privateRepos.json', import.meta.url));

// Private repos that should never be listed publicly.
const EXCLUDED = new Set([]);

try {
  process.loadEnvFile(fileURLToPath(new URL('../.env.local', import.meta.url)));
} catch {
  /* no .env.local — fall back to the shell environment */
}

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.warn('[private-repos] GITHUB_TOKEN not set — keeping existing privateRepos.json');
  process.exit(0);
}

const res = await fetch(
  // affiliation=owner keeps org/collaborator repos (e.g. employer code) out.
  'https://api.github.com/user/repos?visibility=private&affiliation=owner&per_page=100&sort=pushed',
  {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
    },
  },
);
if (!res.ok) {
  console.error(`[private-repos] GitHub API returned ${res.status} — keeping existing privateRepos.json`);
  process.exit(0);
}

const data = await res.json();

// Only the fields the card renders — nothing else about the repo is published.
const repos = data
  .filter((r) => !r.fork && !EXCLUDED.has(r.name))
  .map((r) => ({
    id: r.id,
    name: r.name,
    description: r.description,
    language: r.language,
    topics: r.topics ?? [],
    pushed_at: r.pushed_at,
    private: true,
  }));

await writeFile(OUT, `${JSON.stringify(repos, null, 2)}\n`);
console.log(`[private-repos] wrote ${repos.length} private repo(s) to src/data/privateRepos.json`);
