import { Router } from 'express';
import { login, register } from '../Controller/AuthController.js';
import { validateUserData } from '../Middleware/Validation.js';
import authMiddleware from '../Middleware/AuthMiddleware.js';

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/register', validateUserData, register);
authRouter.get('/home', authMiddleware, (req, res) => {
    res.json({ success: true, message: 'Acceso concedido', data: `Hola ${req.user.username}` });
});

export default authRouter;