"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AttractionSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    description: { type: String, required: false },
}, { collection: 'attractions' });
exports.default = mongoose_1.model('attractions', AttractionSchema);
