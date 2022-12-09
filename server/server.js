"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./config/dbConnection");
/* Routers */
const products_1 = __importDefault(require("./routes/products"));
const app = (0, express_1.default)();
const PORT = 8366;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use('/products', products_1.default);
