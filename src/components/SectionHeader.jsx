import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <Box sx={{ mb: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-tag">{tag}</span>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            mt: 1,
            mb: subtitle ? 1.5 : 0,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600 }}>
            {subtitle}
          </Typography>
        )}
      </motion.div>
    </Box>
  );
}
