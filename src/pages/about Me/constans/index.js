export const myProjects = [
    {
        id: 1,
        title: "Crypt-payment",
        description:
            "Web3 dApp for decentralized ETH payments. Connect MetaMask, send transactions on Goerli testnet, register transactions on Solidity smart contract, and generate GIFs via Giphy API based on keywords.",
        subDescription: [
            "Built React + Vite frontend with Tailwind CSS, implementing glassmorphism and responsive layout.",
            "Integrated ethers.js for blockchain interactions, MetaMask wallet connection, and Alchemy RPC provider.",
            "Developed Solidity smart contract with Hardhat for transaction recording and deployed to Goerli testnet.",
            "Implemented transaction history viewer, error handling for revert cases, and keyword-based GIF generation.",
        ],
        href: "",
        logo: "",
        image: "/assets/projects/crypt-payment.jpg",
        tags: [
            {
                id: 1,
                name: "React",
                path: "/assets/tech-icons/react.svg",
            },
            {
                id: 2,
                name: "Solidity",
                path: "/assets/tech-icons/solidity.svg",
            },
            {
                id: 3,
                name: "Web3",
                path: "/assets/tech-icons/web3.svg",
            },
            {
                id: 4,
                name: "TailwindCSS",
                path: "/assets/tech-icons/tailwindcss.svg",
            },
        ],
    },
    {
        id: 2,
        title: "HouseBlock",
        description:
            "Microservices ecosystem that transforms blockchain information chaos into structured content. Three-layer architecture: Input (scraping, on-chain monitoring), AI (trend analysis, opportunity identification), Content & Publishing (automatic generation and distribution).",
        subDescription: [
            "Designed TypeScript monorepo with pnpm workspaces, 12 Express microservices, each containerized in Docker.",
            "Implemented Supabase/PostgreSQL with pgvector extension for semantic search and embeddings storage.",
            "Integrated Redis for shared caching, n8n as event-driven orchestrator for workflows and automations.",
            "Built Next.js 14 landing page with Three.js 3D scenes and complex animations, deployed via Docker pipelines.",
        ],
        href: "",
        logo: "",
        image: "/assets/projects/houseBlock.jpg",
        tags: [
            {
                id: 1,
                name: "TypeScript",
                path: "/assets/tech-icons/typescript.svg",
            },
            {
                id: 2,
                name: "Microservices",
                path: "/assets/tech-icons/microservices.svg",
            },
            {
                id: 3,
                name: "Docker",
                path: "/assets/tech-icons/docker.svg",
            },
            {
                id: 4,
                name: "Next.js",
                path: "/assets/tech-icons/nextjs.svg",
            },
        ],
    },
    {
        id: 3,
        title: "TuttoRifiutoRifiutoTutto",
        description:
            "Angular 18 SPA for complex multimedia artistic catalog. Handles images, videos, audio, and PDFs with unified viewer, responsive Tailwind UI, and Vercel Blob Storage integration.",
        subDescription: [
            "Architected modular Angular 18 application with Core/Features/Shared structure, using standalone components and Signals for state management.",
            "Implemented multimedia catalog component with uniform handling of heterogeneous media types and responsive viewer.",
            "Integrated Vercel Blob Storage for content hosting, IndexedDB via idb for local caching, and Vercel Analytics for tracking.",
            "Designed scalable base architecture ready for advanced features like filters, searches, and new content types.",
        ],
        href: "",
        logo: "",
        image: "/assets/projects/tuttorifiuto.jpg",
        tags: [
            {
                id: 1,
                name: "Angular",
                path: "/assets/tech-icons/angular.svg",
            },
            {
                id: 2,
                name: "TypeScript",
                path: "/assets/tech-icons/typescript.svg",
            },
            {
                id: 3,
                name: "Vercel",
                path: "/assets/tech-icons/vercel.svg",
            },
            {
                id: 4,
                name: "TailwindCSS",
                path: "/assets/tech-icons/tailwindcss.svg",
            },
        ],
    },
    {
        id: 4,
        title: "3D Portfolio Website",
        description:
            "Interactive 3D portfolio showcasing my work through immersive web experience. Features interactive island scene with mouse/touch rotation, animated 3D models, responsive design, and animated contact form.",
        subDescription: [
            "Built React SPA with Vite, React Three Fiber, and Drei helpers for declarative 3D rendering.",
            "Implemented interactive island with stage-based info boxes, animated bird and plane models, and sky background.",
            "Optimized 3D rendering for mobile devices, implemented Suspense for async model loading, and managed performance with frame-by-frame animations using useFrame hook.",
            "Integrated EmailJS for contact form, Framer Motion for UI animations, and GSAP for complex geometry animations.",
        ],
        href: "",
        logo: "",
        image: "/assets/projects/portfolio-3d.jpg",
        tags: [
            {
                id: 1,
                name: "React",
                path: "/assets/tech-icons/react.svg",
            },
            {
                id: 2,
                name: "Three.js",
                path: "/assets/tech-icons/threejs.svg",
            },
            {
                id: 3,
                name: "Vite",
                path: "/assets/tech-icons/vite.svg",
            },
            {
                id: 4,
                name: "TailwindCSS",
                path: "/assets/tech-icons/tailwindcss.svg",
            },
        ],
    },
];

export const mySocials = [
    {
        name: "WhatsApp",
        href: "",
        icon: "/assets/socials/whatsApp.svg",
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/ali-sanati/",
        icon: "/assets/socials/linkedIn.svg",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/ali.sanatidev/reels/",
        icon: "/assets/socials/instagram.svg",
    },
];

export const experiences = [
    {
        title: "Software Engineer",
        job: "Digital Engineering Consultancy",
        date: "2022 - Present",
        contents: [
            "Started as intern and grew to technical lead on critical enterprise projects.",
            "Refactored and migrated legacy .NET applications (pre-.NET Core) to modern stack, working with Entity Framework, IIS, and enterprise deployment cycles.",
            "Developed full-stack solutions using .NET, Angular, and Azure (App Services, Functions, Azure AD).",
            "Built REST APIs, integrated SQL/NoSQL databases, and implemented authentication with Azure Active Directory (OAuth2 + OpenID Connect).",
        ],
    },
    {
        title: "Frontend Architect",
        job: "Ferragamo",
        date: "2023",
        contents: [
            "Led UI architecture and development for end-to-end frontend solution using Angular.",
            "Designed and implemented database schema, data models, and backend integration.",
            "Managed authentication flows with Azure AD and authorization mechanisms.",
            "Collaborated closely with business stakeholders to translate requirements into technical solutions.",
        ],
    },
    {
        title: "Frontend Lead",
        job: "Leonardo Telespazio - IRIDE",
        date: "2024 - Present",
        contents: [
            "Sole external consultant responsible for frontend architecture of critical satellite platform.",
            "Designed Angular application architecture and integrated with high-complexity APIs.",
            "Optimized data pipelines between frontend, backend, and microservices.",
            "Worked with microservices, Docker, Kubernetes, and CI/CD pipelines (Azure DevOps, GitLab CI) across multi-stage environments.",
        ],
    },
];
export const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://robohash.org/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://robohash.org/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://robohash.org/john",
    },
    {
        name: "Alice",
        username: "@alice",
        body: "This is hands down the best thing I've experienced. Highly recommend!",
        img: "https://robohash.org/alice",
    },
    {
        name: "Bob",
        username: "@bob",
        body: "Incredible work! The attention to detail is phenomenal.",
        img: "https://robohash.org/bob",
    },
    {
        name: "Charlie",
        username: "@charlie",
        body: "This exceeded all my expectations. Absolutely stunning!",
        img: "https://robohash.org/charlie",
    },
    {
        name: "Dave",
        username: "@dave",
        body: "Simply breathtaking. The best decision I've made in a while.",
        img: "https://robohash.org/dave",
    },
    {
        name: "Eve",
        username: "@eve",
        body: "So glad I found this. It has changed the game for me.",
        img: "https://robohash.org/eve",
    },
];