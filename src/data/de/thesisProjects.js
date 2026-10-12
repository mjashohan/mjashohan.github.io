import { thesisProjects as en } from '../thesisProjects.js';

// Same order as the English list; `domain`, link URLs and `tags` are inherited.
const translations = [
  {
    title: 'Autonomer Wasserroboter zur Wasserqualitätsmessung und Fischzucht',
    type: 'Bachelorarbeit',
    description:
      'Ein autonom schwimmender Roboter, der Seen und Teiche erkundet, um die Fischzucht zu unterstützen. Der Roboter erfasst Umweltmesswerte und leitet sie zur Verarbeitung und Visualisierung an ein Backend weiter. Dank modularem Aufbau lassen sich neue Sensoren hinzufügen, ohne die Datenpipeline zu ändern.',
    functions: [
      'Erfasst Temperatur und pH-Wert von Gewässern (Seen, Fischteiche).',
      'Überträgt die Messwerte zur weiteren Verarbeitung in eine Datenbank.',
      'Stellt die erfassten Daten für die Analyse grafisch dar.',
      'Erweiterbar konzipiert — neue Sensortypen lassen sich einfach anbinden.',
    ],
    linkLabels: ['Demo-Video', 'Veröffentlichter Journal-Artikel'],
  },
  {
    title: 'CtusTech — Blockchain-basierte Suchmaschine für verbotene Produkte',
    type: 'Masterarbeit (Forschungsprojekt)',
    description:
      'Gründung von CtusTech, einem Startup rund um eine Java-basierte Blockchain-Suchmaschine, die in Europa verbotene Produkte über das europäische Schnellwarnsystem (Rapid Alert System) auffindbar macht. Das Projekt verband Backend-Entwicklung mit dem gesamten Lebenszyklus eines Produktaufbaus — von der Identifikation eines echten Kundenproblems bis zu Marketing und Deployment.',
    functions: [
      'Unternehmen und Produktpositionierung von Anfang bis Ende aufgebaut.',
      'Marketing über die Unternehmenswebsite und Social-Media-Kanäle.',
      'Kundenentdeckung und Validierung der Problemstellung.',
      'Eine Blockchain-gestützte Suchmaschine in Java entwickelt.',
      'Das europäische Schnellwarnsystem eingebunden, um verbotene Produkte anzuzeigen.',
      'Backend vollständig in Java entwickelt.',
    ],
    linkLabels: ['GitHub-Quellcode'],
  },
];

export const thesisProjects = en.map((p, i) => {
  const { linkLabels, ...rest } = translations[i];
  return {
    ...p,
    ...rest,
    links: p.links.map((l, j) => ({ ...l, label: linkLabels[j] ?? l.label })),
  };
});
