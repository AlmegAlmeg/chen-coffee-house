import { Schema, model } from 'mongoose';

export interface ProductInterface {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
  intensity: number;
  category: string;
  isProductNew: boolean;
  price: number;
  slug: string;
}

const product = new Schema<ProductInterface>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  intensity: {
    type: Number,
    required: true,
    min: 4,
    max: 10,
  },
  category: {
    type: String,
    required: true,
  },
  isProductNew: {
    type: Boolean,
  },
  price: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Product = model<ProductInterface>('products', product);
