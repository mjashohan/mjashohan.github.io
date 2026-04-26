import { Box, Container } from '@mui/material';
import BackgroundEffect from './components/BackgroundEffect.jsx';
import Navigation from './components/Navigation.jsx';
import Sidebar from './components/Sidebar.jsx';
import Hero from './components/Hero.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ActivitiesSection from './components/ActivitiesSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    return (
        <Box sx={{ position: 'relative', minHeight: '100vh' }}>
            <BackgroundEffect />

            <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Navigation />

                <Container
                    maxWidth="xl"
                    sx={{
                        px: { xs: 1.5, sm: 2.5, md: 3, lg: 4 },
                        py: { xs: 2, sm: 3, md: 4 },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: 2.5, md: 3, lg: 4 },
                            flexDirection: { xs: 'column', lg: 'row' },
                            alignItems: 'flex-start',
                        }}
                    >
                        <Sidebar />

                        <Box component="main" sx={{ flex: 1, minWidth: 0, width: '100%' }}>
                            <Hero />
                            <ExperienceSection />
                            <EducationSection />
                            <ProjectsSection />
                            <ActivitiesSection />
                            <Footer />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}