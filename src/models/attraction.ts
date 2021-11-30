import { Document, model, Schema } from 'mongoose';

export interface AttractionDocument extends Document {
    name: string;
    description: string;
}

const AttractionSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: false },
    },
    { collection: 'attractions' }
);

export default model<AttractionDocument>('attractions', AttractionSchema);
