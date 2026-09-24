import { useCallback, useEffect, useMemo, useState } from 'react';
import { personal } from '../data/personal.js';
// Build-time snapshot of private repos (see scripts/fetch-private-repos.mjs).
import privateRepos from '../data/privateRepos.json';

const CACHE_KEY = `gh_repos_${personal.githubUser}`;
const CACHE_TTL_MS = 1000 * 60 * 30; // 30 min

// Repositories that should never appear in the carousel.
const EXCLUDED = new Set(['mjashohan.github.io']);

/**
 * Fetches public repos for the configured GitHub user, sorted by most-recently
 * pushed (so newly-updated repos float to the front), and exposes a sync()
 * function that the UI can call to force a refresh. Private repos from the
 * build-time snapshot are merged in, flagged with `private: true`.
 */
export function useGithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastSynced, setLastSynced] = useState(null);

  const loadFromCache = useCallback(() => {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
      return parsed;
    } catch {
      return null;
    }
  }, []);

  const fetchRepos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const url = `https://api.github.com/users/${personal.githubUser}/repos?per_page=100&sort=pushed&direction=desc`;
      const res = await fetch(url, {
        headers: { Accept: 'application/vnd.github+json' },
      });
      if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
      const data = await res.json();
      const filtered = data
        .filter((r) => !r.fork) // skip forks
        .filter((r) => !EXCLUDED.has(r.name))
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
      const ts = Date.now();
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ repos: filtered, ts }));
      } catch {
        /* storage may be disabled — non-fatal */
      }
      setRepos(filtered);
      setLastSynced(ts);
    } catch (e) {
      setError(e.message || 'Failed to fetch repositories');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const cached = loadFromCache();
    if (cached) {
      setRepos(cached.repos);
      setLastSynced(cached.ts);
      setLoading(false);
    } else {
      fetchRepos();
    }
  }, [fetchRepos, loadFromCache]);

  const sync = useCallback(() => {
    sessionStorage.removeItem(CACHE_KEY);
    fetchRepos();
  }, [fetchRepos]);

  const merged = useMemo(() => {
    // If a private repo has since gone public, the live entry wins.
    const publicNames = new Set(repos.map((r) => r.name));
    return [...repos, ...privateRepos.filter((r) => !publicNames.has(r.name) && !EXCLUDED.has(r.name))]
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
  }, [repos]);

  return { repos: merged, loading, error, lastSynced, sync };
}
