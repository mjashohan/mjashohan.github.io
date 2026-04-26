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
                // Stacks above content until lg (1200px), then becomes a sticky sidebar.
                width: { xs: '100%', lg: 320 },
                flexShrink: 0,
                position: { xs: 'static', lg: 'sticky' },
                top: { lg: 96 },
                alignSelf: 'flex-start',
                maxHeight: { lg: 'calc(100vh - 120px)' },
                overflowY: { lg: 'auto' },
                p: { xs: 2.5, sm: 3 },
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
                            inset: -8,
                            borderRadius: '50%',
                            background: 'conic-gradient(from 0deg, #64ffda, #ff7e5f, #64ffda)',
                            filter: 'blur(10px)',
                            opacity: 0.5,
                        }}
                    />
                    <Avatar
                        src={personal.avatar}
                        alt={personal.name}
                        sx={{
                            width: { xs: 140, sm: 160, lg: 200 },
                            height: { xs: 140, sm: 160, lg: 200 },
                            border: '3px solid',
                            borderColor: 'background.paper',
                            position: 'relative',
                            fontSize: { xs: '2rem', lg: '2.5rem' },
                            fontWeight: 700,
                            bgcolor: 'background.paper',
                            color: 'primary.main',
                        }}
                    >
                        {personal.shortName[0]}
                    </Avatar>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ mb: 0.5, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
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
                    <EmailIcon sx={{ color: 'primary.main', fontSize: 18, flexShrink: 0 }} />
                    <Typography
                        variant="body2"
                        component="a"
                        href={`mailto:${personal.email}`}
                        sx={{
                            color: 'text.primary',
                            textDecoration: 'none',
                            wordBreak: 'break-all',
                            minWidth: 0,
                            '&:hover': { color: 'primary.main' },
                        }}
                    >
                        {personal.email}
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                    <PhoneIcon sx={{ color: 'primary.main', fontSize: 18, flexShrink: 0 }} />
                    <Typography
                        variant="body2"
                        component="a"
                        href={`tel:${personal.phone.replace(/\s/g, '')}`}
                        sx={{
                            color: 'text.primary',
                            textDecoration: 'none',
                            '&:hover': { color: 'primary.main' },
                        }}
                    >
                        {personal.phone}
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                    <PlaceIcon sx={{ color: 'primary.main', fontSize: 18, flexShrink: 0 }} />
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
                        aria-label="GitHub profile"
                        sx={{
                            border: '1px solid',
                            borderColor: 'divider',
                            width: 40,
                            height: 40,
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
                        aria-label="LinkedIn profile"
                        sx={{
                            border: '1px solid',
                            borderColor: 'divider',
                            width: 40,
                            height: 40,
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
                                    spacing={1}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontSize: '0.85rem',
                                            minWidth: 0,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {s.name}
                                    </Typography>
                                    <SkillDots level={s.level} />
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                ))}
            </Stack>

            <Divider sx={{ my: 2 }} />

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
                {languages.map((l) => (
                    <Box key={l.name}>
                        <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
                            <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                                {l.name}
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{
                                    color: 'primary.main',
                                    fontFamily: '"JetBrains Mono", monospace',
                                    fontSize: '0.7rem',
                                }}
                            >
                                {l.level}
                            </Typography>
                        </Stack>
                        <LinearProgress
                            variant="determinate"
                            value={l.percent}
                            sx={{
                                height: 4,
                                borderRadius: 2,
                                bgcolor: 'rgba(100, 255, 218, 0.08)',
                                '& .MuiLinearProgress-bar': {
                                    background: 'linear-gradient(90deg, #64ffda, #8effe7)',
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