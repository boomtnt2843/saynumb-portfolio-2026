export const profile = {
  name: 'Boom Phattarapong',
  handle: 'saynumB',
  role: 'Artist Developer',
  company: 'ODDS',
  currentSite: 'KTC (YEN ¥)',
  intro: 'Developer at ODDS. I code things and draw things — sometimes both at once.',
  avatar: '/assets/profile.jpg',
};

export interface Project {
  title: string;
  period: string;
  description: string;
  bullets: string[];
  image?: string;
  imageCaption?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Election Results Web 2023',
    period: 'May 2023',
    description:
      'Built in collaboration with ODDS × Dailynews for the 2023 Thai PM election. A fast-turnaround project — built from scratch to production in roughly one month.',
    bullets: [
      'Contributed to design & stack decisions in early planning',
      'Implemented React layouts, components, and an IFrame page',
      'Supported live issues on launch day',
    ],
    image: '/assets/project-election-2023.png',
    imageCaption: 'Election web — still live',
    link: 'https://election66.dailynews.co.th/country',
  },
  {
    title: 'SAK SIAM Site',
    period: 'Mar 2023 – Dec 2024',
    description:
      'One of my biggest growth points — working full-stack with team "Night Owl" across frontend, backend, and a touch of DevOps for Sak Siam.',
    bullets: [
      'Flutter & React — mobile and web apps for staff and customers',
      'Keycloak — SSO and internal employee login/payment systems',
      'Node.js — backend services using NestJS, Express, and Fastify',
      'ArgoCD — monitoring and deploying services',
      'Large-Scale Scrum collaboration',
    ],
    image: '/assets/project-sak-siam.png',
    imageCaption: 'source: Odds Conference 2024 EP.4 | YOLO: You Only Live Once',
    link: 'https://www.youtube.com/watch?v=JuprWZ2yfi0',
  },
  {
    title: 'TA — Web Technology, Bangkok University',
    period: 'Aug 2024 – Nov 2024',
    description:
      'Teaching assistant for the Web Technology course at Bangkok University alongside ODDS peers. Covered fundamentals to frameworks.',
    bullets: [
      'Git version control',
      'CSS & HTML',
      'React',
      'Ruby on Rails',
    ],
  },
  {
    title: 'KTC — Line Connect',
    period: 'Jan 2025 – Present',
    description:
      'Current project at KTC with team YEN (¥). Focused on the Line Message API webhook service and data pipeline infrastructure.',
    bullets: [
      'Golang / Gin — REST APIs and unit tests with Ginkgo',
      'Line Message API — webhook integration & custom message types',
      'Mage AI — data pipeline for report generation (Python)',
      'K6 load testing — performance tuning, Kubernetes resource config',
    ],
    image: '/assets/project-ktc.png',
    imageCaption: 'KTC workspace vibes',
  },
];

export interface Event {
  title: string;
  location: string;
  period: string;
  description: string;
  image?: string;
  imageCaption?: string;
}

export const events: Event[] = [
  {
    title: 'Young Webmaster Camp 19',
    location: 'Thailand',
    period: 'Jul 2023',
    description: 'First tech camp experience. I used to sell things — you can read the short story in the YWC 20 post.',
    image: '/assets/event-ywc19.png',
    imageCaption: 'Me with the yellow hair',
  },
  {
    title: 'YOW 2024',
    location: 'Melbourne, Australia',
    period: 'Dec 2024',
    description: 'My first time abroad — an eye-opening experience, both technically and culturally.',
    image: '/assets/event-yow2024.png',
  },
  {
    title: 'Creative Talks 2025',
    location: 'Bangkok, Thailand',
    period: '2025',
    description:
      'Attended sessions on content creation and finance. The highlight sessions covered trending topics for 2025. Highly recommend for 2026.',
    image: '/assets/event-creative-talks-2025.png',
    imageCaption: 'Met Uncle Tan too',
  },
];

export interface MiniProject {
  title: string;
  description: string;
  link?: string;
  image?: string;
  imageCaption?: string;
  warning?: string;
}

export const miniProjects: MiniProject[] = [
  {
    title: 'Procreate Class',
    description:
      'Opened my first ever class — Procreate Basic — co-taught with a friend. Taught digital painting on iPad to fellow ODDS members. Round 2 coming soon.',
  },
  {
    title: 'Shader Art (GLSL)',
    description:
      'Got into generative art via GLSL shaders. Built and deployed a canvas playground to explore the medium.',
    link: 'https://glsl-first.vercel.app/',
    warning: 'Warning: contains a lot of light and movement — please take care.',
  },
  {
    title: 'CSS Battle',
    description:
      'I enjoy making art. The medium doesn\'t matter much — why not CSS? Competed in CSS Battle, recreating visual targets using only CSS.',
    image: '/assets/fun-css-battle.png',
    imageCaption: 'css battle',
  },
];

export const goals = [
  'TOEIC — 650 points or higher',
  'Web profile for myself and my band "เด็กชายสายน้ำ"',
  'Learn GLSL / WebGL shaders deeply enough to teach a class',
  'Read 4 books about personal finance',
];
