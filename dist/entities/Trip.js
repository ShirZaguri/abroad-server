"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: update entity
class Trip {
    constructor(id, destination, attractions, startDate, endtDate, img) {
        this.id = id;
        this.destination = destination;
        this.attractions = attractions;
        this.startDate = startDate;
        this.endDate = endtDate;
        this.img = img;
    }
}
exports.default = Trip;
