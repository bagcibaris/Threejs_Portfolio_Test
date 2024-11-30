import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  SSocials,
  TProject,
} from "../types";

import {
  unitydeveloper,
  webgl,
  ar_vr,
  game,

  unity,
  unreal,
  threejs,
  clo,
  ar,
  quicklook,
  arjs,
  vuforia,
  html,
  css,
  javascript,
  csharp,
  cplus,
  git,

  pingpong,
  sensai,
  tfb,
  yartu,

  cloth,
  cloth_gif,
  beymen,
  runaway,
  shoe,
  tryon,
  character,
  select,


} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Game Developer",
    icon: game,
  },
  {
    title: "Unity Developer",
    icon: unitydeveloper,
  },
  {
    title: "WebGL Developer",
    icon: webgl,
  },
  {
    title: "AR - VR Developer",
    icon: ar_vr,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Unreal",
    icon: unreal,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "CLO3D",
    icon: clo,
  },
  {
    name: "Augmented Reality",
    icon: ar,
  },
  {
    name: "Apple Quicklook",
    icon: quicklook,
  },
  {
    name: "AR.js",
    icon: arjs,
  },
  {
    name: "Vuforia",
    icon: vuforia,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "Git",
    icon: git,
  }
];

const experiences: TExperience[] = [
  {
    title: "Mid Game Developer",
    companyName: "PingPong University",
    icon: pingpong,
    iconBg: "#383E56",
    date: "August 2023 - August 2024",
    points: [
      "Worked as a mobile game developer in a software company.",
      "Made a multiplayer mobile game using Unity Engine with my team.",
    ],
  },
  {
    title: "Unity Developer",
    companyName: "SensAI Techs",
    icon: sensai,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Sep 2022",
    points: [
      "Website design before moving on to the Unity project.",
      "Creating virtual environments where brands can show their products.",
      "Unity WebGL development for Web projects./Web Sites for WebGL and Three.js projects.",
      "Augmented Reality projects for e-commerce sites (Unity Vuforia, WebAR...)",
      "Unreal Engine projects for HTML 5",
      "Encode/Decode/Compress for 3D file for size & securtiy (Draco, Three.js..)",
    ],
  },
  {
    title: "WebGL Game Developer",
    companyName: "True Feed Back",
    icon: tfb,
    iconBg: "#383E56",
    date: "Jun  2021 - Feb  2022",
    points: [
      "Hyper Casual game development with Unity",
      "Game development trials with Html5, Css, JS",
      "Unity WebGL development for Web game",
      "Embed Hyper casual games into mobile apps",
    ],
  },
  {
    title: "Internship",
    companyName: "YARTU",
    icon: yartu,
    iconBg: "#E6DEDD",
    date: "May 2021 - Jun 2021",
    points: [
      "Development with VUE JS.",
    ],
  },
];

const socials: SSocials[] = [
  {
    social:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    social:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    social:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
{
    name: "Unity Fashion Catwalk",
    description:
      "- Using Cloth Simulation when model walking on stage with selected outfit.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Clo3D",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: beymen,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Tryon-Clothes and Image Targets",
    description:
      "- Tryon clothes and accessories with Unity Vuforia",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "AR",
        color: "green-text-gradient",
      },
      {
        name: "Vuforia",
        color: "pink-text-gradient",
      },
    ],
    image: cloth_gif,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Augmented Reality",
    description:
      "AR Placement (Furniture/Animated Models) / web",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Web-AR",
        color: "green-text-gradient",
      },
      {
        name: "AR Quick Look",
        color: "pink-text-gradient",
      },
    ],
    image: shoe,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Mobile Game",
    description:
      "Multiplayer fighting game",
    tags: [
      {
        name: "Unity-3D",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: select,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, socials, projects };
