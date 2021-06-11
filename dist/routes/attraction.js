"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attractionController_1 = require("../controllers/attractionController");
const attractionRouter = express_1.Router();
attractionRouter.get('/', attractionController_1.getAllAttractions);
exports.default = attractionRouter;
