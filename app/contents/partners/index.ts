export interface Partner {
    slug: string;
    name: string;
    description: string;
    logo: string;
    url: string;
    mdFile: string;
}

export const PARTNERS: Partner[] = [
    {
        slug: 'behindeverystock',
        name: 'BehindEveryStock',
        description: 'Stock analysis and market insights platform',
        logo: '/partner-logos/behindeverystock-logo.png',
        url: 'https://behindeverystock.com/',
        mdFile: 'behindeverystock.md',
    },
    {
        slug: 'ikigaiforce',
        name: 'Ikigai Force',
        description: 'One objective, one daily task — productivity without decision fatigue',
        logo: '/partner-logos/ikigaiforce-logo.png',
        url: 'https://ikigaiforce.com/',
        mdFile: 'ikigaiforce.md',
    },
    {
        slug: 'artlab',
        name: 'ArtLab',
        description: 'Independent online gallery — free artist portfolios and curated virtual exhibitions',
        logo: '/partner-logos/artlab-logo.png',
        url: 'https://www.art-lab.space/',
        mdFile: 'artlab.md',
    },
];
