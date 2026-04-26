import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { education } from '../data/education.js';

export default function EducationSection() {
  return (
    <Box id="education" component="section" sx={{ py: { xs: 6, md: 10 }, scrollMarginTop: 96 }}>
      <SectionHeader tag="02. Where I studied" title="Education" />

      <Stack spacing={3}>
        {education.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card
              sx={{
                position: 'relative',
                overflow: 'visible',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: 'primary.main',
                  boxShadow: '0 12px 40px rgba(100, 255, 218, 0.12)',
                },
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 3,
                  height: '100%',
                  background:
                    'linear-gradient(180deg, #64ffda 0%, transparent 100%)',
                  borderTopLeftRadius: 12,
                  borderBottomLeftRadius: 12,
                }}
              />
              <CardContent sx={{ p: 3, pl: 4 }}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  spacing={1}
                  sx={{ mb: 1 }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <SchoolOutlinedIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {edu.degree}
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
                    {edu.period}
                  </Typography>
                </Stack>

                <Typography
                  variant="subtitle1"
                  sx={{ color: 'text.secondary', mb: 1, fontWeight: 500 }}
                >
                  {edu.institution}
                  {edu.expected && (
                    <Box component="span" sx={{ ml: 1, opacity: 0.7, fontSize: '0.9em' }}>
                      · {edu.expected}
                    </Box>
                  )}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  Focus areas
                </Typography>

                <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
                  {edu.focus.map((f) => (
                    <Chip
                      key={f}
                      label={f}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: 'rgba(100, 255, 218, 0.2)',
                        color: 'text.primary',
                        fontSize: '0.78rem',
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}
