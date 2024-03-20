import  Express  from "express";
import { getFriends } from "../controllers/friend.js";

const router = Express.Router();
router.get("/find/:userId",getFriends);

export default router