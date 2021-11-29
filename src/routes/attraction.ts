import { Router } from 'express';
import {
    getAllAttractions,
    updateOrCreateAttraction,
} from '../controllers/attractionController';

const attractionRouter = Router();
attractionRouter.get('/', getAllAttractions);
attractionRouter.post('/', updateOrCreateAttraction);

export default attractionRouter;
