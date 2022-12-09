"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const URL = `mongodb+srv://${username}:${password}@cluster0.pasthpk.mongodb.net/?retryWrites=true&w=majority`;
mongoose_1.default.set('strictQuery', true);
mongoose_1.default
    .connect(URL)
    .then(() => {
    console.log('Connected to database');
})
    .catch((err) => {
    console.log(`Error: ${err.message}`);
});
const { MongoClient, ServerApiVersion } = require('mongodb');
