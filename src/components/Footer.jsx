import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import { personal } from '../data/personal.js';

const captionSx = {
    color: 'text.secondary',
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '0.78rem',
};

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 5,
                mt: 6,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Stack spacing={0.5} alignItems={{ xs: 'center', sm: 'flex-start' }}>
                    <Typography variant="caption" sx={captionSx}>
                        // designed &amp; built by {personal.shortName} · {new Date().getFullYear()}
                    </Typography>

                    {personal.lastUpdated && (
                        <Typography variant="caption" sx={{ ...captionSx, opacity: 0.75 }}>
                            Updated on: {personal.lastUpdated.date}, {personal.lastUpdated.place}
                        </Typography>
                    )}
                </Stack>

                <Stack direction="row" spacing={1}>
                    <Tooltip title="GitHub">
                        <IconButton
                            href={personal.github}
                            target="_blank"
                            rel="noopener"
                            size="small"
                            sx={{
                                '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                                transition: 'all 0.2s ease',
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
                                '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <LinkedInIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Email">
                        <IconButton
                            href={`mailto:${personal.email}`}
                            size="small"
                            sx={{
                                '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <EmailIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Stack>
        </Box>
    );
}
