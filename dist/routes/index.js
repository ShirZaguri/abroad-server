"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trip_1 = __importDefault(require("./trip"));
const attraction_1 = __importDefault(require("./attraction"));
// Export the base-router
const baseRouter = express_1.Router();
baseRouter.use('/trips', trip_1.default);
baseRouter.use('/attractions', attraction_1.default);
exports.default = baseRouter;
