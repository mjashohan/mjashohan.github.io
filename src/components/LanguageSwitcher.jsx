import { useState } from 'react';
import { Button, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import { LANGUAGES, useI18n } from '../i18n/I18nProvider.jsx';

// Dropdown that switches the site language. The active language is reflected in
// the URL (`/` for English, `/de` for German) by the I18nProvider.
export default function LanguageSwitcher() {
    const { lang, setLang, t } = useI18n();
    const [anchor, setAnchor] = useState(null);
    const current = LANGUAGES.find((l) => l.code === lang);

    const choose = (code) => {
        setLang(code);
        setAnchor(null);
    };

    return (
        <>
            <Button
                onClick={(e) => setAnchor(e.currentTarget)}
                aria-label={`${t.nav.language}: ${current.label}`}
                aria-haspopup="listbox"
                aria-expanded={Boolean(anchor)}
                startIcon={<LanguageIcon sx={{ fontSize: 18 }} />}
                endIcon={
                    <ExpandMoreIcon
                        sx={{
                            fontSize: 16,
                            transition: 'transform 0.2s ease',
                            transform: anchor ? 'rotate(180deg)' : 'none',
                        }}
                    />
                }
                sx={{
                    minWidth: 'auto',
                    px: { xs: 1, md: 1.5 },
                    py: 0.8,
                    color: anchor ? 'primary.main' : 'text.primary',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    '&:hover': { color: 'primary.main', borderColor: 'primary.main', bgcolor: 'transparent' },
                    '& .MuiButton-startIcon': { mr: 0.6 },
                    '& .MuiButton-endIcon': { ml: 0.4 },
                }}
            >
                {current.short}
            </Button>

            <Menu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={() => setAnchor(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                slotProps={{
                    paper: {
                        sx: {
                            mt: 1,
                            minWidth: 160,
                            bgcolor: 'rgba(10, 14, 23, 0.96)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            backgroundImage: 'none',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 2,
                        },
                    },
                }}
            >
                {LANGUAGES.map((l) => (
                    <MenuItem
                        key={l.code}
                        selected={l.code === lang}
                        onClick={() => choose(l.code)}
                        lang={l.code}
                        sx={{
                            fontSize: '0.88rem',
                            py: 1.2,
                            px: 2,
                            color: l.code === lang ? 'primary.main' : 'text.primary',
                            '&:hover': {
                                bgcolor: 'rgba(100, 255, 218, 0.08)',
                                color: 'primary.main',
                            },
                            '&.Mui-selected, &.Mui-selected:hover': {
                                bgcolor: 'rgba(100, 255, 218, 0.06)',
                            },
                        }}
                    >
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: '"JetBrains Mono", monospace',
                                fontSize: '0.72rem',
                                opacity: 0.7,
                                mr: 1.5,
                                width: 20,
                            }}
                        >
                            {l.short}
                        </Typography>
                        {l.label}
                        {l.code === lang && (
                            <ListItemIcon sx={{ minWidth: 0, ml: 'auto', pl: 1.5, color: 'primary.main' }}>
                                <CheckIcon sx={{ fontSize: 16 }} />
                            </ListItemIcon>
                        )}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
