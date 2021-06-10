import { Router } from 'express';
import {
    addAttraction,
    addTrip,
    deleteTrip,
    getAllTrips,
    updateTrip,
} from '../controllers/tripController';

const tripRouter = Router();
tripRouter.get('/', getAllTrips);
tripRouter.post('/add', addTrip);
tripRouter.post('/addAttraction', addAttraction);
tripRouter.put('/update', updateTrip);
tripRouter.delete('/delete/:id', deleteTrip);

export default tripRouter;
