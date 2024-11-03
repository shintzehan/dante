export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Shin Tzehan',
    subtitle: 'Electrical and Computer Engineer',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    footerNavLinks: [
    ],
    socialLinks: [
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/shintzehan'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm **Shin Tzehan**, an Electrical and Computer Engineer who obtained a dual degree of Bachelor in EE and CS at the year of 2023.<br>" +
        "Asperger Syndrome with abstruction (math / physics) and language advantages, trilingual of English, Chinese and Japanese.<br>" +
        "Want to achieve high positions in industry, for example senior engineer and / or engineering manager.",
        actions: [
            {
                text: 'About Me',
                href: '/about'
            },
            {
                text:'Contact Me',
                href:'/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
