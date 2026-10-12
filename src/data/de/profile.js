import { personal as personalEn, languages as languagesEn } from '../personal.js';
import { skillCategories as skillCategoriesEn } from '../skills.js';

// German overrides. Contact details, links, etc. are inherited from the English file.
export const personal = {
  ...personalEn,
  title: 'Softwareentwickler',
  tagline: ['Ich baue Webanwendungen und Software.', 'Java · Liferay · Spring Boot · React'],
  location: 'Essen, Deutschland',
  about: `Hallo, ich bin Md Jahan Ali Shohan, ein in Deutschland lebender Softwareentwickler mit der Leidenschaft, komplexen Code in greifbare, reale Innovationen zu verwandeln. Mein technisches Fundament sind Java, Liferay, Spring Boot und React, ergänzt durch praktische Erfahrung mit IoT-Systemen und Unterwasserrobotik. Derzeit erweitere ich mein Wissen in aktuellen Projekten rund um Homelab-Betrieb und DevOps-Praktiken. Ich bringe Präzision und hohe Ansprüche in alles ein, was ich tue – von der Softwarearchitektur bis zur Kochkunst – und blühe bei anspruchsvollen technischen Herausforderungen auf.`,
  lastUpdated: {
    ...personalEn.lastUpdated,
    // dd.mm.yyyy is the German convention
    date: personalEn.lastUpdated.date.replaceAll('/', '.'),
  },
};

const languageNames = { English: 'Englisch', German: 'Deutsch', Bengali: 'Bengalisch' };
export const languages = languagesEn.map((l) => ({
  ...l,
  name: languageNames[l.name] ?? l.name,
  level: l.level === 'Native' ? 'Muttersprache' : l.level,
}));

const categoryTitles = {
  Languages: 'Sprachen',
  'Markup & Styling': 'Auszeichnung & Gestaltung',
  Frameworks: 'Frameworks',
  Databases: 'Datenbanken',
  'Version Control': 'Versionsverwaltung',
  APIs: 'APIs',
  Methodologies: 'Methoden',
  DevOps: 'DevOps',
  'Systems & Infrastructure': 'Systeme & Infrastruktur',
  Hardware: 'Hardware',
};
const skillNames = {
  'Linux Servers': 'Linux-Server',
  'Server Management': 'Serveradministration',
  'Home Lab': 'Homelab',
};
export const skillCategories = skillCategoriesEn.map((c) => ({
  ...c,
  title: categoryTitles[c.title] ?? c.title,
  skills: c.skills.map((s) => ({ ...s, name: skillNames[s.name] ?? s.name })),
}));
