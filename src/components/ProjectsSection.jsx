import { Box, Divider } from '@mui/material';
import SectionHeader from './SectionHeader.jsx';
import GithubCarousel from './GithubCarousel.jsx';
import ThesisProjects from './ThesisProjects.jsx';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function ProjectsSection() {
  const { t } = useI18n();
  return (
    <Box id="projects" component="section" sx={{ py: { xs: 5, sm: 6, md: 10 }, scrollMarginTop: 96 }}>
      <SectionHeader
        tag={t.projects.tag}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <GithubCarousel />

      <Divider sx={{ my: { xs: 5, md: 7 }, borderColor: 'rgba(var(--accent-rgb), 0.1)' }} />

      <ThesisProjects />
    </Box>
  );
}
