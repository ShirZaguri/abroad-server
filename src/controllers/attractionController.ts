import { paramMissingError } from '@shared/constants';
import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
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
    console.log(attractions);
    return res.status(OK).json({ attractions });
}
