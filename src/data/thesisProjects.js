export const thesisProjects = [
  {
    title: 'Autonomous Aquatic Rover for Water Quality Testing and Pisciculture',
    type: "Bachelor's Thesis",
    domain: 'IoT · Embedded Systems',
    description:
      "An autonomous floating rover that surveys lakes and ponds to support pisciculture. The rover collects environmental readings and forwards them to a backend for processing and visualization, with a modular design that lets new sensors be added without changing the data pipeline.",
    functions: [
      'Collects temperature and pH from water bodies (lakes, fish ponds).',
      'Transmits readings to a database for further processing.',
      'Renders the collected data in graphical form for analysis.',
      'Built to be extensible — new sensor types can be plugged in.',
    ],
    links: [
      { label: 'Demo Video', url: 'https://bit.ly/2kLgoZS' },
      { label: 'Published Journal', url: 'https://bit.ly/2Boglrk' },
    ],
    tags: ['IoT', 'Embedded', 'Sensors', 'Database', 'Data Viz'],
  },
  {
    title: 'CtusTech — Blockchain-Based Search Engine for Banned Products',
    type: "Master's Research Project",
    domain: 'Blockchain · Backend · Entrepreneurship',
    description:
      'Founded CtusTech, a startup built around a Java-based blockchain search engine that surfaces products banned across Europe by querying the European Rapid Alert System. The project combined backend engineering with the full lifecycle of standing up a product — from identifying a real customer problem to marketing and deployment.',
    functions: [
      'Set up the company and product positioning end-to-end.',
      'Marketing through the company website and social channels.',
      'Customer discovery and problem-statement validation.',
      'Built a blockchain-backed search engine in Java.',
      'Integrated the European Rapid Alert System to surface banned products.',
      'Backend developed entirely in Java.',
    ],
    links: [
      { label: 'GitHub Source', url: 'https://github.com/mjashohan/CtusTech' },
    ],
    tags: ['Java', 'Blockchain', 'Ethereum', 'Search', 'Startup'],
  },
];
