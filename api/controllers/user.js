import {db} from "../connect.js";
import  Jwt  from "jsonwebtoken";


export const getUser = (req,res)=>{
    const userId = req.params.userId;
    const q = "SELECT * FROM users  WHERE id=?";

    db.query(q, [userId], (err,data)=>{
        if(err) return res.status(500).json(err);
        const { password, ...info } = data[0];
        return res.json(info);
    });

 
};
export const updateUser = (req,res)=>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not authenticated");

    Jwt.verify(token, "secretKey", (err, userInfo)=>{
        if (err) return res.status(403).json("token is invalid");

        const q = "UPDATE users  set `name`= ?, `city`= ?, `website`= ?,`coverPic`= ?, `profilePic`= ? WHERE id = ? ";
        const values = [
            req.body.name,
            req.body.city,
            req.body.website,
            req.body.coverPic,
            req.body.profilePic,
            userInfo.id
        ]
        db.query(q, values, (err,data)=>{
            if(err) return res.status(500).json(err);
            if(data.affectedRows > 0) return res.json("Updated!");

            return res.status(403).json("You can update only your posts!");
        });
        
    })
 
};