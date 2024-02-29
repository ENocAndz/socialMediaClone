import "./profile.scss"
import FacebookIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Posts from "../../components/posts/Posts"
const Profile = () => {
  const {currentUser } = useContext(AuthContext)
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/133633/pexels-photo-133633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="cover" />
        <img src={currentUser.profilePic} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com"><FacebookIcon fontSize="large"/></a>
            <a href="http://instagram.com"><InstagramIcon fontSize="large"/></a>
            <a href="http://X.com"><XIcon fontSize="large"/></a>
            <a href="http://Linkedin.com"><LinkedInIcon fontSize="large"/></a>
            <a href="http://Pinterest.com"><PinterestIcon fontSize="large"/></a>
          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>SMC</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile