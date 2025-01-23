import { Router } from "express";
import { createUser, findUserById, findAllUsers, updateUserById, deleteUserById, signIn, logout } from "../controller/user.controller.js";
import { verifyToken } from "../middlewares/index.js";
import { verificarEmail } from "../middlewares/index.js";
const router = Router();

router.get('/all', findAllUsers)
router.get('/api/user/:id', verifyToken, findUserById)
router.get('/api/user', verifyToken, findAllUsers)
router.post('/api/signup', verificarEmail, createUser)
router.post('/api/signin', signIn)
router.post('/api/logout', verifyToken, logout);
router.put('/api/user/:id', verifyToken, updateUserById)
router.delete('/api/user/:id', verifyToken, deleteUserById)
export default router;