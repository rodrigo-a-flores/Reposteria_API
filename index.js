import express from 'express';
import authRouter from './src/Routes/router.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', authRouter);

const port = PORT ?? 3002;
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});