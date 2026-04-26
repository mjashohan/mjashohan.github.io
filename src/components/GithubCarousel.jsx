import { useRef, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  IconButton,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion';
import { useGithubRepos } from '../hooks/useGithubRepos.js';
import { personal } from '../data/personal.js';

// Subset of common GitHub language colors so chips feel authentic.
const LANGUAGE_COLORS = {
  Java: '#b07219',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Solidity: '#AA6746',
  Dart: '#00B4AB',
  Go: '#00ADD8',
  C: '#555555',
  'C++': '#f34b7d',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Rust: '#dea584',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Vue: '#41b883',
  Jupyter: '#DA5B0B',
  'Jupyter Notebook': '#DA5B0B',
};

const formatDate = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const formatLastSynced = (ts) => {
  if (!ts) return 'never';
  const seconds = Math.round((Date.now() - ts) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} h ago`;
  return formatDate(new Date(ts).toISOString());
};

function RepoCard({ repo, index }) {
  const langColor = LANGUAGE_COLORS[repo.language] || '#8892b0';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      style={{ flex: '0 0 auto', width: 320, scrollSnapAlign: 'start' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          '&:hover': {
            transform: 'translateY(-6px)',
            borderColor: 'primary.main',
            boxShadow: '0 16px 48px rgba(100, 255, 218, 0.15)',
            '& .repo-thumb': {
              transform: 'scale(1.05)',
            },
          },
        }}
      >
        {/* Generated SVG thumbnail — replace with real screenshot later. */}
        <Box
          sx={{
            position: 'relative',
            height: 160,
            overflow: 'hidden',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box
            className="repo-thumb"
            sx={{
              position: 'absolute',
              inset: 0,
              transition: 'transform 0.6s ease',
              background: `
                radial-gradient(ellipse at 30% 30%, ${langColor}30, transparent 60%),
                radial-gradient(ellipse at 70% 70%, rgba(100, 255, 218, 0.15), transparent 60%),
                linear-gradient(135deg, #131826 0%, #1a2032 100%)
              `,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Stack alignItems="center" spacing={1}>
              <CodeIcon sx={{ fontSize: 48, color: langColor, opacity: 0.7 }} />
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  color: 'text.secondary',
                  fontSize: '0.75rem',
                }}
              >
                {repo.language || 'mixed'}
              </Typography>
            </Stack>
          </Box>
          {/* Decorative grid overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(100,255,218,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              opacity: 0.6,
            }}
          />
        </Box>

        <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
            <GitHubIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                fontFamily: '"JetBrains Mono", monospace',
                color: 'primary.main',
                fontSize: '0.95rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {repo.name}
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: '0.85rem',
              mb: 1.5,
              minHeight: '2.6em',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {repo.description || 'No description provided.'}
          </Typography>

          <Stack direction="row" spacing={1.5} sx={{ mb: 1.5, color: 'text.secondary' }}>
            {repo.language && (
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Box
                  sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: langColor }}
                />
                <Typography variant="caption">{repo.language}</Typography>
              </Stack>
            )}
            <Stack direction="row" spacing={0.4} alignItems="center">
              <StarBorderIcon sx={{ fontSize: 14 }} />
              <Typography variant="caption">{repo.stargazers_count}</Typography>
            </Stack>
            <Stack direction="row" spacing={0.4} alignItems="center">
              <ForkRightIcon sx={{ fontSize: 14 }} />
              <Typography variant="caption">{repo.forks_count}</Typography>
            </Stack>
          </Stack>

          {repo.topics?.length > 0 && (
            <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap sx={{ mb: 1.5 }}>
              {repo.topics.slice(0, 3).map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(100, 255, 218, 0.06)',
                    color: 'primary.main',
                    fontSize: '0.65rem',
                    height: 18,
                    border: '1px solid',
                    borderColor: 'rgba(100, 255, 218, 0.15)',
                  }}
                />
              ))}
            </Stack>
          )}

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.7rem',
              }}
            >
              ↻ {formatDate(repo.pushed_at)}
            </Typography>
            <Button
              href={repo.html_url}
              target="_blank"
              rel="noopener"
              size="small"
              endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
              sx={{ fontSize: '0.78rem', minWidth: 0, px: 1 }}
            >
              View
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function GithubCarousel() {
  const { repos, loading, error, lastSynced, sync } = useGithubRepos();
  const scrollerRef = useRef(null);
  const [syncing, setSyncing] = useState(false);

  const handleSync = async () => {
    setSyncing(true);
    await sync();
    // Give the spinner a moment so the button doesn't flicker.
    setTimeout(() => setSyncing(false), 400);
  };

  const scrollBy = (delta) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        justifyContent="space-between"
        spacing={1.5}
        sx={{ mb: 2.5 }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <GitHubIcon sx={{ color: 'primary.main' }} />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            GitHub Repositories
          </Typography>
          <Chip
            label={`${repos.length} ${repos.length === 1 ? 'repo' : 'repos'}`}
            size="small"
            sx={{
              bgcolor: 'rgba(100, 255, 218, 0.08)',
              color: 'primary.main',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.7rem',
            }}
          />
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.72rem',
            }}
          >
            synced {formatLastSynced(lastSynced)}
          </Typography>
          <Tooltip title="Pull latest from GitHub">
            <span>
              <Button
                onClick={handleSync}
                disabled={loading || syncing}
                startIcon={
                  syncing || loading ? (
                    <CircularProgress size={14} sx={{ color: 'primary.main' }} />
                  ) : (
                    <RefreshIcon sx={{ fontSize: 16 }} />
                  )
                }
                size="small"
                variant="outlined"
                sx={{
                  borderColor: 'rgba(100, 255, 218, 0.3)',
                  fontSize: '0.78rem',
                }}
              >
                Sync
              </Button>
            </span>
          </Tooltip>
          <Tooltip title="Scroll left">
            <IconButton onClick={() => scrollBy(-340)} size="small">
              <ChevronLeftIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Scroll right">
            <IconButton onClick={() => scrollBy(340)} size="small">
              <ChevronRightIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      {error && (
        <Alert
          severity="warning"
          sx={{
            mb: 2,
            bgcolor: 'rgba(255, 126, 95, 0.08)',
            border: '1px solid rgba(255, 126, 95, 0.2)',
          }}
        >
          Couldn't reach GitHub: {error}.{' '}
          <Box
            component="a"
            href={personal.github}
            target="_blank"
            rel="noopener"
            sx={{ color: 'primary.main' }}
          >
            View repositories on GitHub →
          </Box>
        </Alert>
      )}

      <Box
        ref={scrollerRef}
        sx={{
          display: 'flex',
          gap: 2.5,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          py: 1,
          px: 0.5,
          mx: -0.5,
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': { height: 6 },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(100, 255, 218, 0.2)',
            borderRadius: 3,
          },
        }}
      >
        {loading && repos.length === 0
          ? Array.from({ length: 4 }).map((_, i) => (
              <Box key={i} sx={{ flex: '0 0 auto', width: 320 }}>
                <Skeleton
                  variant="rounded"
                  height={340}
                  sx={{ bgcolor: 'rgba(100, 255, 218, 0.04)' }}
                />
              </Box>
            ))
          : repos.map((repo, idx) => <RepoCard key={repo.id} repo={repo} index={idx} />)}
      </Box>
    </Box>
  );
}
