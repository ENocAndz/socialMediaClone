import Express from "express";
import { getConversations } from "../controllers/conversation.js";

const router = Express.Router();
router.get("/", getConversations);


export default router;