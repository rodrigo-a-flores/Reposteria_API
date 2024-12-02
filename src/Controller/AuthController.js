import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../Model/User.js';

dotenv.config();

export const register = async (req, res) => {
    await User.sync();
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role: 'user'
        });
        res.status(201).json({ success: true, user: newUser });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }

        const token = jwt.sign({ userName: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('authToken', token, {
            httpOnly: false,
            secure: false,
            sameSite: 'none',
            maxAge: 60 * 60 * 1000
        });
        res.status(200).json({ success: true, userName: user.username });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};