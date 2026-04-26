import { useEffect, useState } from 'react';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const NAV_HEIGHT = { xs: 56, sm: 64, md: 72 };

const sections = [
    { id: 'home', label: 'Home', code: '00' },
    { id: 'experience', label: 'Experience', code: '01' },
    { id: 'education', label: 'Education', code: '02' },
    { id: 'projects', label: 'Projects', code: '03' },
    { id: 'activities', label: 'Activities', code: '04' },
];

// Single source of truth for how tall the nav is at the current viewport.
// Used both by scroll-spy and the smooth-scroll offset.
export const getNavHeight = () => {
    if (typeof window === 'undefined') return 72;
    const w = window.innerWidth;
    if (w >= 900) return 72;
    if (w >= 600) return 64;
    return 56;
};

export default function Navigation() {
    const [active, setActive] = useState('home');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // < 900px

    useEffect(() => {
        const handleScroll = () => {
            const navHeight = getNavHeight();
            const scrollY = window.scrollY + navHeight + 80;
            let current = 'home';
            sections.forEach((s) => {
                const el = document.getElementById(s.id);
                if (el && el.offsetTop <= scrollY) current = s.id;
            });

            const atBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 4;
            if (atBottom) current = sections[sections.length - 1].id;

            setActive(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const navHeight = getNavHeight();
            const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
            window.scrollTo({ top, behavior: 'smooth' });
        }
        setDrawerOpen(false);
    };

    return (
        <>
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
                    // Respect notch / status bar on iOS
                    pt: 'env(safe-area-inset-top)',
                }}
            >
                <Toolbar
                    sx={{
                        maxWidth: 1400,
                        mx: 'auto',
                        width: '100%',
                        px: { xs: 1.5, sm: 2, md: 4 },
                        minHeight: { xs: 56, sm: 64, md: 72 },
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
                                fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.2rem' },
                            }}
                        >
                            {'<'}shohan{' />'}
                        </Typography>
                    </Stack>

                    {/* Desktop nav (md+) */}
                    {!isMobile && (
                        <Stack direction="row" spacing={1}>
                            {sections.map((s) => {
                                const isActive = active === s.id;
                                return (
                                    <Button
                                        key={s.id}
                                        onClick={() => scrollTo(s.id)}
                                        sx={{
                                            minWidth: 'auto',
                                            px: 1.8,
                                            py: 0.8,
                                            color: isActive ? 'primary.main' : 'text.primary',
                                            position: 'relative',
                                            fontSize: '0.92rem',
                                            fontWeight: 500,
                                            '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                                        }}
                                    >
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
                                                    background: 'linear-gradient(90deg, #64ffda, #8effe7)',
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
                    )}

                    {/* Mobile / tablet menu button */}
                    {isMobile && (
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            aria-label="Open navigation menu"
                            sx={{ color: 'primary.main', width: 44, height: 44 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile / tablet drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: { xs: '78vw', sm: 320 },
                        maxWidth: 360,
                        bgcolor: 'rgba(10, 14, 23, 0.96)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderLeft: '1px solid',
                        borderColor: 'divider',
                        pt: 'env(safe-area-inset-top)',
                        pb: 'env(safe-area-inset-bottom)',
                    },
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}
                >
                    <Typography
                        sx={{
                            fontFamily: '"JetBrains Mono", monospace',
                            fontWeight: 700,
                            color: 'primary.main',
                        }}
                    >
                        {'<'}shohan{' />'}
                    </Typography>
                    <IconButton
                        onClick={() => setDrawerOpen(false)}
                        aria-label="Close navigation menu"
                        sx={{ color: 'text.primary', width: 44, height: 44 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Stack>

                <List sx={{ pt: 2 }}>
                    {sections.map((s) => {
                        const isActive = active === s.id;
                        return (
                            <ListItemButton
                                key={s.id}
                                onClick={() => scrollTo(s.id)}
                                sx={{
                                    py: 1.5,
                                    px: 3,
                                    borderLeft: '2px solid',
                                    borderColor: isActive ? 'primary.main' : 'transparent',
                                    bgcolor: isActive ? 'rgba(100, 255, 218, 0.06)' : 'transparent',
                                    transition: 'all 0.2s ease',
                                    '&:hover': { bgcolor: 'rgba(100, 255, 218, 0.08)' },
                                }}
                            >
                                <Typography
                                    component="span"
                                    sx={{
                                        color: 'primary.main',
                                        fontFamily: '"JetBrains Mono", monospace',
                                        fontSize: '0.72rem',
                                        mr: 1.5,
                                        opacity: 0.8,
                                    }}
                                >
                                    {s.code}.
                                </Typography>
                                <ListItemText
                                    primary={s.label}
                                    primaryTypographyProps={{
                                        sx: {
                                            color: isActive ? 'primary.main' : 'text.primary',
                                            fontWeight: isActive ? 600 : 500,
                                        },
                                    }}
                                />
                            </ListItemButton>
                        );
                    })}
                </List>
            </Drawer>
        </>
    );
}