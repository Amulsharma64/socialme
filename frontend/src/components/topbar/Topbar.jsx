import "./topbar.css";
import {Search, Person, Chat , Notifications} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Topbar() {
  const {user} = useContext(AuthContext);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Socialme</span>
        </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
              <Search className="searchIcon"/>
              <input placeholder="search for friend, post or video" 
              className="searchInput"/>
            </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
              <span className="topbarLink">Home</span>
              <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
                  <Person/>
                  <span className="topbarIconsBadge">1</span>
            </div>
            <div className="topbarIconItem">
                  <Chat/>
                  <span className="topbarIconsBadge">2</span>
            </div>
            <div className="topbarIconItem">
                  <Notifications/>
                  <span className="topbarIconsBadge">1</span>
            </div>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img 
            src=
            {
              user.profilePicture ? 
              publicFolder + user.profilePicture
              :publicFolder+"noAvtar.png"
            } 
              alt="" 
              className="topbarImg"
              />
          </Link>
        </div>
    </div>
  )
}

export default Topbar
