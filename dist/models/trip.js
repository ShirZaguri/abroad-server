"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TripSchema = new mongoose_1.Schema({
    destination: { type: String, requiered: true },
    attractions: [
        {
            attraction: {
                type: mongoose_1.Schema.Types.ObjectId,
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
}, { collection: 'trips' });
exports.default = mongoose_1.model('trips', TripSchema);
