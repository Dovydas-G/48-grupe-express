console.clear();

import express from 'express';
import { PageHome } from './pages/PageHome.js';
import { Page404 } from './pages/Page404.js';
import { PageAbout } from './pages/PageAbout.js';
import { PageServicesList } from './pages/PageServicesList.js';
import { PageServiceInner } from './pages/PageServiceInner.js';
import { PagePricing } from './pages/PagePricing.js';
import { PageTestimonials } from './pages/PageTestimonials.js';
import { PageLocations } from './pages/PageLocations.js';
import { PageTeam } from './pages/PageTeam.js'; 
import { PageTeamInner } from './pages/PageTeamInner.js';  
import { PageProjects } from './pages/PageProjects.js';
import { PageProjectsInner } from './pages/PageProjectsInner.js';

const app = express();
const port = 4811;

app.use(express.static('static'));

app.get('/', (req, res) => {
    const page = new PageHome();
    res.send(page.render());
});

app.get('/about', (req, res) => {
    const page = new PageAbout();
    res.send(page.render());
});

app.get('/services', (req, res) => {
    const page = new PageServicesList();
    res.send(page.render());
});

app.get('/services/:serviceId', (req, res) => {
    const page = new PageServiceInner(req.params);
    res.send(page.render());
});

app.get('/services/:serviceId/pricing', (req, res) => {
    const page = new PagePricing(req.params);
    res.send(page.render());
    
});

app.get('/services/:serviceId/testimonials', (req, res) => {
    const page = new PageTestimonials(req.params);
    res.send(page.render());
    
});

app.get('/services/:serviceId/locations', (req, res) => {
    const page = new PageLocations(req.params);
    res.send(page.render());
    
});

app.get('/services/:serviceId/team', (req, res) => {
    const page = new PageTeam(req.params);
    res.send(page.render());
    
});

app.get('/services/:serviceId/team/:teamId', (req, res) => {
    const page = new PageTeamInner(req.params);
    res.send(page.render());  
});

app.get('/services/:serviceId/team/:teamId/projects', (req, res) => {
    const page = new PageProjects(req.params);
    res.send(page.render());  
});

app.get('/services/:serviceId/team/:teamId/projects/:projectId', (req, res) => {
    const page = new PageProjectsInner(req.params);
    res.send(page.render());  
});


app.use((req, res, next) => {
    const page = new Page404();
    res.status(404).send(page.render());
});

app.listen(port, () => {
    console.log(`URL: http://localhost:${port}`);
});