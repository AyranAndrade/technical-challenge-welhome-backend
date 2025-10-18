import express from 'express';
import PropertyRouter from './routers/PropertyRouter.ts';

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/', PropertyRouter);

export default app;