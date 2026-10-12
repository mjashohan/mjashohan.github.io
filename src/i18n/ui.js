// UI strings (everything that is not portfolio data). Keep both languages in sync.
export const ui = {
  en: {
    meta: {
      title: 'Shohan · Software Engineer',
      description:
        'Md Jahan Ali Shohan – Software Engineer. Java, Liferay, Spring Boot, React. Based in Essen, Germany.',
    },
    nav: {
      sections: {
        home: 'Home',
        experience: 'Experience',
        education: 'Education',
        projects: 'Projects',
        activities: 'Activities',
      },
      german: 'German',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      language: 'Language',
    },
    hero: {
      greeting: "Hi, I'm",
      seeWork: 'See my work',
      getInTouch: 'Get in touch',
    },
    experience: {
      tag: "01. Where I've worked",
      title: 'Experience',
      subtitle: "A few of the places I've contributed code, broken builds, and shipped fixes.",
    },
    education: {
      tag: '02. Where I have studied',
      title: 'Education',
      focusAreas: 'Focus areas',
    },
    projects: {
      tag: "03. What I've built",
      title: 'Projects',
      subtitle:
        'Repos pulled from GitHub (private ones are listed without a source link), plus deeper writeups of thesis and research work.',
      thesisHeading: 'Thesis & Research Projects',
      functions: '// Functions',
    },
    activities: {
      tag: '04. Off the clock',
      title: 'Extra-Curricular',
      subtitle: "A few things I've done outside of work and studies.",
    },
    github: {
      heading: 'GitHub Repositories',
      repo: 'repo',
      repos: 'repos',
      synced: 'synced',
      never: 'never',
      justNow: 'just now',
      minAgo: (n) => `${n} min ago`,
      hAgo: (n) => `${n} h ago`,
      sync: 'Sync',
      syncTooltip: 'Pull latest from GitHub',
      syncAria: 'Sync repositories from GitHub',
      scrollLeft: 'Scroll left',
      scrollRight: 'Scroll right',
      scrollLeftAria: 'Scroll repositories left',
      scrollRightAria: 'Scroll repositories right',
      noDescription: 'No description provided.',
      privateTooltip: 'Private repository — source not public',
      privateAria: 'Private repository',
      private: 'Private',
      view: 'View',
      errorPrefix: "Couldn't reach GitHub:",
      errorLink: 'View repositories on GitHub →',
      dateLocale: 'en-GB',
    },
    sidebar: {
      githubAria: 'GitHub profile',
      linkedinAria: 'LinkedIn profile',
    },
    footer: {
      builtBy: 'designed & built by',
      updatedOn: 'Updated on:',
      email: 'Email',
    },
  },

  de: {
    meta: {
      title: 'Shohan · Softwareentwickler',
      description:
        'Md Jahan Ali Shohan – Softwareentwickler. Java, Liferay, Spring Boot, React. Wohnhaft in Essen, Deutschland.',
    },
    nav: {
      sections: {
        home: 'Start',
        experience: 'Erfahrung',
        education: 'Ausbildung',
        projects: 'Projekte',
        activities: 'Aktivitäten',
      },
      german: 'Deutsch lernen',
      openMenu: 'Navigationsmenü öffnen',
      closeMenu: 'Navigationsmenü schließen',
      language: 'Sprache',
    },
    hero: {
      greeting: 'Hallo, ich bin',
      seeWork: 'Meine Arbeiten ansehen',
      getInTouch: 'Kontakt aufnehmen',
    },
    experience: {
      tag: '01. Wo ich gearbeitet habe',
      title: 'Berufserfahrung',
      subtitle:
        'Ein paar der Orte, an denen ich Code beigesteuert, Builds zerschossen und Fixes ausgeliefert habe.',
    },
    education: {
      tag: '02. Wo ich studiert habe',
      title: 'Ausbildung',
      focusAreas: 'Schwerpunkte',
    },
    projects: {
      tag: '03. Was ich gebaut habe',
      title: 'Projekte',
      subtitle:
        'Repositories von GitHub (private werden ohne Quelllink aufgeführt) sowie ausführlichere Beschreibungen von Abschluss- und Forschungsarbeiten.',
      thesisHeading: 'Abschluss- & Forschungsprojekte',
      functions: '// Funktionen',
    },
    activities: {
      tag: '04. Nach Feierabend',
      title: 'Außercurriculare Aktivitäten',
      subtitle: 'Ein paar Dinge, die ich neben Arbeit und Studium gemacht habe.',
    },
    github: {
      heading: 'GitHub-Repositories',
      repo: 'Repo',
      repos: 'Repos',
      synced: 'synchronisiert',
      never: 'nie',
      justNow: 'gerade eben',
      minAgo: (n) => `vor ${n} Min.`,
      hAgo: (n) => `vor ${n} Std.`,
      sync: 'Sync',
      syncTooltip: 'Neueste Daten von GitHub abrufen',
      syncAria: 'Repositories von GitHub synchronisieren',
      scrollLeft: 'Nach links scrollen',
      scrollRight: 'Nach rechts scrollen',
      scrollLeftAria: 'Repositories nach links scrollen',
      scrollRightAria: 'Repositories nach rechts scrollen',
      noDescription: 'Keine Beschreibung vorhanden.',
      privateTooltip: 'Privates Repository — Quellcode nicht öffentlich',
      privateAria: 'Privates Repository',
      private: 'Privat',
      view: 'Ansehen',
      errorPrefix: 'GitHub nicht erreichbar:',
      errorLink: 'Repositories auf GitHub ansehen →',
      dateLocale: 'de-DE',
    },
    sidebar: {
      githubAria: 'GitHub-Profil',
      linkedinAria: 'LinkedIn-Profil',
    },
    footer: {
      builtBy: 'entworfen & gebaut von',
      updatedOn: 'Aktualisiert am:',
      email: 'E-Mail',
    },
  },
};
