import moment from "moment/moment.js";
import {db} from "../connect.js";
import  Jwt  from "jsonwebtoken";

export const getPosts = (req,res)=>{
    const userId = req.query.userId;
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in");

    Jwt.verify(token, "secretKey", (err, userInfo)=>{
        if (err) return res.status(403).json("Token is not valid!");
        const q = userId !=="undefined" ? 'SELECT p.*, u.id as userId, name, profilePic FROM posts as p JOIN users as u ON  (u.id = p.userId) WHERE p.userId = ?'  : 'SELECT p.*, u.id as userId, name, profilePic FROM posts as p JOIN users as u ON  (u.id = p.userId) LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ? ORDER BY p.createdAt DESC';
         
        db.query(q,[userId !== "undefined" ? userId : userInfo.id,userInfo.id], (err,data)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    });
}

export const addPost = (req,res) =>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not looged in in!");

    Jwt.verify(token,"secretKey", (err, userInfo) =>{
        if (err) return res.status(403).json("Token is not valid");

        const q = "INSERT INTO posts(`description`,`img`,`createdAt`, `userId`) VALUES (?)";

        const values = [
            req.body.description,
            req.body.img,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id,
        ];

        db.query(q, [values], (err,data)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json("Post has been created");
        });



    });
};