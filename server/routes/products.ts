import { Router, Request, Response } from 'express';
import defaultProducts from '../data/products';
import Product from '../model/product';

const router: Router = Router();

/* Get all products */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  console.log('test');
  try {
    const products: Array<typeof Product> = await Product.find();

    res.status(200).json({ data: products });
  } catch (err) {
    res.status(500).json({ message: `Internal server error: ${err}` });
  }
});

/* Get single product by id */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const product: typeof Product | null = await Product.findById(id);

    if (product === null) {
      res.status(400).json({ message: 'No product found' });
    }

    res.status(200).json({ data: product });
  } catch (err) {
    res.status(500).json({ message: `Internal server error: ${err}` });
  }
});

export default router;

// router.get('/mock', async (req: Request, res: Response) => {
//   try {
//     const products = defaultProducts;
//     products.forEach(async (prod) => {
//       await Product.create(prod);
//     });
//     res.status(200).json({ message: `All products imported!` });
//   } catch (err) {
//     res.status(500).json({ message: `Internal server error: ${err}` });
//   }
// });
