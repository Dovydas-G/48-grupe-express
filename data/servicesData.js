const servicesData = [
    {
        id: 'design',
        title: 'Design',
        href: '/services/design' 
    },
    {
        id: 'web-development',
        title: 'Web development',
        href: '/services/web-development', 
    },
    {
        id: 'ux',
        title: 'UX',
        href: '/services/ux', 
    },
    
];


const serviceInnerData = [
    {
        title: 'Pricing',
        href: '/services/design/pricing' 
    },
    {
        title: 'Testimonials',
        href: '/services/design/testimonials' 
    },
    {
        title: 'Locations',
        href: '/services/design/locations' 
    },
    {
        title: 'Team',
        href: '/services/design/team' 
    },
];


const teamData = [
    {
        id: 'designTeam',
        title: 'Design Team',
        href: '/services/:serviceId/team/designTeam' 
    },
    {
        id: 'web-developmentTeam',
        title: 'Web development Team',
        href: '/services/:serviceId/team/web-developmentTeam', 
    },
    {
        id: 'uxTeam',
        title: 'UX Team',
        href: '/services/:serviceId/team/uxTeam', 
    },
    
];

export { teamData };
export { servicesData };
export { serviceInnerData };