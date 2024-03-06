import React from 'react'
import "./posts.scss"
import Post from '../post/Post';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';


const Posts = () => {
  
  const {isLoading, error, data} = useQuery(['posts'], ()=>
    makeRequest.get("/posts").then(res=>{
      return res.data;
    })
  )

  return (
    <div className='posts' >
      {data.map(post=>(
        <Post post={post} key={post.id}/>
      ))

      }
    </div>
  )
}

export default Posts