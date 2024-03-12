import { Router } from "express";

const apiRouter = Router();


apiRouter.get('/api', (req, res) => {
    res.send(`${7 + 5}`)
});

export { apiRouter };

