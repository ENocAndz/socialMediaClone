import React from 'react';
import { useContext } from 'react';
import {AuthContext} from "../../context/authContext";
import "./share.scss";
import Image from "../../assets/8.png";
import Map from "../../assets/13.png";
import Friend from "../../assets/14.png";
import { useState } from 'react';
import { useMutation, QueryClient, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Share = () => {
  const [file,setFile] = useState(null)
  const [description,setDescription] = useState(null)
    
  const {currentUser} = useContext(AuthContext)
    
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (newPost)=>{
    return makeRequest.post("/posts", newPost);
    },
    onSuccess: () => {
        queryClient.invalidateQueries("posts")
    }
  })
  const handleClick = e =>{
    e.preventDefault()
    mutation.mutate({description})
  }
  return (
    <div className="share">
        <div className="container">
            <div className="top">
                    <img src={currentUser.profilePic} alt="" />
                    <input type="text" placeholder={`what's on your mind ${currentUser.name}?`} onChange={e=>setDescription(e.target.value)}/>
            </div>
                <div className="bottom">
                    <div className="left">
                        <input type="file"  id="file" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])} />
                        <label htmlFor="file">
                            <div className="item">
                                <img src={Image} alt="" />
                                <span>Add Image</span>
                            </div>
                        </label>
                        <div className="item">
                            <img src={Map} alt="" />
                            <span>add Place</span>
                        </div>
                        <div className="item">
                            <img src={Friend} alt="" />
                            <span>Tag Friends</span>
                        </div>
                    </div>
                    <div className="right">
                        <button onClick={handleClick} >Share</button>
                    </div>
                </div>
                
        </div>
    </div>
  )
}

export default Share