import  Express  from "express";
import { getComments, addComment,ammountComments } from "../controllers/comment.js";



const router = Express.Router();
router.get("/ammount", ammountComments);
router.get("/",getComments);
router.post("/", addComment);

export default router