import "./friends.scss";
import React from 'react'
import { useContext } from 'react';
import { useLocation } from "react-router-dom";
import { AuthContext } from '../../context/authContext';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Friend = () => {
  const {currentUser} = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2])

  const {isPending, error, data} =  useQuery({
    queryKey: ['friend'],
    queryFn: () =>
      makeRequest.get("/friends/find/" + userId).then((res)=>{
        return res.data;
      })
  });

  console.log(data);
  return (
    <div className="container">
        <div className="content">
        <h1>Friends</h1>
            <div className="top">
                <div className="buttons">Suggestions</div>
                <div className="buttons">Your Friends</div>
            </div>
            <div className="body">
                <div className="profiles">
                 <div className="user">
                  {
                    isPending ? "Loading":<>
                    <div className="userInfo">
                      {/* <img src={"/upload/" + data.profilePic} alt="userPic" />
                      <span>{data.name}</span> */}
                    </div>
                    </>}
                  </div>
                </div>
                <h2>Friend requests</h2>
                <div className="request">
                </div>
            </div>
        </div>
    </div>
  )
}

export default Friend