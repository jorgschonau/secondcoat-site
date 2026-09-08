export type WorkStatus = 'study' | 'in-progress' | 'released';

export type ComparisonImage = {
  src: string;
  srcWebp: string;
  width: number;
  height: number;
  alt: string;
};

export type ComparisonPair = {
  id: string;
  number: string;
  /** Optional item label; group title usually carries the category */
  label?: string;
  lines: string[];
  before: ComparisonImage;
  after: ComparisonImage;
  aspectRatio: string;
  objectPosition?: string;
};

export type ComparisonGroup = {
  id: string;
  number: string;
  title: string;
  items: ComparisonPair[];
};

export type WorkProject = {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  years: string;
  statusLabel: string;
  status: WorkStatus;
  featured: boolean;
  summary: string[];
  question: string[];
  disclaimer: string;
  comparisonGroups: ComparisonGroup[];
};

export const workProjects: WorkProject[] = [
  {
    slug: 'alpha-centauri',
    number: '001',
    title: "Sid Meier's\nAlpha Centauri",
    years: '1999 → NOW',
    statusLabel: 'Unofficial Visual Study',
    status: 'study',
    featured: true,
    summary: [
      "Some games need a remake.",
      "Others don't.",
      'Alpha Centauri already has an extraordinary visual identity. The problem isn’t the direction. It’s that much of that direction survives today through tiny portraits, compressed video and artwork created for late-1990s displays.',
    ],
    question: ['What if we kept the game —', 'and removed the limitations?'],
    disclaimer:
      'An independent visual restoration study created to demonstrate the Second Coat process. Sid Meier’s Alpha Centauri and related trademarks and artwork belong to their respective rights holders. This project is not affiliated with or endorsed by Electronic Arts or Firaxis Games.',
    comparisonGroups: [
      {
        id: 'faction-leaders',
        number: '01',
        title: 'Faction Leaders',
        items: [
          {
            id: 'leader-red',
            number: '01',
            lines: ['Identity preserved.', 'Detail recovered.'],
            before: {
              src: '/images/smac/leader-red-original.png',
              srcWebp: '/images/smac/leader-red-original.webp',
              width: 163,
              height: 159,
              alt: 'Original low-resolution faction leader portrait from Sid Meier’s Alpha Centauri, 1999',
            },
            after: {
              src: '/images/smac/leader-red-enhanced.png',
              srcWebp: '/images/smac/leader-red-enhanced.webp',
              width: 1254,
              height: 1254,
              alt: 'Visually restored faction leader portrait, preserving original identity at modern resolution',
            },
            aspectRatio: '1 / 1',
            objectPosition: 'center center',
          },
          {
            id: 'leader-old',
            number: '02',
            lines: ['Character,', 'not replacement.'],
            before: {
              src: '/images/smac/leader-old-original.png',
              srcWebp: '/images/smac/leader-old-original.webp',
              width: 291,
              height: 350,
              alt: 'Original low-resolution older faction leader portrait from Sid Meier’s Alpha Centauri, 1999',
            },
            after: {
              src: '/images/smac/leader-old-enhanced.png',
              srcWebp: '/images/smac/leader-old-enhanced.webp',
              width: 1144,
              height: 1375,
              alt: 'Visually restored older faction leader portrait, preserving original character at modern resolution',
            },
            aspectRatio: '291 / 350',
            objectPosition: 'center top',
          },
          {
            id: 'leader-dark',
            number: '03',
            lines: ['Same presence.', 'Recovered clarity.'],
            before: {
              src: '/images/smac/leader-dark-original.png',
              srcWebp: '/images/smac/leader-dark-original.webp',
              width: 149,
              height: 178,
              alt: 'Original low-resolution faction leader portrait from Sid Meier’s Alpha Centauri, 1999',
            },
            after: {
              src: '/images/smac/leader-dark-enhanced.jpg',
              srcWebp: '/images/smac/leader-dark-enhanced.webp',
              width: 857,
              height: 1024,
              alt: 'Visually restored faction leader portrait, preserving original character at modern resolution',
            },
            aspectRatio: '857 / 1024',
            objectPosition: 'center top',
          },
          {
            id: 'leader-braid',
            number: '04',
            lines: ['Identity preserved.', 'Presence recovered.'],
            before: {
              src: '/images/smac/leader-braid-original.png',
              srcWebp: '/images/smac/leader-braid-original.webp',
              width: 149,
              height: 178,
              alt: 'Original low-resolution faction leader portrait from Sid Meier’s Alpha Centauri, 1999',
            },
            after: {
              src: '/images/smac/leader-braid-enhanced.jpg',
              srcWebp: '/images/smac/leader-braid-enhanced.webp',
              width: 857,
              height: 1024,
              alt: 'Visually restored faction leader portrait preserving original character at modern resolution',
            },
            aspectRatio: '857 / 1024',
            objectPosition: 'center top',
          },
          {
            id: 'leader-scan',
            number: '05',
            lines: ['Atmosphere intact.', 'Resolution recovered.'],
            before: {
              src: '/images/smac/leader-scan-original.png',
              srcWebp: '/images/smac/leader-scan-original.webp',
              width: 200,
              height: 120,
              alt: 'Original low-resolution faction leader portrait with scanline presentation, 1999',
            },
            after: {
              src: '/images/smac/leader-scan-enhanced.jpg',
              srcWebp: '/images/smac/leader-scan-enhanced.webp',
              width: 1024,
              height: 614,
              alt: 'Visually restored faction leader portrait preserving original lighting and atmosphere at modern resolution',
            },
            aspectRatio: '1024 / 614',
            objectPosition: 'center center',
          },
        ],
      },
      {
        id: 'environments',
        number: '02',
        title: 'Environments',
        items: [
          {
            id: 'environment',
            number: '01',
            lines: ['Keep the world.', 'Lose the soft focus.'],
            before: {
              src: '/images/smac/environment-original.png',
              srcWebp: '/images/smac/environment-original.webp',
              width: 1024,
              height: 546,
              alt: 'Original low-resolution environment artwork from Sid Meier’s Alpha Centauri, 1999',
            },
            after: {
              src: '/images/smac/environment-enhanced.jpg',
              srcWebp: '/images/smac/environment-enhanced.webp',
              width: 1024,
              height: 546,
              alt: 'Visually restored environment artwork preserving original art direction at modern resolution',
            },
            aspectRatio: '1024 / 546',
            objectPosition: 'center center',
          },
        ],
      },
      {
        id: 'cinematics',
        number: '03',
        title: 'Cinematics',
        items: [
          {
            id: 'cinematic',
            number: '01',
            lines: ['The original direction,', 'beyond 1999 resolution.'],
            before: {
              src: '/images/smac/cinematic-original.png',
              srcWebp: '/images/smac/cinematic-original.webp',
              width: 867,
              height: 488,
              alt: 'Original low-resolution pre-rendered cinematic frame with cybernetic figure, 1999',
            },
            after: {
              src: '/images/smac/cinematic-enhanced.png',
              srcWebp: '/images/smac/cinematic-enhanced.webp',
              width: 1672,
              height: 941,
              alt: 'Visually restored cinematic frame preserving original art direction at modern resolution',
            },
            aspectRatio: '16 / 9',
            objectPosition: 'center center',
          },
          {
            id: 'unit-hover',
            number: '02',
            lines: ['Same silhouette.', 'Better canvas.'],
            before: {
              src: '/images/smac/unit-hover-original.jpg',
              srcWebp: '/images/smac/unit-hover-original.webp',
              width: 1024,
              height: 576,
              alt: 'Original low-resolution hover unit cinematic frame from Sid Meier’s Alpha Centauri, 1999',
            },
            after: {
              src: '/images/smac/unit-hover-enhanced.jpg',
              srcWebp: '/images/smac/unit-hover-enhanced.webp',
              width: 1024,
              height: 576,
              alt: 'Visually restored hover unit cinematic frame preserving original art direction at modern resolution',
            },
            aspectRatio: '16 / 9',
            objectPosition: 'center center',
          },
          {
            id: 'ship-orbit',
            number: '03',
            lines: ['The pixels were temporary.', 'The art direction wasn’t.'],
            before: {
              src: '/images/smac/ship-orbit-original.png',
              srcWebp: '/images/smac/ship-orbit-original.webp',
              width: 1000,
              height: 494,
              alt: 'Original low-resolution orbital spacecraft cinematic frame from Sid Meier’s Alpha Centauri, 1999',
            },
            after: {
              src: '/images/smac/ship-orbit-enhanced.jpg',
              srcWebp: '/images/smac/ship-orbit-enhanced.webp',
              width: 1024,
              height: 507,
              alt: 'Visually restored orbital spacecraft cinematic frame preserving original art direction at modern resolution',
            },
            aspectRatio: '1024 / 507',
            objectPosition: 'center center',
          },
        ],
      },
      {
        id: 'key-art',
        number: '04',
        title: 'Key Art',
        items: [
          {
            id: 'cover',
            number: '01',
            lines: ['Box art,', 'brought forward.'],
            before: {
              src: '/images/smac/cover-original.png',
              srcWebp: '/images/smac/cover-original.webp',
              width: 568,
              height: 800,
              alt: 'Original Sid Meier’s Alpha Centauri key art with faction leader collage, 1999',
            },
            after: {
              src: '/images/smac/cover-enhanced.jpg',
              srcWebp: '/images/smac/cover-enhanced.webp',
              width: 727,
              height: 1024,
              alt: 'Visually restored Alpha Centauri key art preserving original composition at modern resolution',
            },
            aspectRatio: '727 / 1024',
            objectPosition: 'center top',
          },
        ],
      },
      {
        id: 'interface',
        number: '05',
        title: 'Interface',
        items: [
          {
            id: 'ui-proposal',
            number: '01',
            lines: ['Same council.', 'Clearer canvas.'],
            before: {
              src: '/images/smac/ui-proposal-original.png',
              srcWebp: '/images/smac/ui-proposal-original.webp',
              width: 960,
              height: 664,
              alt: 'Original Planetary Council proposal interface from Sid Meier’s Alpha Centauri, 1999',
            },
            after: {
              src: '/images/smac/ui-proposal-enhanced.jpg',
              srcWebp: '/images/smac/ui-proposal-enhanced.webp',
              width: 1024,
              height: 708,
              alt: 'Visually restored Planetary Council interface preserving original layout at modern resolution',
            },
            aspectRatio: '1024 / 708',
            objectPosition: 'center top',
          },
        ],
      },
    ],
  },
];

export function getFeaturedWork(): WorkProject[] {
  return workProjects.filter((p) => p.featured);
}

export function getWorkBySlug(slug: string): WorkProject | undefined {
  return workProjects.find((p) => p.slug === slug);
}
