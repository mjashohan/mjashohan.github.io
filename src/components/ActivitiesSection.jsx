import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { activities } from '../data/activities.js';

const ICONS = {
  'University Competitions': EmojiEventsOutlinedIcon,
  'Event Management': GroupsOutlinedIcon,
};

export default function ActivitiesSection() {
  return (
     <Box id="activities" component="section" sx={{ py: { xs: 5, sm: 6, md: 10 }, scrollMarginTop: 96 }}>
      <SectionHeader
        tag="04. Off the clock"
        title="Extra-Curricular"
        subtitle="A few things I've done outside of work and studies."
      />

      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {activities.map((cat, idx) => {
          const Icon = ICONS[cat.category] || EmojiEventsOutlinedIcon;
          return (
            <Grid item xs={12} md={6} key={cat.category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(100, 255, 218, 0.1)',
                    },
                  }}
                >
                   <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          bgcolor: 'rgba(100, 255, 218, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid',
                          borderColor: 'rgba(100, 255, 218, 0.2)',
                        }}
                      >
                        <Icon sx={{ color: 'primary.main', fontSize: 22 }} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {cat.category}
                      </Typography>
                    </Stack>

                    <Stack spacing={2}>
                      {cat.items.map((item) => (
                        <Box
                          key={item.name}
                          sx={{
                            position: 'relative',
                            pl: 2,
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              left: 0,
                              top: 8,
                              width: 4,
                              height: 4,
                              borderRadius: '50%',
                              bgcolor: 'primary.main',
                              boxShadow: '0 0 6px rgba(100, 255, 218, 0.6)',
                            },
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 600, color: 'text.primary', mb: 0.3 }}
                          >
                            {item.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.detail}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
