import { paramMissingError } from '@shared/constants';
import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import { tripService } from '../services/tripService';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/**
 * Get all trips
 *
 * @param req
 * @param res
 * @returns
 */
export async function getAllTrips(req: Request, res: Response) {
    const trips = await tripService.getAll();
    console.log(trips);
    return res.status(OK).json({ trips });
}

/**
 * Add one trip.
 *
 * @param req
 * @param res
 * @returns
 */
export async function addTrip(req: Request, res: Response) {
    const { trip } = req.body;
    if (!trip) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await tripService.add(trip);
    return res.status(CREATED).end();
}

export async function addAttraction(req: Request, res: Response) {
    const { _id, attraction, details } = req.body;
    if (!attraction) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }

    await tripService.addAttraction(_id, attraction, details);
    return res.status(CREATED).end();
}

/**
 * Update one user.
 *
 * @param req
 * @param res
 * @returns
 */
export async function updateTrip(req: Request, res: Response) {
    const { trip } = req.body;
    if (!trip) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    trip.id = Number(trip.id);
    await tripService.update(trip);
    return res.status(OK).end();
}

/**
 * Delete one trip.
 *
 * @param req
 * @param res
 * @returns
 */
export async function deleteTrip(req: Request, res: Response) {
    const { id } = req.params;
    await tripService.delete(Number(id));
    return res.status(OK).end();
}
