import { useEffect, useState } from 'react';
import { AppBar, Box, Button, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const NAV_HEIGHT = { xs: 64, md: 72 };

const sections = [
  { id: 'home', label: 'Home', code: '00' },
  { id: 'experience', label: 'Experience', code: '01' },
  { id: 'education', label: 'Education', code: '02' },
  { id: 'projects', label: 'Projects', code: '03' },
  { id: 'activities', label: 'Activities', code: '04' },
];

export default function Navigation() {
  const [active, setActive] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const handleScroll = () => {
            const navHeight = window.innerWidth >= 900 ? 72 : 64;
            const scrollY = window.scrollY + navHeight + 80;
            let current = 'home';
            sections.forEach((s) => {
                const el = document.getElementById(s.id);
                if (el && el.offsetTop <= scrollY) current = s.id;
            });
            setActive(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            // Offset by navbar height + small breathing room so the section heading
            // isn't tucked right against the bottom of the bar.
            const navHeight = window.innerWidth >= 900 ? 72 : 64;
            const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          bgcolor: 'rgba(10, 14, 23, 0.78)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          zIndex: (t) => t.zIndex.appBar,
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1400,
          mx: 'auto',
          width: '100%',
          px: { xs: 2, md: 4 },
          minHeight: { xs: 64, md: 72 },
        }}
      >
        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ flexGrow: 1 }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: 700,
              color: 'primary.main',
              fontSize: { xs: '1.05rem', md: '1.2rem' },
            }}
          >
            {'<'}shohan{' />'}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={{ xs: 0.5, md: 1 }}
          sx={{ overflowX: 'auto' }}
        >
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <Button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                sx={{
                  minWidth: 'auto',
                  px: { xs: 1, md: 1.8 },
                  py: 0.8,
                  color: isActive ? 'primary.main' : 'text.primary',
                  position: 'relative',
                  fontSize: { xs: '0.78rem', md: '0.92rem' },
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent',
                  },
                }}
              >
                {!isMobile && (
                  <Typography
                    component="span"
                    sx={{
                      color: 'primary.main',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.72rem',
                      mr: 0.8,
                      opacity: 0.7,
                    }}
                  >
                    {s.code}.
                  </Typography>
                )}
                {s.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    style={{
                      position: 'absolute',
                      left: 8,
                      right: 8,
                      bottom: 2,
                      height: 2,
                      background:
                        'linear-gradient(90deg, #64ffda, #8effe7)',
                      borderRadius: 2,
                      boxShadow: '0 0 8px rgba(100,255,218,0.6)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Button>
            );
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
