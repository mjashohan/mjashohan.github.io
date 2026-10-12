import { activities as en } from '../activities.js';

const translations = {
  competitions: {
    category: 'Hochschulwettbewerbe',
    items: [
      { name: 'Pathfinder', detail: 'Einen Linienfolger-Roboter gebaut.' },
      {
        name: 'Robotik-Projektausstellung',
        detail: 'Das BikeBox-Projekt neben weiteren kleinen Robotik-Projekten präsentiert.',
      },
    ],
  },
  events: {
    category: 'Eventorganisation',
    items: [
      {
        name: 'Erster Satellitenstart — Bangladesch',
        detail: 'Bei der Organisation der Pressekonferenz zum Start geholfen.',
      },
      {
        name: 'Orientierung des Robotik-Clubs',
        detail: 'Jedes Semester die Orientierungsveranstaltung für Erstsemester organisiert.',
      },
    ],
  },
};

export const activities = en.map((a) => ({ ...a, ...translations[a.id] }));
