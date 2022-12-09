import { Router, Request, Response } from 'express';
import defaultProducts from '../data/products';
import Product from '../model/product';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const products: Array<typeof Product> = await Product.find();
    res.status(200).json({ data: products });
  } catch (err) {
    res.status(500).json({ message: `Internal server error: ${err}` });
  }
});

router.get('/mock', async (req: Request, res: Response) => {
  try {
    const products = defaultProducts;
    products.forEach(async (prod) => {
      await Product.create(prod);
    });
    res.status(200).json({ message: `All products imported!` });
  } catch (err) {
    res.status(500).json({ message: `Internal server error: ${err}` });
  }
});

export default router;
