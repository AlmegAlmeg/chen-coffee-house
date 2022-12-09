import { Router, Request, Response } from 'express';
import Product from '../model/product';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const products: Array<typeof Product> = await Product.find();
    console.log(products);
  } catch (err) {
    res.status(500).json({ message: `Internal server error: ${err}` });
  }
});

export default router;
