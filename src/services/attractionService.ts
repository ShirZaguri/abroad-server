import attraction from '../models/attraction';

export class attractionService {
    static getAll = async () => {
        return await attraction.find({});
    };
}
