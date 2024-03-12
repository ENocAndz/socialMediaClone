import "./leftBar.scss"
import Friends from "../../assets/1.png"
import Groups from "../../assets/2.png"
import Market from "../../assets/3.png"
import Watch from "../../assets/4.png"
import Memories from "../../assets/5.png"
import Events from "../../assets/6.png"
import Gaming from "../../assets/7.png"
import Gallery from "../../assets/8.png"
import Videos from "../../assets/9.png"
import Messages from "../../assets/10.png"
import Fund from "../../assets/11.png"
import Tutorial from "../../assets/12.png"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import { Link } from "react-router-dom";

const LeftBar = () => {
  const {currentUser } = useContext(AuthContext)
  return (
    <div className="sLeftBar">
        <div className="container">
          <div className="menu">
            <div className="userIcon">
              <img src={"/upload/"+ currentUser.profilePic} />
              <Link to={`/profile/${currentUser.id}`} style={{textDecoration:"none", color:"inherit"}}>
                <span className='name'>{currentUser.name}</span>
              </Link>
            </div>
            <div className="item">
              <img src={Friends} alt="friends" />
              <span>Friends</span>
            </div>
            <div className="item">
              <img src={Groups} alt="" />
              <span>Groups</span>
            </div>
            <div className="item">
              <img src={Market} alt="" />
              <span>Marketplace</span>
            </div>
            <div className="item">
              <img src={Watch} alt="" />
              <span>Watch</span>
            </div>
            <div className="item">
              <img src={Memories} alt="" />
              <span>Memories</span>
            </div>
          </div>
          <hr />
          <div className="menu">
            <span>Shortcuts</span>
            <div className="item">
              <img src={Events} alt="events" />
              <span>Events</span>
            </div>
            <div className="item">
              <img src={Gaming} alt="gaming" />
              <span>Gaming</span>
            </div>
            <div className="item">
              <img src={Gallery} alt="Gallery" />
              <span>Gallery</span>
            </div>
            <div className="item">
              <img src={Videos} alt="Videos" />
              <span>Videos</span>
            </div>
            <div className="item">
              <img src={Messages} alt="Messages" />
              <span>Memories</span>
            </div>
          </div>
          <hr />
          <div className="menu">
          <div className="item">
              <img src={Fund} alt="Fund" />
              <span>Fundraiser</span>
            </div>
            <div className="item">
              <img src={Tutorial} alt="Tutorial" />
              <span>Tutorial</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LeftBar