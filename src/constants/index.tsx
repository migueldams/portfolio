import Web from "@/assets/Web.jpeg"
import Mobile from "@/assets/mobile.jpeg"
import Software from "@/assets/sofware.jpeg"
import community from "@/assets/community.jpeg"
import Cloud from "@/assets/cloud.jpeg"
import Design from "@/assets/Design.jpeg"
import Maintenance from "@/assets/maintenance.jpeg"
import aws from "@/assets/icons/aws.png"
import flutter from "@/assets/icons/flutter.png"
import java from "@/assets/icons/java.png"
import javascript from "@/assets/icons/nextjs.png"
import react from "@/assets/icons/react.png"
import tailwind from "@/assets/icons/tailwindcss.png"
import recent1 from "@/assets/projet1.png"
import recent2 from "@/assets/projet2.png"



export const carousel = [
    {
        id: 1,
        imageUrl: aws.src,
        title: "aws cloud infrastructure",
    },
    {
        id: 2,
        imageUrl: flutter.src,
        title: "flutter mobile development",
    },
    {
        id: 3,
        imageUrl: java.src,
        title: "JAVA software development",
    },
    {
        id: 4,
        imageUrl: javascript.src,
        title: "NextJs web development",
    },
    {
        id: 5,
        imageUrl: react.src,
        title: "React UI/UX design",
    },
    {
        id: 6,
        imageUrl: tailwind.src,
        title: "UI/UX Design",
    }
]


export const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
]


export const service = [
    {
        id: 1,
        imageUrl: Web.src,
        title: "Développement Full Stack",
        description: "Création d'applications web modernes et performantes avec les technologies les plus actuelles",
        content: [
            "React, Vue.js, Node.js , NextJs",
            "Architecture scalable et maintenable",
            "API RESTful et GraphQL",
        ]
    },
    {
        id: 2,
        imageUrl: Mobile.src,
        title: "Développement Mobile",
        description: "Applications mobiles natives et cross-platform pour iOS et Android haute performance",
        content: [
            "React Native, Flutter, Swift",
            "Design responsive et UX optimisé",
            "Intégration APIs et push notifications",
        ]
    },
    {
        id: 3,
        imageUrl: Software.src,
        title: "Développement Logiciel",
        description: "Solutions logicielles complètes sur mesure pour vos besoins métier spécifiques",
        content: [
            " Python, Java",
            "Architecture modulaire et extensible",
            "Gestion de bases de données complexes",
        ]
    },
    {
        id: 4,
        imageUrl: community.src,
        title: "Social Media Manager",
        description: "Gestion complète de vos réseaux sociaux et stratégie digitale pour augmenter votre présence",
        content: [
            "Création de contenu engageant",
            "Gestion communautaire et modération",
            "Analytics et optimisation de campagnes",
        ]
    },
    {
        id: 5,
        imageUrl: Cloud.src,
        title: "Infrastructure Cloud",
        description: "Déploiement et gestion d'infrastructures cloud robustes et hautement disponibles",
        content: [
            "AWS, Azure, Google Cloud Platform",
            "DevOps et containerisation (Docker, Kubernetes)",
            "CI/CD et automation",
        ]
    },
    {
        id: 6,
        imageUrl: Design.src,
        title: "UI/UX Design",
        description: "Conception d'interfaces utilisateur intuitives et attrayantes pour vos applications",
        content: [
            "Wireframing et prototypage",
            "Design System et Figma",
            "Optimisation UX et accessibilité",
        ]
    },
    {
        id: 7,
        imageUrl: Maintenance.src,
        title: "Maintenance & Support",
        description: "Support technique continu et optimisation de vos applications pour garantir une performance maximale",
        content: [
            "Monitoring et alerting 24/7",
            "Optimisation des performances",
            "Mise à jour et patches de sécurité",
        ]
    }
];

export const recentProjet = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Plateforme e-commerce complète avec panier, paiement et gestion d'inventaire",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        imageUrl: Web.src,
        link: "https://www.tech-solution-sa.com/",
        date: "September 24, 2025"
    },
    {
        id: 2,
        title: "ERP System for call center",
        description: "Système d'ERP pour centre d'appels avec gestion des appels, des agents et des rapports",
        technologies: ["Flutter", "Firebase", "GetX"],
        imageUrl: Mobile.src,
        link: "https://www.tech-solution-sa.com/",
        date: "October 20, 2025"
    },
    {
        id: 3,
        title: "site web pour une entreprise tech",
        description: "Dashboard de gestion d'infrastructure cloud avec monitoring en temps réel",
        technologies: ["Next.js", "AWS", "PostgreSQL", "Tailwind"],
        imageUrl: recent1.src,
        link: "https://www.tech-solution-sa.com/",
        date: "November 24, 2026"
    },
    {
        id: 4,
        title: "site web pour une entreprise de climatisation",
        description: "Site web complet pour une entreprise de climatisation avec gestion des services et des clients",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
        imageUrl: recent2.src,
        link: "https://climaxtech.netlify.app/",
        date: "January 4, 2026"
    }
]

