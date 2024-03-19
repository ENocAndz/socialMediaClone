import { getFriends } from "../controllers/friend";
import  Express  from "express";

const router = Express.Router();
router.get("/find/:userId",getFriends);

export default router