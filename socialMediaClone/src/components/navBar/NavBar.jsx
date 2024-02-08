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

const NavBar = () => {
  return (
    <div className="navBar">
        <div className="NleftBar">
          <Link to="/" style={{textDecoration:"none"}}>
            <span>SocialMedia</span>
          </Link>
            <HomeOutlinedIcon/>
            <DarkModeOutlinedIcon/>
            <GridViewOutlinedIcon/>
          
          <div className="search">
            <SearchOutlinedIcon/>
            <input type="text" className="text" placeholder="Search"/>
          </div>
          
        </div>
        <div className="NrightBar">
          <Person2OutlinedIcon/>
          <EmailOutlinedIcon/>
          <NotificationsNoneOutlinedIcon/>
          <div className="userIcon">
            <img src="https://images.pexels.com/photos/17371711/pexels-photo-17371711/free-photo-of-pretty-girl-with-a-yellow-flower-between-her-fingers-as-a-ring.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="girl" />
            <span>Jane Doe</span>
          </div>
        </div>

    </div>
  )
}

export default NavBar