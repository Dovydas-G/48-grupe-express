const servicesData = [
    {
        id: 'design',
        title: 'Design',
        href: '/services/design', 
        src: '/img/web2.jpg'
    },
    {
        id: 'web-development',
        title: 'Web development',
        href: '/services/web-development',
        src: '/img/design2.jpg' 
    },
    {
        id: 'ux',
        title: 'UX',
        href: '/services/ux',
        src:'/img/ux2.jpg' 
    },
    
];


const serviceInnerData = [
    {
        title: 'Pricing',
        href: '/services/design/pricing',
        src: '/img/pricing.png' 
    },
    {
        title: 'Testimonials',
        href: '/services/design/testimonials', 
        src: '/img/testimonials.webp'
    },
    {
        title: 'Locations',
        href: '/services/design/locations',
        src: '/img/Location.webp'
    },
    {
        title: 'Team',
        href: '/services/design/team',
        src: '/img/team.png' 
    },
];


const teamData = [
    {
        id: 'designTeam',
        title: 'Design Team',
        href: '/services/:serviceId/team/designTeam',
        src: '/img/design.svg',
        src2: '/img/designTeam.jpg'
    },
    {
        id: 'web-developmentTeam',
        title: 'Web development Team',
        href: '/services/:serviceId/team/web-developmentTeam', 
        src: '/img/developmentTeam.svg',
        src2: '/img/programmersTeam1.jpg'
    },
    {
        id: 'uxTeam',
        title: 'UX Team',
        href: '/services/:serviceId/team/uxTeam', 
        src: '/img/ux.svg',
        src2: '/img/uxTeam.jpg'
    }, 
];


const projectsData = [
    {
        id: 'project-x',
        title: 'Project X',
        href: '/services/:serviceId/team/:teamId/projects/project-x',
        src: '/img/web1.jpg',
        src2: '/img/webProject1.jpg',
        
    },
    {
        id: 'project-y',
        title: 'Project Y',
        href: '/services/:serviceId/team/:teamId/projects/project-y',
        src: '/img/design1.jpg',
        src2: '/img/webProject2.jpg',
    },
    {
        id: 'project-s',
        title: 'Project S',
        href: '/services/:serviceId/team/:teamId/projects/project-s',
        src:  '/img/ux1.jpg',
        src2: '/img/webProject3.jpg',
    },
]



export { teamData };
export { servicesData };
export { serviceInnerData };
export { projectsData}