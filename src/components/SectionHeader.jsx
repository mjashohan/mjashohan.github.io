import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function SectionHeader({ tag, title, subtitle }) {
    return (
        <Box sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
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
                        fontSize: { xs: '1.7rem', sm: '2.2rem', md: '2.6rem', lg: '3rem' },
                        mt: 1,
                        mb: subtitle ? 1.5 : 0,
                        wordBreak: 'break-word',
                    }}
                >
                    {title}
                </Typography>
                {subtitle && (
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            fontSize: { xs: '0.95rem', md: '1rem' },
                        }}
                    >
                        {subtitle}
                    </Typography>
                )}
            </motion.div>
        </Box>
    );
}