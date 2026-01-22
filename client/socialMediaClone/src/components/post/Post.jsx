import React, { useContext, useState } from 'react'
import  "./post.scss"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizonIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';

const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const {currentUser} = useContext(AuthContext)

    const { isPending, error, data } = useQuery({
        queryKey: ['likes',post.id],
        queryFn: () =>
            makeRequest.get("/likes?postId="+ post.id).then((res)=>{
            return res.data
          })
    })
    
    const { isPending:commentsPending, error:cmntsError, data:commentsData } = useQuery({
        queryKey: ["ammount",post.id], 
        queryFn: () =>
          makeRequest.get("/comments/ammount?postId=" + post.id).then((res)=>{
            return res.data 
          })
    })
    

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (liked)=>{
            if(liked) return makeRequest.delete("/likes?postId="+ post.id);
            return makeRequest.post("/likes", {postId: post.id});
        },
        onSuccess: () => {
            queryClient.invalidateQueries("likes");
        }
    })
    const deleteMutation = useMutation({
        mutationFn: (postId)=>{
            return makeRequest.delete("/posts/"+ postId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
        }
    })
    

    const handleLike = () =>{
        mutation.mutate(data.includes(currentUser.id))
    }

    const handleDelete = () =>{
        deleteMutation.mutate(post.id)
    }
    

  return (
    <div className='post'>
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={"/upload/" + post.profilePic} alt="" />
                    <div className="details">
                        <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                            <span className='name'>{post.name}</span>
                        </Link>
                        <span className="date">{moment(post.createdAt).fromNow()}</span>
                    </div>
                </div>
                <MoreHorizonIcon onClick={()=>setMenuOpen(!menuOpen)}/>
                {menuOpen && post.userId === currentUser.id &&<button onClick={handleDelete}>delete</button>}
                
            </div>    
            <div className="content">
                <p>{post.description}</p>
                <img src={"./upload/" + post.img} alt="" />
            </div>
            <div className="info">
                <div className="item">

                    {isPending ?"Loading" : data.includes(currentUser.id) ? (
                    <FavoriteOutlinedIcon style={{color:"rgb(151, 194, 149)"}} onClick={handleLike}/>
                    ) :(
                        <FavoriteBorderOutlinedIcon onClick={handleLike}/>
                    )
                    }
                    { isPending? "Loading" :data.length} likes
                </div>
                <div className="item" onClick={()=> setCommentOpen(!commentOpen)}>
                   <TextsmsOutlinedIcon/>
                   { commentsPending? "Loading" :commentsData.commentCount} comments
                </div>
                <div className="item">
                   <ShareOutlinedIcon/>
                    Share
                </div>
            </div>
            {commentOpen && <Comments postId = {post.id}/>}
        </div>
    </div>
  )
}

export default Post