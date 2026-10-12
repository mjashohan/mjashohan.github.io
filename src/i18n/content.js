import { personal, languages } from '../data/personal.js';
import { skillCategories } from '../data/skills.js';
import { experience } from '../data/experience.js';
import { education } from '../data/education.js';
import { activities } from '../data/activities.js';
import { thesisProjects } from '../data/thesisProjects.js';

import {
  personal as personalDe,
  languages as languagesDe,
  skillCategories as skillCategoriesDe,
} from '../data/de/profile.js';
import { experience as experienceDe } from '../data/de/experience.js';
import { education as educationDe } from '../data/de/education.js';
import { activities as activitiesDe } from '../data/de/activities.js';
import { thesisProjects as thesisProjectsDe } from '../data/de/thesisProjects.js';

// Module-level constants so references stay stable between renders
// (the Hero typewriter depends on `personal.tagline` identity).
export const content = {
  en: { personal, languages, skillCategories, experience, education, activities, thesisProjects },
  de: {
    personal: personalDe,
    languages: languagesDe,
    skillCategories: skillCategoriesDe,
    experience: experienceDe,
    education: educationDe,
    activities: activitiesDe,
    thesisProjects: thesisProjectsDe,
  },
};
