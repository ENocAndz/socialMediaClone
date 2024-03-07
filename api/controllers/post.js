import {db} from "../connect.js";
import  Jwt  from "jsonwebtoken";

export const getPosts = (req,res)=>{
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in");

    Jwt.verify(token, "secretKey", (err, userInfo)=>{
        if (err) return res.status(403).json("Token is not valid!");
        const q ='SELECT p.*, u.id as userId, name, profilePic FROM posts as p JOIN users as u ON  (u.id = p.userId) LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ? ORDER BY p.createdAt DESC';
        
        db.query(q,[userInfo.id,userInfo.id], (err,data)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    });
}