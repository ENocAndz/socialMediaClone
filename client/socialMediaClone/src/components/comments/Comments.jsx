import React, { useContext } from 'react'
import "./comments.scss"
import { AuthContext } from '../../context/authContext';

const Comments = () => {
    const {currentUser} = useContext(AuthContext)
    //temporary
    const comments = [
        {
            id:1,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            name:"John Doe",
            userId:1,
            profilePic:"https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },    
          {
            id:2,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            name:"John Doe",
            userId:1,
            profilePic:"https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },    
          {
            id:3,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            name:"John Doe",
            userId:1,
            profilePic:"https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },    
          {
            id:4,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            name:"John Doe",
            userId:1,
            profilePic:"https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },      
    ];
  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='Write a comment' />
            <button>Send</button>
        </div>
        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>min ago</span>
            </div>
        ))}
    </div>
  );
}

export default Comments