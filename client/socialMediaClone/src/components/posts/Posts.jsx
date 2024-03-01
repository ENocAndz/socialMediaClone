import React from 'react'
import "./posts.scss"
import Post from '../post/Post';


const Posts = () => {
  const posts = [
  {
    id:1,
    name:"John Doe",
    userId:1,
    profilePic:"https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img:"https://images.pexels.com/photos/19129760/pexels-photo-19129760/free-photo-of-close-up-of-taillights-of-a-green-vintage-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
  },    
  {
    id:2,
    name:"John Doe",
    userId:1,
    profilePic:"https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img:"https://images.pexels.com/photos/19129760/pexels-photo-19129760/free-photo-of-close-up-of-taillights-of-a-green-vintage-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
  },    
  {
    id:3,
    name:"John Doe",
    userId:1,
    profilePic:"https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img:"https://images.pexels.com/photos/19129760/pexels-photo-19129760/free-photo-of-close-up-of-taillights-of-a-green-vintage-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
  },    
  {
    id:4,
    name:"John Doe",
    userId:1,
    profilePic:"https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img:"https://images.pexels.com/photos/19129760/pexels-photo-19129760/free-photo-of-close-up-of-taillights-of-a-green-vintage-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
  },      
  ];
  return (
    <div className='posts' >
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))

      }
    </div>
  )
}

export default Posts