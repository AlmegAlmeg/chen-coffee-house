import Express, { Application } from 'express';
import cors from 'cors';
import './config/dbConnection';

/* Routers */
import productsRouter from './routes/products';

const app: Application = Express();

const PORT: number = 8366;

app.use(cors());
app.use(Express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/products', productsRouter);
