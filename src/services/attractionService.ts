import attraction from '../models/attraction';
import trips from '../models/trip';
import Attraction from '@entities/Attraction';
import { Types } from 'mongoose';

export class attractionService {
    static getAll = async () => {
        return await attraction.find({});
    };

    // TODO: change item type after recreating relevan attraction types
    static updateOrCreate = async (
        _id: string,
        baseAttraction: any,
        details: { date: Date; price: Number }
    ) => {
        const attractionToAddOrUpdate = {
            ...baseAttraction,
            _id: baseAttraction._id || new Types.ObjectId(),
        };
        const attractionId = baseAttraction._id || new Types.ObjectId();
        return await attraction.findOneAndUpdate(
            { _id: attractionToAddOrUpdate._id },
            baseAttraction,
            {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
                rawResult: true,
            },
            // { _id: attractionToAddOrUpdate._id },
            // { $setOnInsert: attractionToAddOrUpdate },
            // { upsert: true, new: true, rawResult: true },
            async (err, addedAttraction) => {
                console.log(
                    'addedattraction: ' +
                        JSON.stringify(addedAttraction, null, 2)
                );
                console.log(addedAttraction.lastErrorObject.updatedExisting);
                // console.log('Trip id:' + _id);
                // console.log('Att id:' + (addedAttraction.value as any)?._id);
                // return await trips.findOneAndUpdate(
                //     {
                //         _id,
                //         'attractions.attraction': (addedAttraction.value as any)
                //             ?._id,
                //     },
                //     {
                //         $set: {
                //             'attractions.$.details': details,
                //         },
                //     },
                //     null,
                //     async (err, result) => {
                //         console.log(err);
                //         console.log(result);
                //     }
                // );

                return addedAttraction.lastErrorObject.updatedExisting
                    ? await trips.updateOne(
                          {
                              _id,
                              attractions: {
                                  $elemMatch: {
                                      attraction: (addedAttraction.value as any)
                                          ?._id,
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
                          },
                          {},
                          async (err, result) => {
                              console.log(err);
                              console.log(result);
                          }
                      )
                    : await trips.updateOne(
                          { _id },
                          {
                              $push: {
                                  attractions: {
                                      attraction: (addedAttraction.value as any)
                                          ?._id,
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
}
