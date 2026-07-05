export interface Project {
  title: string;
  description: string;
  logo: string;
  link?: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Remote Intensive Care Application',
    description:
      'Flask web app with online appointment booking, medicine delivery, and real-time heart rate sensor monitoring.',
    logo: '/logos/js_icon.svg',
    link: 'https://github.com/TeamRocketBalleBalle/RICA-Remastered',
    slug: 'rica',
  },
  {
    title: 'Riktionary',
    description:
      'Java multiplayer image guessing game — first to 5 points wins.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/TeamRocketBalleBalle/Ricktionary',
    slug: 'riktionary',
  },
  {
    title: 'Twitch Watcher Discord Bot',
    description:
      'Python Discord bot that monitors RLCS streams and claims loot drops via Docker containers.',
    logo: '/logos/json_icon.svg',
    link: 'https://github.com/Ya-s-h/twitch-watcher-discord-bot',
    slug: 'twitch-watcher',
  },
  {
    title: 'Inventory Management System',
    description:
      'MERN stack multi-user inventory system with hierarchical role-based auth, CRUD logging, and low-stock email alerts.',
    logo: '/logos/markdown_icon.svg',
    slug: 'inventory-management',
  },
];
