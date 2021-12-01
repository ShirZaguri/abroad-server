import { paramMissingError } from '@shared/constants';
import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import { tripService } from 'src/services/tripService';
import { attractionService } from '../services/attractionService';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/**
 * Get all attractions
 *
 * @param req
 * @param res
 * @returns
 */
export async function getAllAttractions(req: Request, res: Response) {
    const attractions = await attractionService.getAll();
    return res.status(OK).json({ attractions });
}

export async function updateOrCreateAttraction(req: Request, res: Response) {
    const { tripId, attraction, details } = req.body;
    await attractionService.updateOrCreate(tripId, attraction, details);

    return res.status(OK).json({ attraction });
}
