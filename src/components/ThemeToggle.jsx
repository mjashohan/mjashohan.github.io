import { IconButton, Tooltip } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useThemeMode } from '../ThemeModeProvider.jsx';
import { useI18n } from '../i18n/I18nProvider.jsx';

// Icon shows the mode you'll switch *to* (sun while dark, moon while light).
export default function ThemeToggle() {
    const { mode, toggle } = useThemeMode();
    const { t } = useI18n();
    const label = mode === 'dark' ? t.nav.switchToLight : t.nav.switchToDark;

    return (
        <Tooltip title={label}>
            <IconButton
                onClick={toggle}
                aria-label={label}
                sx={{
                    color: 'text.primary',
                    width: 40,
                    height: 40,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    '&:hover': { color: 'primary.main', borderColor: 'primary.main', bgcolor: 'transparent' },
                }}
            >
                {mode === 'dark' ? (
                    <LightModeOutlinedIcon sx={{ fontSize: 20 }} />
                ) : (
                    <DarkModeOutlinedIcon sx={{ fontSize: 20 }} />
                )}
            </IconButton>
        </Tooltip>
    );
}
