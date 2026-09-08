export type WorkStatus = 'study' | 'in-progress' | 'released';

export type ComparisonImage = {
  src: string;
  srcWebp: string;
  width: number;
  height: number;
  alt: string;
};

export type ShowcaseItem = {
  id: string;
  number: string;
  label: string;
  /** One concise supporting sentence */
  description: string;
  before: ComparisonImage;
  after: ComparisonImage;
  aspectRatio: string;
  objectPosition?: string;
  /** Larger presentation for the lead capability proof */
  featured?: boolean;
  /** Initial % of stage showing restored image. Default 55. */
  afterPercent?: number;
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
  /**
   * Ordered showcase proving breadth:
   * GAME → CAST → DETAIL → CINEMATIC → WORLD
   */
  showcase: ShowcaseItem[];
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
    showcase: [
      {
        id: 'ui-proposal',
        number: '01',
        label: 'Full Game Interface',
        description:
          'Characters, interface artwork, symbols, typography and UI restored as one coherent game screen.',
        featured: true,
        afterPercent: 55,
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
      {
        id: 'cover',
        number: '02',
        label: 'Character System',
        description:
          'Seven distinct faction leaders restored individually while preserving the visual identity of the original cast.',
        afterPercent: 55,
        before: {
          src: '/images/smac/cover-original.png',
          srcWebp: '/images/smac/cover-original.webp',
          width: 568,
          height: 800,
          alt: 'Original Sid Meier’s Alpha Centauri key art with seven faction leaders, 1999',
        },
        after: {
          src: '/images/smac/cover-enhanced.jpg',
          srcWebp: '/images/smac/cover-enhanced.webp',
          width: 727,
          height: 1024,
          alt: 'Visually restored Alpha Centauri key art with seven faction leaders at modern resolution',
        },
        aspectRatio: '727 / 1024',
        objectPosition: 'center top',
      },
      {
        id: 'leader-old',
        number: '03',
        label: 'Character Restoration',
        description:
          'Reconstructed from low-resolution source material while preserving identity, expression and original art direction.',
        afterPercent: 55,
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
        number: '04',
        label: 'Pre-Rendered Cinematics',
        description:
          'Low-resolution cinematic material reconstructed with improved detail, materials and spatial depth.',
        afterPercent: 55,
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
        id: 'environment',
        number: '05',
        label: 'Environments',
        description:
          'World artwork restored without replacing the original visual language with contemporary concept-art aesthetics.',
        afterPercent: 55,
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
];

export function getFeaturedWork(): WorkProject[] {
  return workProjects.filter((p) => p.featured);
}

export function getWorkBySlug(slug: string): WorkProject | undefined {
  return workProjects.find((p) => p.slug === slug);
}
