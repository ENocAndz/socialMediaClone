import React, { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';
import { Link } from 'react-router-dom';
import "./conversations.scss";
import moment from "moment";

const Conversations = ({ userId, onSelectConversation }) => {
  const { currentUser } = useContext(AuthContext);
  // Fetch conversations using the useQuery hook
  const { isPending, error, data } = useQuery({
    queryKey: ['conversations', userId],
    queryFn: () =>
      makeRequest.get("/conversations?userId=" + userId).then((res) => res.data),
  });

  

  return (
    <div className='conversations'>
        <div className="chats">
          <div className="chatsBar">
            <h1>Chats</h1>
          </div>
          {isPending ? (
            "Loading..."
          ) : error ? (
            "Something went wrong!"
          ) : (
            data.map((conversation) => (
              <div className="chat-item" key={conversation.id} onClick={() => onSelectConversation(conversation.Conversation_id,userId)}>
                <img className='imgProfilePic' src={conversation.other_user_profile_pic} alt="User"/>
                <div className="chat-details">
                    <p className="chat-name">{conversation.other_user_name}</p>
                    <div className="chatLine">
                        <p className="chat-preview">{conversation.last_message}</p><span className="date">{moment(conversation.last_message_time).fromNow()}</span>
                    </div>
                </div>
              </div>
            ))
          )}
        </div>
    </div>
    
  );
};

export default Conversations;
