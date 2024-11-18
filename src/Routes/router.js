import { Router } from 'express';
import { login, register } from '../Controller/AuthController.js';
import { validateUserData } from '../Middleware/Validation.js';

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/register', validateUserData, register);


export default authRouter;
