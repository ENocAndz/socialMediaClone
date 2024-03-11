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
import { useQuery,useQueryClient,useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import Update from "../../components/update/Update";



const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false)
  
  const {currentUser} = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2])


  const { isPending, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      makeRequest.get("/users/find/" + userId).then((res)=>{
        return res.data;
      })
  });
  const { isLoading: rIsLoading, data:relationshipData } = useQuery({
    queryKey: ['relationship'],
    queryFn: () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res)=>{
        return res.data;
      })
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (following)=>{
      if(following) return makeRequest.delete("/relationships?userId="+ userId);
      return makeRequest.post("/relationships", {userId});
    },
      onSuccess: () => {
        queryClient.invalidateQueries("relationship");
      }
  })
    

    const handleFollow = () =>{
        mutation.mutate(relationshipData.includes(currentUser.id))
    }

  return (
    <div className="profile">
      {isPending ? "Loading" :<>
      <div className="images">{}
        <img src={"/upload/" + data.coverPic} alt="" className="cover" />
        <img src={"/upload/" + data.profilePic} alt="" className="profilePic" />
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
            {rIsLoading ? "Loading": userId === currentUser.id? (
            <button onClick={()=>setOpenUpdate(true)}>Update</button>
            ):(
            <button onClick={handleFollow}>{relationshipData.includes(currentUser.id) ? "Following" : "Follow"}</button>
            )}
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon />
          </div>
        </div>
        <Posts userId={userId}/>
      </div>
      </> }
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  )
}

export default Profile