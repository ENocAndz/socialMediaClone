import  Express  from "express";
import { register,login,logout } from "../controllers/auth.js";

const router = Express.Router();
router.get("/register",register)
router.get("/login",login)
router.get("/logout",logout)

export default router