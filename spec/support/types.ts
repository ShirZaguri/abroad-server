import { Response } from 'supertest';
// import { IUser } from '@entities/Trip';

export interface IResponse extends Response {
    body: {
        trip: any;
        // users: IUser[];
        error: string;
    };
}

export interface IReqBody {
    //   user?: IUser;
}
