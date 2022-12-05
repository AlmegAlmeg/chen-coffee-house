import Express, { Application } from 'express';

const app: Application = Express();

const PORT: number = 8366;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
