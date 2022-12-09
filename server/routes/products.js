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
const express_1 = require("express");
const products_1 = __importDefault(require("../data/products"));
const product_1 = __importDefault(require("../model/product"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find();
        res.status(200).json({ data: products });
    }
    catch (err) {
        res.status(500).json({ message: `Internal server error: ${err}` });
    }
}));
router.get('/mock', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = products_1.default;
        products.forEach((prod) => __awaiter(void 0, void 0, void 0, function* () {
            yield product_1.default.create(prod);
        }));
        res.status(200).json({ message: `All products imported!` });
    }
    catch (err) {
        res.status(500).json({ message: `Internal server error: ${err}` });
    }
}));
exports.default = router;
