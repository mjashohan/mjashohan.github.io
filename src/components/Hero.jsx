import { useEffect, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';
import { personal } from '../data/personal.js';

// Tiny typewriter that cycles through the tagline lines.
function useTypewriter(lines, speed = 55, pause = 1600) {
  const [text, setText] = useState('');
  const [lineIdx, setLineIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIdx];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setLineIdx((i) => (i + 1) % lines.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1),
          );
        },
        deleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, lineIdx, lines, speed, pause]);

  return text;
}

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const typed = useTypewriter(personal.tagline);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const navHeight = window.innerWidth >= 900 ? 72 : 64;
            const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 6, md: 10 },
        scrollMarginTop: 96,
      }}
    >
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            color: 'primary.main',
            fontSize: '0.95rem',
            mb: 2,
          }}
        >
          $ whoami
        </Typography>
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.4rem', md: '4.5rem' },
            lineHeight: 1.05,
            mb: 1.5,
          }}
        >
          Hi, I'm{' '}
          <Box component="span" className="gradient-text">
            Shohan.
          </Box>
        </Typography>
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem' },
            mb: 3,
            fontWeight: 600,
            minHeight: { xs: '2.8em', sm: '1.4em' },
          }}
        >
          {typed}
          <span className="cursor-blink" />
        </Typography>
      </motion.div>

      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{ maxWidth: 620 }}
      >
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: 4, fontSize: '1.05rem' }}
        >
          {personal.about}
        </Typography>
      </motion.div>

      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => scrollTo('projects')}
            endIcon={<ArrowDownwardIcon />}
            sx={{
              boxShadow: '0 8px 32px rgba(100, 255, 218, 0.25)',
              '&:hover': {
                boxShadow: '0 12px 40px rgba(100, 255, 218, 0.4)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.25s ease',
            }}
          >
            See my work
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href={`mailto:${personal.email}`}
            endIcon={<LaunchIcon />}
            sx={{
              borderWidth: 1.5,
              '&:hover': {
                borderWidth: 1.5,
                bgcolor: 'rgba(100, 255, 218, 0.05)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.25s ease',
            }}
          >
            Get in touch
          </Button>
        </Stack>
      </motion.div>
    </Box>
  );
}
