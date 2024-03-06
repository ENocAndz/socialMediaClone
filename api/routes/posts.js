import  Express  from "express";
import {  } from "../controllers/post.js";

const router = Express.Router();
router.get("/",getPosts)

export default router