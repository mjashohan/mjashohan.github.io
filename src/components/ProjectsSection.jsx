import { Box, Divider } from '@mui/material';
import SectionHeader from './SectionHeader.jsx';
import GithubCarousel from './GithubCarousel.jsx';
import ThesisProjects from './ThesisProjects.jsx';

export default function ProjectsSection() {
  return (
    <Box id="projects" component="section" sx={{ py: { xs: 6, md: 10 }, scrollMarginTop: 80 }}>
      <SectionHeader
        tag="03. What I've built"
        title="Projects"
        subtitle="Open-source repos pulled live from GitHub, plus deeper writeups of thesis and research work."
      />

      <GithubCarousel />

      <Divider sx={{ my: { xs: 5, md: 7 }, borderColor: 'rgba(100, 255, 218, 0.1)' }} />

      <ThesisProjects />
    </Box>
  );
}
