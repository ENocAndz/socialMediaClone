import {db} from "../connect.js";
import  Jwt  from "jsonwebtoken";

export const getFriends = (req,res)=>{
    const userId = req.params.userId;
    const q = "SELECT * FROM users  WHERE id=?";

    db.query(q, [userId], (err,data)=>{
        if(err) return res.status(500).json(err);
        const { password, ...info } = data[0];
        return res.json(info);
    });
    
}

// SELECT u.* FROM relationships AS R1 JOIN relationships AS r2 ON r1.followerUserId = r2.followedUserId AND r1.followedUserId = r2.followerUserId JOIN users AS u ON r1.followerUserId = u.id WHERE r1.followedUserId = ?