import express from 'express';
import  exampleRoutes from './routes/ExampleRoutes';
import personalRoutes from './routes/personalViewRoutes';
import { errorHandler } from './middlewares/ErrorHandler';

const app = express();
app.use(express.json());

app.use('/example', exampleRoutes);
app.use('/personal', personalRoutes);
app.use(errorHandler);

export default app;