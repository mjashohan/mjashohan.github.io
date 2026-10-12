import { experience as en } from '../experience.js';

// Same order as the English list; `company` and `tech` are inherited.
const translations = [
  {
    role: 'Softwareentwickler (Java)',
    period: 'August 2023 — Heute',
    location: 'Münster, Deutschland',
    bullets: [
      'Entwicklung und Wartung von APIs für das Liferay-CMS-Framework.',
      'Leitung von Versions-Upgrades älterer Codebasen auf aktuelle Liferay-Standards (7.0 → 7.4.x).',
      'Full-Stack-Webentwicklung mit Portlets, OSGi-Modulen und Themes.',
      'Implementierung und Optimierung der Suchmaschine für Portalanwendungen.',
    ],
  },
  {
    role: 'Werkstudent',
    period: 'Januar 2022 — Februar 2023',
    location: 'Deutschland',
    bullets: [
      'Full-Stack-Entwicklung an Liferay-basierten Webanwendungen.',
      'Praktische Java-EE-Arbeit in einem professionellen Beratungsumfeld.',
    ],
  },
  {
    role: 'Studentische Hilfskraft',
    period: 'Mai 2021 — September 2021',
    location: 'Chemnitz, Deutschland',
    bullets: [
      'Verbesserung der Barrierefreiheit der Website mit HTML5.',
      'Die Seite für Nutzerinnen und Nutzer mit unterschiedlichen Fähigkeiten zugänglicher gemacht.',
      'Erweiterung der Backend-Funktionalität mit PHP.',
    ],
  },
];

export const experience = en.map((job, i) => ({ ...job, ...translations[i] }));
