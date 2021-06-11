"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./pre-start"); // Must be the first import
const _server_1 = __importDefault(require("@server"));
const Logger_1 = __importDefault(require("@shared/Logger"));
const mongoose_1 = __importDefault(require("mongoose"));
// Start the server
const port = Number(process.env.PORT || 3000);
// const MONGODB_URI = process.env.MONGODB_URI || '';
mongoose_1.default
    .connect('mongodb+srv://shirza:Aa123456@abroad.ka6kd.mongodb.net/abroad?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    _server_1.default.listen(port, () => {
        Logger_1.default.info('Express server started on port: ' + port);
    });
});
