import express from 'express';
import Router from './routers/Router.ts';

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/', Router);

export default app;