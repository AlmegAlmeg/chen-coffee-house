import { Router, Request, Response } from 'express';
import defaultProducts from '../data/products';
import { Product, ProductInterface } from '../model/product';

const router: Router = Router();

/* Get all products */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const products: Array<ProductInterface> = await Product.find();

    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: `Internal server error: ${err}` });
  }
});

/* Get single product by slug */
router.get('/:slug', async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug } = req.params;

    const product: ProductInterface | null = await Product.findOne({ slug });

    if (product === null) {
      res.status(200).json({ message: 'No product found' });
      return;
    }

    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ message: `Internal server error: ${err}` });
  }
});

export default router;

// router.post('/mock', async (req: Request, res: Response) => {
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
//! DO NOT USE THIS FUNCTION
// router.delete('/delete-all', async (req: Request, res: Response) => {
//   try {
//     await Product.deleteMany();

//     res.status(200).json({ message: `All products deleted` });
//   } catch (err) {
//     res.status(500).json({ message: `Internal server error: ${err}` });
//   }
// });
