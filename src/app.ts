import express, { Response } from 'express';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());

app.get('/health', (_, res: Response) => {
  res.status(200).send('OK');
});
app.use('/api/users', userRoutes);

export default app;
