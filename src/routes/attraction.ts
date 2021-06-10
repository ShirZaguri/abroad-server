import { Router } from 'express';
import { getAllAttractions } from '../controllers/attractionController';

const attractionRouter = Router();
attractionRouter.get('/', getAllAttractions);

export default attractionRouter;
