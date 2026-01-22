import Express from "express";
import { getMessages } from "../controllers/chat.js";

const router = Express.Router();
router.get("/", getMessages);


export default router;