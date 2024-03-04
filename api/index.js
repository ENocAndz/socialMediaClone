import  Express  from "express";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
const app = Express()

//middlewares
app.use(Express.json())

app.use("/api/auth",authRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/likes",likeRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/users",userRoutes)

app.listen(8800, ()=>{
    console.log("API Working")
});