import { IUser } from '@entities/Trip';
// TODO: delete user not exist
declare module 'express' {
    export interface Request {
        body: {
            user: IUser;
            _id: any;
            trip: any;
            attraction: any;
            details: any;
        };
    }
}
