import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";
import { nextjs, express } from "../assets/icons";

export const navLinks = [
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

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React",
        icon: reactjs,
    },
    {
        name: "Next.js",
        icon: nextjs,
    },
    {
        name: "Node.js",
        icon: nodejs,
    },
    {
        name: "Express",
        icon: express,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three.js",
        icon: threejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Digital Engineering Consultancy",
        icon: meta,
        iconBg: "#383E56",
        date: "2022 - Present",
        points: [
            "Started as intern and grew to technical lead on critical enterprise projects.",
            "Refactored and migrated legacy .NET applications (pre-.NET Core) to modern stack, working with Entity Framework, IIS, and enterprise deployment cycles.",
            "Developed full-stack solutions using .NET, Angular, and Azure (App Services, Functions, Azure AD).",
            "Built REST APIs, integrated SQL/NoSQL databases, and implemented authentication with Azure Active Directory (OAuth2 + OpenID Connect).",
        ],
    },
    {
        title: "Frontend Architect",
        company_name: "Ferragamo",
        icon: shopify,
        iconBg: "#E6DEDD",
        date: "2023",
        points: [
            "Led UI architecture and development for end-to-end frontend solution using Angular.",
            "Designed and implemented database schema, data models, and backend integration.",
            "Managed authentication flows with Azure AD and authorization mechanisms.",
            "Collaborated closely with business stakeholders to translate requirements into technical solutions.",
        ],
    },
    {
        title: "Frontend Lead",
        company_name: "Leonardo Telespazio - IRIDE",
        icon: tesla,
        iconBg: "#383E56",
        date: "2024 - Present",
        points: [
            "Sole external consultant responsible for frontend architecture of critical satellite platform.",
            "Designed Angular application architecture and integrated with high-complexity APIs.",
            "Optimized data pipelines between frontend, backend, and microservices.",
            "Worked with microservices, Docker, Kubernetes, and CI/CD pipelines (Azure DevOps, GitLab CI) across multi-stage environments.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Crypt-payment",
        description:
            "Web3 dApp for decentralized ETH payments. Built with React + Vite, integrates MetaMask, Solidity smart contracts, and Giphy API. Features transaction history, keyword-based GIF generation, and full Web3 wallet integration.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "solidity",
                color: "green-text-gradient",
            },
            {
                name: "web3",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "HouseBlock",
        description:
            "Microservices ecosystem for blockchain data processing. 12 Express services in TypeScript monorepo, AI-powered content generation, Supabase/PostgreSQL with pgvector, Redis caching, n8n orchestration, and Next.js landing with Three.js.",
        tags: [
            {
                name: "microservices",
                color: "blue-text-gradient",
            },
            {
                name: "ai",
                color: "green-text-gradient",
            },
            {
                name: "blockchain",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "3D Portfolio",
        description:
            "Interactive 3D portfolio website built with React, React Three Fiber, and Three.js. Features interactive island scene, animated 3D models, responsive design, and EmailJS integration. Optimized for performance and mobile devices.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "vite",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "TuttoRifiutoRifiutoTutto",
        description:
            "Angular 18 SPA for multimedia artistic catalog. Modular architecture (Core/Features/Shared), standalone components, Signals, Vercel Blob Storage integration, IndexedDB caching, and fully responsive Tailwind UI.",
        tags: [
            {
                name: "angular",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "vercel",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
