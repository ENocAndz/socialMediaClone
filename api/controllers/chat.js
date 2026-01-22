import {db} from "../connect.js";
import Jwt from "jsonwebtoken";

export const getMessages = (req,res) =>{
    const q = "SELECT M.*, U.name AS other_user_name, U.profilePic AS other_user_profile_pic FROM messages M JOIN Users U ON (U.id = M.sender_id OR U.id = M.receiver_id) WHERE M.conversation_id = ?  AND U.id != ? ORDER BY M.created_at ASC;";

    db.query(q, [req.query.conversationId, req.query.userId], (err,data) =>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}

