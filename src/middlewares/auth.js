import jwt from 'jsonwebtoken';
import { SECRET } from '../config/auth.config.js';
export const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt; 
    if (!token) {
        return res.status(401).json({ message: 'Debe iniciar sesión' });
    }
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido', error: err.message });
        }
        req.usuario = decoded;
        next();
    });
};