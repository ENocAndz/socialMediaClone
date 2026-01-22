import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import moment from 'moment';
import './chat.scss';

const Chat = ({ conversationId, onBack, userId }) => {
    console.log("userIdchat:", userId); 
  const { isPending, error, data } = useQuery({
    queryKey: ['chatMessages', conversationId],
    queryFn: () =>
      makeRequest
        .get(`/chats?conversationId=${conversationId}&userId=${userId}`)
        .then((res) => res.data),
  });

  return (
    <div className="chat-interface">
        {/* Chat Header */}
        <div className="chat-header" key={userId}>
            <img className='imgProfilePic' src={data && data[0]?.other_user_profile_pic ? data[0].other_user_profile_pic : "Loading..."} alt="User"/>
            <span>
                {data && data[0]?.other_user_name ? data[0].other_user_name : "Loading..."}
            </span>
            <span className="back-button" >Back</span>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
            {isPending ? (
                "Loading..."
            ) : error ? (
                "Something went wrong"
            ) : (
                data.map((message) => (
                    <div className={`messageDiv ${message.sender_id != userId ? 'sent' : 'received'}`}>
                        <img src={message.other_user_profile_pic} alt="" className={`chatImg ${message.sender_id != userId ? 'sent' : 'received'}`}/>
                        <div key={message.id} className={`message ${message.sender_id != userId ? 'sent' : 'received'}`}>
                            
                            {message.message_text}
                            {/**
                            <span className='time'>
                                {moment(message.createdAt).format('hh:mm: A')}
                            </span> */}
                        </div>
                    </div>
                ))
            )}
        </div>

        {/* Chat Input */}
        <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
        </div>
    </div>
  )
}

export default Chat;