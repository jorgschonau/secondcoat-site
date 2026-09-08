export type WorkStatus = 'study' | 'in-progress' | 'released';

export type ComparisonPair = {
  id: string;
  number: string;
  label: string;
  lines: string[];
  before: {
    src: string;
    srcWebp: string;
    width: number;
    height: number;
    alt: string;
  };
  after: {
    src: string;
    srcWebp: string;
    width: number;
    height: number;
    alt: string;
  };
  /** CSS aspect-ratio string for the comparison viewport */
  aspectRatio: string;
  objectPosition?: string;
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
  comparisons: ComparisonPair[];
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
    comparisons: [
      {
        id: 'leader-red',
        number: '01',
        label: 'Faction Leader',
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
        label: 'Faction Leader',
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
        id: 'cinematic',
        number: '03',
        label: 'Pre-Rendered Cinematic',
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
    ],
  },
];

export function getFeaturedWork(): WorkProject[] {
  return workProjects.filter((p) => p.featured);
}

export function getWorkBySlug(slug: string): WorkProject | undefined {
  return workProjects.find((p) => p.slug === slug);
}
