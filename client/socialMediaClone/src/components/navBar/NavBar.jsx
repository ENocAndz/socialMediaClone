import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext,useState } from "react";
import { AuthContext } from "../../context/authContext";
import Conversations from '../conversations/Conversations';
import Chat from "../chats/Chat";

const NavBar = () => {
  const {toggle,darkMode} = useContext(DarkModeContext)
  const {currentUser } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedConversationId, setSelectedConversationId] = useState(null);
  const [selectedUserId, setUserId] = useState(null);
  
  const toggleChats = () => {
    setIsOpen(!isOpen);
  }
  

  const handleSelectConversation = (conversationId,userId) =>{
    setSelectedConversationId(conversationId);
    setUserId(userId);
  }

  const handleBackToConversations = () =>{
    setSelectedConversationId(null);
  }


  return (
    <div className="navBar">
        <div className="NleftBar">
          <Link to="/" style={{textDecoration:"none"}}>
            <span>SocialMedia</span>
          </Link>
          <Link to="/" style={{textDecoration:"none", color:"inherit", height:"100%", display:"flex",} }>
            <HomeOutlinedIcon />
          </Link>
            {darkMode ? ( <WbSunnyOutlinedIcon onClick={toggle}  style={{cursor:"pointer"}}/>)
            :(
              <DarkModeOutlinedIcon onClick={toggle} style={{cursor:"pointer"}}/>
            )}
            <GridViewOutlinedIcon/>
          
          <div className="search">
            <SearchOutlinedIcon/>
            <input type="text" className="text" placeholder="Search"/>
          </div>
          
        </div>
        <div className="NrightBar">
          <Person2OutlinedIcon/>
          <EmailOutlinedIcon onClick={toggleChats} style={{cursor: "pointer"}}/>
          <NotificationsNoneOutlinedIcon/>
          <div className="userIcon">
            <img src={"/upload/"+ currentUser.profilePic} alt="girl" />
            <Link to={`/profile/${currentUser.id}`} style={{textDecoration:"none", color:"inherit"}}>
              <span className='name'>{currentUser.name}</span>
            </Link>
          </div>
        </div>
        
        {isOpen && (
          <>
            {selectedConversationId ? (
              <Chat conversationId={selectedConversationId}
              onBack={handleBackToConversations} userId={selectedUserId}/>
            ): (
              <Conversations userId={currentUser.id}  onSelectConversation={handleSelectConversation}/>
            )}
          </>
        )}
        

    </div>
  );
}

export default NavBar