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
import Posts from "../../components/posts/Posts"
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";



const Profile = () => {
  
  const {currentUser} = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2])


  const { isPending, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      makeRequest.get("/users/find/" + userId).then((res)=>{
        return res.data;
      })
  });
  console.log(data)

  return (
    <div className="profile">
      {isPending ? "Loading" :<>
      <div className="images">{}
        <img src={data.coverPic} alt="" className="cover" />
        <img src={data.profilePic} alt="" className="profilePic" />
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
            <span>{data.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>{data.city}</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>{data.website}</span>
              </div>
            </div>
            {userId === currentUser.id? (<button>Update</button>):(<button>Follow</button>)}
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>
      </> }
    </div>
  )
}

export default Profile