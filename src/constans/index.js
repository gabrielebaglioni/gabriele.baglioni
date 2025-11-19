import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Framer Motion",
        type: "Animation",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineer Intern → Junior Developer",
        company_name: "Digital Engineering Consultancy",
        icon: meta,
        iconBg: "#a2d2ff",
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
        company_name: "Ferragamo",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "2022 - 2023",
        points: [
            "Served as the technical reference for end-to-end UI architecture in a small, focused team, leading all frontend development using Angular.",
            "Designed and implemented complete database schema, data models, and seamless backend integration for the application.",
            "Managed complex authentication flows with Azure AD and implemented comprehensive authorization mechanisms.",
            "Collaborated closely with business stakeholders to translate business requirements into technical solutions, balancing UX, performance, and technical constraints.",
        ],
    },
    {
        title: "Frontend Architect / Technical Lead",
        company_name: "Leonardo Telespazio - IRIDE",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "2023 - 2025",
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
        icon: starbucks,
        iconBg: "#ffd6a5",
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

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];