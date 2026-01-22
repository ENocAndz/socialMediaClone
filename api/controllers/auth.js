import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import  Jwt  from "jsonwebtoken";
import cookie from "cookie-parser";


export const register = (req,res)=>{
    //Check user if exits
    const q = "SELECT *  FROM users WHERE userName = ?"
    db.query(q,[req.body.username], (err,data)=>{
        if (err) return res.status(500).json(err)
        if (data.length) return res.status(409).json("User already exists!")
        // if not, create new user
            // hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        //insert into users table

        const q = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)"

        const values = [req.body.username, req.body.email, hashedPassword, req.body.name];

        db.query(q,[values], (err,data)=>{
            return res.status(200).json("User has been created");
        });
    })
}
export const login = (req,res)=>{
    const q = "SELECT * FROM users WHERE userName = ?";
    db.query(q,[req.body.username], (err,data)=>{
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found!");

        const checkPassword = bcrypt.compareSync(
            req.body.password, 
            data[0].password
        );

        if (!checkPassword) 
            return res.status(401).json("Wrong password or username!");

        const token = Jwt.sign({id:data[0].id}, "secretKey");

        const {password, ...others} = data[0];

        res.cookie("accessToken",token, {
            httpOnly:true,
        }).status(200).json(others);

    });
};
export const logout = (req,res)=>{
    res.clearCookie("accessToken", {
        secure:true,
        sameSite:"none"
    }).status(200).json("User has been logged out.")
};