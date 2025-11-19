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
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
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
        title: "Software Engineer Intern → Junior Developer",
        company_name: "Digital Engineering Consultancy",
        icon: null,
        iconBg: "#383E56",
        date: "2021",
        points: [
            "Started as an intern working on real enterprise projects, not typical intern tasks, quickly growing into a junior developer role.",
            "Refactored and migrated legacy .NET applications (pre-.NET Core) to modern stack, working extensively with Entity Framework, IIS, and enterprise deployment cycles.",
            "Gained deep understanding of how monolithic applications age and survive in production, learning to maintain code without breaking existing systems.",
            "Developed foundational skills in .NET ecosystem, Angular frontend development, and Azure cloud services through continuous internal training.",
            "Built REST APIs, integrated SQL/NoSQL databases, and implemented authentication with Azure Active Directory (OAuth2 + OpenID Connect).",
            "Conducted professional performance testing with JMeter to identify bottlenecks in individual microservices and specific APIs.",
            "Developed an automation module for corporate intranet messaging system with encrypted chat functionality, database indexing, and synchronization mechanisms.",
        ],
    },
    {
        title: "Frontend Architect",
        company_name: "External Consultant - Ferragamo",
        icon: null,
        iconBg: "#E6DEDD",
        date: "2021 - 2022",
        points: [
            "Served as the technical reference for end-to-end UI architecture in a small, focused team, leading all frontend development using Angular.",
            "Designed and implemented complete database schema, data models, and seamless backend integration for the application.",
            "Managed complex authentication flows with Azure AD and implemented comprehensive authorization mechanisms.",
            "Collaborated closely with business stakeholders to translate business requirements into technical solutions, balancing UX, performance, and technical constraints.",
        ],
    },
    {
        title: "Frontend Architect / Technical Lead",
        company_name: "External Consultant - Leonardo Telespazio - IRIDE",
        icon: null,
        iconBg: "#383E56",
        date: "2022 - 2025",
        points: [
            "Led frontend architecture as sole external consultant for IRIDE project at Leonardo Telespazio, a critical satellite platform requiring high reliability and performance standards.",
            "Designed and architected scalable Angular application with modular architecture, implementing advanced patterns including RxJS reactive programming, state management, and lazy loading strategies.",
            "Architected and optimized complex data pipelines between frontend, backend microservices, and external satellite data APIs, ensuring real-time data synchronization and error handling.",
            "Implemented microservices-based architecture with Docker containerization and Kubernetes orchestration, managing deployments across multi-stage environments (dev, test, staging, production).",
            "Established comprehensive CI/CD pipelines using Azure DevOps and GitLab CI, implementing automated testing, code quality checks, and deployment strategies with rollback capabilities.",
            "Integrated with high-complexity RESTful APIs and WebSocket connections, implementing advanced caching strategies, request optimization, and handling of large-scale satellite telemetry data.",
            "Collaborated with cross-functional teams including backend engineers, DevOps specialists, and satellite systems experts to ensure seamless integration and system reliability.",
        ],
    },
    {
        title: "Software Engineering Student & Independent Developer",
        company_name: "European University & Personal Projects",
        icon: null, // Usa solo colore blu, nessuna icona
        iconBg: "#3B82F6", // Blu Tailwind
        date: "2025 - Present",
        points: [
            "Pursuing academic path in software engineering at a European university to provide solid theoretical foundation to daily field work.",
            "Building Crypt-payment: a Web3 dApp for decentralized ETH payments with Solidity smart contracts, MetaMask integration, and ethers.js.",
            "Developing HouseBlock: a microservices ecosystem combining AI and automation to transform blockchain information chaos into structured content.",
            "Created an interactive 3D portfolio (React SPA) with Three.js, featuring immersive 3D scenes and animations to showcase work in a non-traditional way.",
            "Combining academic theory with hands-on practice, exploring distributed architectures, Web3, and AI-driven automation systems.",
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
