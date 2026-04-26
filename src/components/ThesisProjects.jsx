import { Box, Button, Card, CardContent, Chip, Divider, Stack, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import { motion } from 'framer-motion';
import { thesisProjects } from '../data/thesisProjects.js';

export default function ThesisProjects() {
  return (
    <Box>
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
        <ScienceOutlinedIcon sx={{ color: 'primary.main' }} />
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Thesis &amp; Research Projects
        </Typography>
      </Stack>

      <Stack spacing={3}>
        {thesisProjects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <Card
              sx={{
                position: 'relative',
                overflow: 'visible',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'primary.main',
                  boxShadow: '0 12px 40px rgba(100, 255, 218, 0.12)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', md: 'flex-start' }}
                  spacing={1.5}
                  sx={{ mb: 1.5 }}
                >
                  <Box>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <Chip
                        label={p.type}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(100, 255, 218, 0.1)',
                          color: 'primary.main',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          height: 22,
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                          fontFamily: '"JetBrains Mono", monospace',
                        }}
                      >
                        {p.domain}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, lineHeight: 1.2, fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                    >
                      {p.title}
                    </Typography>
                  </Box>
                </Stack>

                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 2, fontSize: '0.98rem' }}
                >
                  {p.description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography
                  variant="caption"
                  sx={{
                    color: 'primary.main',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.78rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  // Functions
                </Typography>

                <Box component="ul" sx={{ pl: 2.5, my: 1, color: 'text.secondary' }}>
                  {p.functions.map((fn, i) => (
                    <Box
                      component="li"
                      key={i}
                      sx={{ mb: 0.5, '&::marker': { color: 'primary.main' } }}
                    >
                      <Typography variant="body2">{fn}</Typography>
                    </Box>
                  ))}
                </Box>

                <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                  {p.tags.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(100, 255, 218, 0.06)',
                        color: 'primary.main',
                        border: '1px solid',
                        borderColor: 'rgba(100, 255, 218, 0.15)',
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.7rem',
                        height: 22,
                      }}
                    />
                  ))}
                </Stack>

                {p.links?.length > 0 && (
                  <Stack direction="row" spacing={1} sx={{ mt: 2.5 }} flexWrap="wrap" useFlexGap>
                    {p.links.map((link) => (
                      <Button
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener"
                        variant="outlined"
                        size="small"
                        endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
                        sx={{
                          borderColor: 'rgba(100, 255, 218, 0.3)',
                          fontSize: '0.8rem',
                          '&:hover': { borderColor: 'primary.main' },
                        }}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Stack>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}
