import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const username: string | undefined = process.env.MONGODB_USERNAME;
const password: string | undefined = process.env.MONGODB_PASSWORD;

const URL: string = `mongodb+srv://${username}:${password}@cluster0.pasthpk.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', true);

mongoose
  .connect(URL)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`);
  });

const { MongoClient, ServerApiVersion } = require('mongodb');
