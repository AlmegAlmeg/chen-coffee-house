import mongoose from 'mongoose';

const product = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
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

const Product = mongoose.model('products', product);

export default Product;
