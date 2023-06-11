import React from 'react'
import "./Sidebar.css"
import SidebarOption from '../SidebarOption/SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
function Sidebar() {
  return (
    <div className='sidebar'>
        
        <TwitterIcon/>

         <SidebarOption Icon={HomeIcon} text="home"/>
         <SidebarOption Icon={SearchIcon} text="Explore"/>
         <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
         <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
         <SidebarOption Icon={ListAltIcon} text="Lists"/>
         <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
         <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
         <SidebarOption Icon={MoreHorizIcon} text="More"/>
         
         
         {/*Button..Tweet*/}
    </div>
  )
}

export default Sidebar