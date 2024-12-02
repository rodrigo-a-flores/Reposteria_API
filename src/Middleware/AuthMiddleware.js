import jwt from 'jsonwebtoken';
import User from '../Model/User.js';

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ where: { username: decodedToken.userName } });        
        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' }); 
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};

export default authMiddleware;