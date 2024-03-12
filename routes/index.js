import { Router } from "express";
import { PageHome } from "../pages/PageHome.js";
import { PageAbout } from "../pages/PageAbout.js";
import { PageServicesList } from "../pages/PageServicesList.js";
import { Page404 } from '../pages/Page404.js';
import { PageServiceInner } from '../pages/PageServiceInner.js';
import { PagePricing } from '../pages/PagePricing.js';
import { PageTestimonials } from '../pages/PageTestimonials.js';
import { PageLocations } from '../pages/PageLocations.js';
import { PageTeam } from '../pages/PageTeam.js'; 
import { PageTeamInner } from '../pages/PageTeamInner.js';  
import { PageProjects } from '../pages/PageProjects.js';
import { PageProjectsInner } from '../pages/PageProjectsInner.js';
import { helpMe } from "../middlewares/helpMe.js";
const router = Router();

router.use(helpMe)

router.get('/', (req, res) => {
    const page = new PageHome(req.time);
    res.send(page.render());
});

router.get('/about', (req, res) => {
    const page = new PageAbout(req.time);
    res.send(page.render());
});

router.get('/services', (req, res) => {
    const page = new PageServicesList(req.time);
    res.send(page.render());
});

router.get('/services/:serviceId', (req, res) => {
    const page = new PageServiceInner(req.params, req.time);
    res.send(page.render());
});

router.get('/services/:serviceId/pricing', (req, res) => {
    const page = new PagePricing(req.params, req.time);
    res.send(page.render());
    
});

router.get('/services/:serviceId/testimonials', (req, res) => {
    const page = new PageTestimonials(req.params, req.time);
    res.send(page.render());
    
});

router.get('/services/:serviceId/locations', (req, res) => {
    const page = new PageLocations(req.params, req.time);
    res.send(page.render());
    
});

router.get('/services/:serviceId/team', (req, res) => {
    const page = new PageTeam(req.params, req.time);
    res.send(page.render());
    
});

router.get('/services/:serviceId/team/:teamId', (req, res) => {
    const page = new PageTeamInner(req.params, req.time);
    res.send(page.render());  
});

router.get('/services/:serviceId/team/:teamId/projects', (req, res) => {
    const page = new PageProjects(req.params, req.time);
    res.send(page.render());  
});

router.get('/services/:serviceId/team/:teamId/projects/:projectId', (req, res) => {
    const page = new PageProjectsInner(req.params, req.time);
    res.send(page.render());  
});

router.use((req, res, next) => {
    const page = new Page404(req.time);
    res.status(404).send(page.render());
});

export { router }