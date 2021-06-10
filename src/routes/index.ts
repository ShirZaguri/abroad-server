import { Router } from 'express';
import tripRouter from './trip';
import attractionRouter from './attraction';

// Export the base-router
const baseRouter = Router();

baseRouter.use('/trips', tripRouter);
baseRouter.use('/attractions', attractionRouter);

export default baseRouter;
