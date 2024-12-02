import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './src/Routes/authRouter.js';
import apiRouter from './src/Routes/apiRouter.js';
dotenv.config();
const { PORT, ORIGINS_ALLOWED } = process.env;

const app = express();

app.use(cors({ 
    origin: ORIGINS_ALLOWED,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/api', apiRouter);

const port = PORT ?? 3002;
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});