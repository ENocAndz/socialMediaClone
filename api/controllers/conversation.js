import {db} from "../connect.js";
import Jwt from "jsonwebtoken";

export const getConversations = (req,res) =>{
    const userId = 1;
    const query = "SELECT * from MESSAGES"
    const q = "SELECT c.id AS Conversation_id, CASE WHEN c.user1_id = ? THEN c.user2_id ELSE c.user1_id END AS other_user_id, u.name AS other_user_name, u.profilePic AS other_user_profile_pic, m.message_text AS last_message, m.created_at AS last_message_time FROM Conversations c JOIN Users u ON u.id = CASE WHEN c.user1_id = ? THEN c.user2_id ELSE c.user1_id END LEFT JOIN Messages m ON m.conversation_id = c.id WHERE c.user1_id = ? OR c.user2_id = ? ORDER BY m.created_at DESC LIMIT 100;";

    db.query(q, [req.query.userId,req.query.userId,req.query.userId,req.query.userId], (err,data) =>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}

