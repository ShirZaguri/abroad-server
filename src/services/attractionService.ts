import attraction from '../models/attraction';

export class attractionService {
    static getAll = async () => {
        return await attraction.find({});
    };

    static updateOrCreate = async (item: any) => {
        return await attraction.updateOne({ _id: item._id }, item, {
            upsert: true,
            setDefaultsOnInsert: true,
        });
    };
}
