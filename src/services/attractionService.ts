import attraction from '../models/attraction';
import trips from '../models/trip';

export class attractionService {
    static getAll = async () => {
        return await attraction.find({});
    };

    // TODO: change item type after recreating relevan attraction types
    static updateOrCreate = async (item: any) => {
        const { attraction: baseAttraction, details, _id } = item;

        return await attraction.updateOne(
            { _id: baseAttraction._id },
            baseAttraction,
            {
                upsert: true,
                setDefaultsOnInsert: true,
            },
            async () => {
                return await trips.updateOne(
                    {
                        _id: _id,
                        attractions: {
                            $elemMatch: {
                                attraction: baseAttraction._id,
                            },
                        },
                    },
                    {
                        $set: {
                            'attractions.$.details': {
                                date: details.date,
                                price: details.price,
                            },
                        },
                    }
                );
            }
        );
    };
}
