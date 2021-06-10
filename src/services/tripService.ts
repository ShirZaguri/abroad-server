import Attraction from '@entities/Attraction';
import Trip from '@entities/Trip';
import { Types } from 'mongoose';
import trips from '../models/trip';
import attractions from '../models/attraction';

export class tripService {
    static getAll = async () => {
        return await trips.find({}).populate('attractions.attraction');
    };

    static add = async (trip: Trip) => {
        return await trips.create({ ...trip }, function (err, r) {
            if (err) {
                console.log('error inserting' + err);
            }
        });
    };
    static addAttraction = async (
        _id: string,
        attraction: Attraction,
        details: { date: Date; price: Number }
    ) => {
        console.log(JSON.stringify(attraction));
        return await attractions.findOneAndUpdate(
            { name: attraction.name },
            { $setOnInsert: { ...attraction } },
            { upsert: true, new: true },
            async (err, addedAttraction) => {
                if (err) {
                    console.log('error occurd while adding attractions' + err);
                }

                const { date, price } = details;
                return await trips.updateOne(
                    { _id: _id },
                    {
                        $push: {
                            attractions: {
                                attraction: addedAttraction?._id,
                                details: {
                                    date: details.date,
                                    price: details.price,
                                },
                            },
                        },
                    }
                );
            }
        );
    };

    static update = async (trip: any) => {};

    static delete = async (id: number) => {
        await trips.deleteOne({ _id: new Types.ObjectId(id) });
    };
}
