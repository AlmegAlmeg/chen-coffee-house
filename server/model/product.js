"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const product = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    daysToDeliver: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stockStatus: {
        type: Boolean,
        required: true,
    },
});
const Product = mongoose_1.default.model('products', product);
exports.default = Product;
