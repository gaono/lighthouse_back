import express from 'express';
import  exampleRoutes from './routes/ExampleRoutes';
import { errorHandler } from './middlewares/ErrorHandler';

const app = express();
app.use(express.json());

app.use('/example', exampleRoutes);
app.use(errorHandler);

export default app;