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
        tripId: string,
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
            async (err, addedAttraction) => {
                return addedAttraction.lastErrorObject.updatedExisting
                    ? await trips.updateOne(
                          {
                              _id: tripId,
                              attractions: {
                                  $elemMatch: {
                                      attraction: addedAttraction.value?._id,
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
                      )
                    : await trips.updateOne(
                          { _id: tripId },
                          {
                              $push: {
                                  attractions: {
                                      attraction: addedAttraction.value?._id,
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
