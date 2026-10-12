import { education as en } from '../education.js';

// Same order as the English list; `institution` is inherited.
const translations = [
  {
    degree: 'M.Sc. Web Engineering',
    period: 'Oktober 2018 — Heute',
    focus: [
      'Software Service Engineering',
      'Aktuelle Trends im Web Engineering',
      'Entwurf verteilter Systeme',
      'Fortgeschrittenes Datenmanagement',
    ],
  },
  {
    degree: 'B.Sc. Informatik und Ingenieurwesen',
    period: 'Januar 2014 — Dezember 2017',
    focus: [
      'Programmierung für das Internet',
      'Objektorientierte Programmierung',
      'Algorithmen und Datenstrukturen',
      'Softwaretechnik',
    ],
  },
];

export const education = en.map((e, i) => ({ ...e, ...translations[i] }));
