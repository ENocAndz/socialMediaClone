import  Express  from "express";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = Express()

//middlewares
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next()
})
app.use(Express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/likes",likeRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/users",userRoutes)

app.listen(8800, ()=>{
    console.log("API Working")
});