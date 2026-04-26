import {
  Avatar,
  Box,
  Chip,
  Divider,
  IconButton,
  LinearProgress,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';
import { personal, languages } from '../data/personal.js';
import { skillCategories } from '../data/skills.js';

const SkillDots = ({ level }) => (
  <Stack direction="row" spacing={0.5}>
    {[0, 1, 2, 3, 4].map((i) => (
      <Box
        key={i}
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          bgcolor: i < level ? 'primary.main' : 'rgba(100, 255, 218, 0.15)',
          boxShadow: i < level ? '0 0 8px rgba(100,255,218,0.5)' : 'none',
          transition: 'all 0.3s ease',
        }}
      />
    ))}
  </Stack>
);

export default function Sidebar() {
  return (
    <Box
      component={motion.aside}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      sx={{
        width: { xs: '100%', md: 320 },
        flexShrink: 0,
        position: { xs: 'static', md: 'sticky' },
        top: { md: 24 },
        alignSelf: 'flex-start',
        maxHeight: { md: 'calc(100vh - 48px)' },
        overflowY: { md: 'auto' },
        p: 3,
        borderRadius: 3,
        bgcolor: 'rgba(19, 24, 38, 0.55)',
        backdropFilter: 'blur(14px)',
        border: '1px solid',
        borderColor: 'divider',
        zIndex: 1,
      }}
    >
      {/* Avatar + name */}
      <Stack alignItems="center" spacing={2} sx={{ mb: 3 }}>
        <Box sx={{ position: 'relative' }}>
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: -6,
              borderRadius: '50%',
              background:
                'conic-gradient(from 0deg, #64ffda, #ff7e5f, #64ffda)',
              filter: 'blur(8px)',
              opacity: 0.5,
            }}
          />
          <Avatar
            src={personal.avatar}
            alt={personal.name}
            sx={{
              width: 130,
              height: 130,
              border: '3px solid',
              borderColor: 'background.paper',
              position: 'relative',
              fontSize: '2.5rem',
              fontWeight: 700,
              bgcolor: 'background.paper',
              color: 'primary.main',
            }}
          >
            {personal.shortName[0]}
          </Avatar>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 0.5 }}>
            {personal.name}
          </Typography>
          <Chip
            label={personal.title}
            size="small"
            sx={{
              bgcolor: 'rgba(100, 255, 218, 0.08)',
              color: 'primary.main',
              border: '1px solid',
              borderColor: 'primary.dark',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.72rem',
            }}
          />
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Contact */}
      <Stack spacing={1.5} sx={{ mb: 3 }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <EmailIcon sx={{ color: 'primary.main', fontSize: 18 }} />
          <Typography
            variant="body2"
            component="a"
            href={`mailto:${personal.email}`}
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              wordBreak: 'break-all',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {personal.email}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <PhoneIcon sx={{ color: 'primary.main', fontSize: 18 }} />
          <Typography variant="body2">{personal.phone}</Typography>
        </Stack>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <PlaceIcon sx={{ color: 'primary.main', fontSize: 18 }} />
          <Typography variant="body2">{personal.location}</Typography>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
        <Tooltip title="GitHub">
          <IconButton
            href={personal.github}
            target="_blank"
            rel="noopener"
            size="small"
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton
            href={personal.linkedin}
            target="_blank"
            rel="noopener"
            size="small"
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Skills */}
      <Typography
        variant="overline"
        sx={{
          color: 'primary.main',
          fontFamily: '"JetBrains Mono", monospace',
          letterSpacing: '0.1em',
          fontSize: '0.7rem',
        }}
      >
        $ skills --list
      </Typography>

      <Stack spacing={2} sx={{ mt: 1.5 }}>
        {skillCategories.map((cat) => (
          <Box key={cat.title}>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600,
                fontSize: '0.68rem',
              }}
            >
              {cat.title}
            </Typography>
            <Stack spacing={0.75} sx={{ mt: 0.75 }}>
              {cat.skills.map((s) => (
                <Stack
                  key={s.name}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                    {s.name}
                  </Typography>
                  <SkillDots level={s.level} />
                </Stack>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>

      <Divider sx={{ my: 2.5 }} />

      {/* Languages */}
      <Typography
        variant="overline"
        sx={{
          color: 'primary.main',
          fontFamily: '"JetBrains Mono", monospace',
          letterSpacing: '0.1em',
          fontSize: '0.7rem',
        }}
      >
        $ languages
      </Typography>

      <Stack spacing={1.5} sx={{ mt: 1.5 }}>
        {languages.map((lang) => (
          <Box key={lang.name}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 0.5 }}
            >
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {lang.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: 'primary.main',
                  fontFamily: '"JetBrains Mono", monospace',
                }}
              >
                {lang.level}
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={lang.percent}
              sx={{
                height: 4,
                borderRadius: 2,
                bgcolor: 'rgba(100, 255, 218, 0.08)',
                '& .MuiLinearProgress-bar': {
                  background:
                    'linear-gradient(90deg, #64ffda 0%, #8effe7 100%)',
                  borderRadius: 2,
                },
              }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
