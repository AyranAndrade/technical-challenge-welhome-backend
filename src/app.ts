import express from 'express';
import PropertyRouter from './routers/PropertyRouter.ts';
import { sequelize } from './repositories/Database.ts';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

await sequelize.sync();

app.use('/', PropertyRouter);

export default app;