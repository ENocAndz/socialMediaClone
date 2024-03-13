import React from 'react'
import { useContext } from 'react';
import { useLocation } from "react-router-dom";
import { AuthContext } from '../../context/authContext';
import "./friends.scss";

const Friend = () => {
  const {currentUser} = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2])
  return (
    <div className="container">
        <h1>Friends</h1>
        <div className="content">

            <div className="top">
                <div className="buttons">Suggestions</div>
                <div className="buttons">Your Friends</div>
            </div>
            <div className="body">
                <h2>Friend requests</h2>
                <div className="request">
                </div>
            </div>
        </div>
    </div>
  )
}

export default Friend