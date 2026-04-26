import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { experience } from '../data/experience.js';

export default function ExperienceSection() {
  return (
    <Box id="experience" component="section" sx={{ py: { xs: 5, sm: 6, md: 10 }, scrollMarginTop: 96  }}>
      <SectionHeader
        tag="01. Where I've worked"
        title="Experience"
        subtitle="A few of the places I've contributed code, broken builds, and shipped fixes."
      />

        <Box
            sx={{
                position: 'relative',
                pl: { xs: 2.5, sm: 3, md: 4 },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: { xs: 4, sm: 6, md: 8 },
                    top: 8,
                    bottom: 8,
                    width: 2,
                    background:
                        'linear-gradient(180deg, rgba(100,255,218,0.5) 0%, rgba(100,255,218,0.05) 100%)',
                },
            }}
        >
        {experience.map((job, idx) => (
          <motion.div
            key={`${job.company}-${idx}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <Box sx={{ position: 'relative', mb: 4 }}>
              {/* Timeline node */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: -20, sm: -22, md: -28 },
                  top: 24,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  bgcolor: 'background.default',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 0 12px rgba(100, 255, 218, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&::after': {
                    content: '""',
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                  },
                }}
              />

              <Card
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(4px)',
                    borderColor: 'primary.main',
                    boxShadow: '0 8px 32px rgba(100, 255, 218, 0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                    spacing={1}
                    sx={{ mb: 1 }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <WorkOutlineIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {job.role}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'primary.main',
                        fontFamily: '"JetBrains Mono", monospace',
                        bgcolor: 'rgba(100, 255, 218, 0.08)',
                        px: 1.2,
                        py: 0.4,
                        borderRadius: 1,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {job.period}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="subtitle1"
                    sx={{ color: 'text.secondary', mb: 0.5, fontWeight: 500 }}
                  >
                    {job.company}
                    {job.location && (
                      <Box component="span" sx={{ ml: 1, opacity: 0.7, fontSize: '0.9em' }}>
                        · {job.location}
                      </Box>
                    )}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2.5, my: 1.5, color: 'text.secondary' }}>
                    {job.bullets.map((b, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{ mb: 0.5, '&::marker': { color: 'primary.main' } }}
                      >
                        <Typography variant="body2">{b}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap sx={{ mt: 1.5 }}>
                    {job.tech.map((t) => (
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
                </CardContent>
              </Card>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
