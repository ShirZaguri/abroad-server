"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripService = void 0;
const mongoose_1 = require("mongoose");
const trip_1 = __importDefault(require("../models/trip"));
const attraction_1 = __importDefault(require("../models/attraction"));
class tripService {
}
exports.tripService = tripService;
// TODO: chnage query type
tripService.get = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield trip_1.default.find(query).populate('attractions.attraction');
});
tripService.add = (trip) => __awaiter(void 0, void 0, void 0, function* () {
    return yield trip_1.default.create(Object.assign({}, trip), function (err, r) {
        if (err) {
            console.log('error inserting' + err);
        }
    });
});
tripService.addAttraction = (_id, attraction, details) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(JSON.stringify(attraction));
    return yield attraction_1.default.findOneAndUpdate({ name: attraction.name }, { $setOnInsert: Object.assign({}, attraction) }, { upsert: true, new: true }, (err, addedAttraction) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.log('error occurd while adding attractions' + err);
        }
        const { date, price } = details;
        return yield trip_1.default.updateOne({ _id: _id }, {
            $push: {
                attractions: {
                    attraction: addedAttraction === null || addedAttraction === void 0 ? void 0 : addedAttraction._id,
                    details: {
                        date: details.date,
                        price: details.price,
                    },
                },
            },
        });
    }));
});
tripService.update = (trip) => __awaiter(void 0, void 0, void 0, function* () { });
tripService.delete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield trip_1.default.deleteOne({ _id: new mongoose_1.Types.ObjectId(id) });
});
