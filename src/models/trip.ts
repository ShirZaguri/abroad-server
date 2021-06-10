import Attraction from '@entities/Attraction';
import { Schema, Document, model } from 'mongoose';

export interface TripDocument extends Document {
    destination: string;
    attractions: [
        { attraction: String | Schema.Types.ObjectId | Attraction; date: Date }
    ];
    startDate: [Date];
    endDate: [Date];
}

const TripSchema: Schema = new Schema(
    {
        destination: { type: String, requiered: true },
        attractions: [
            {
                attraction: {
                    type: Schema.Types.ObjectId,
                    ref: 'attractions',
                    requiered: false,
                },
                details: {
                    date: { type: Date, requiered: false },
                    price: { type: Number },
                },
            },
        ],
        startDate: { type: Date, requiered: true },
        endDate: { type: Date, requiered: true },
    },
    { collection: 'trips' }
);

export default model<TripDocument>('trips', TripSchema);
