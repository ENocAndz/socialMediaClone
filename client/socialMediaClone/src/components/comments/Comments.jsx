import React, { useContext, useState } from 'react'
import "./comments.scss"
import { AuthContext } from '../../context/authContext';
import { makeRequest } from '../../axios';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import moment from 'moment';


const Comments = ({postId}) => {
    const {currentUser} = useContext(AuthContext)
     const [description, setDescription] = useState("")
    const { isPending, error, data } = useQuery({
      queryKey: ["comments"],
      queryFn: () =>
        makeRequest.get("/comments?postId=" + postId).then((res)=>{
          return res.data
        })
    })

    const mutation = useMutation({
      mutationFn: (newComment)=>{
      return makeRequest.post("/comments", newComment);
      },
      onSuccess: () => {
          queryClient.invalidateQueries(["comments"])
      }
    })
    const handleClick = async (e) =>{
      e.preventDefault()
      mutation.mutate({description, postId})
      setDescription("")
  
    }
    
  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='Write a comment'  value={description} onChange={e=>setDescription(e.target.value)}/>
            <button onClick={handleClick} >Send</button>
        </div>
        { isPending ? "Loading" : data.map((comment)=>(
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.description}</p>
                </div>
                <span className='date'> {moment(comment.createdAt).fromNow()}</span>
            </div>
        ))}
    </div>
  );
}

export default Comments