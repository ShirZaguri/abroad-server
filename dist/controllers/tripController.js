'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.deleteTrip =
    exports.updateTrip =
    exports.addAttraction =
    exports.addTrip =
    exports.getAllTrips =
        void 0;
const constants_1 = require('@shared/constants');
const http_status_codes_1 = __importDefault(require('http-status-codes'));
const tripService_1 = require('../services/tripService');
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
/**
 * Get all trips
 *
 * @param req
 * @param res
 * @returns
 */
function getAllTrips(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const trips = yield tripService_1.tripService.getAll();
        console.log(trips);
        return res.status(OK).json({ trips });
    });
}
exports.getAllTrips = getAllTrips;
/**
 * Add one trip.
 *
 * @param req
 * @param res
 * @returns
 */
function addTrip(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { trip } = req.body;
        if (!trip) {
            return res.status(BAD_REQUEST).json({
                error: constants_1.paramMissingError,
            });
        }
        yield tripService_1.tripService.add(trip);
        return res.status(CREATED).end();
    });
}
exports.addTrip = addTrip;
function addAttraction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { _id, attraction, details } = req.body;
        if (!attraction) {
            return res.status(BAD_REQUEST).json({
                error: constants_1.paramMissingError,
            });
        }
        yield tripService_1.tripService.addAttraction(_id, attraction, details);
        return res.status(CREATED).end();
    });
}
exports.addAttraction = addAttraction;
/**
 * Update one user.
 *
 * @param req
 * @param res
 * @returns
 */
function updateTrip(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { trip } = req.body;
        if (!trip) {
            return res.status(BAD_REQUEST).json({
                error: constants_1.paramMissingError,
            });
        }
        trip.id = Number(trip.id);
        yield tripService_1.tripService.update(trip);
        return res.status(OK).end();
    });
}
exports.updateTrip = updateTrip;
/**
 * Delete one trip.
 *
 * @param req
 * @param res
 * @returns
 */
function deleteTrip(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield tripService_1.tripService.delete(Number(id));
        return res.status(OK).end();
    });
}
exports.deleteTrip = deleteTrip;
