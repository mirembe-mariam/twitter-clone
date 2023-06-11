import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"
function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className="post">
        <div className='post__avatar'>
            <Avatar src="https://pbs.twimg.com/profile_images/1133483069925675009/1E83gfMJ_400x400.jpg"/>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        Mirembe Mariam{""}<span className="post__headerSpecial"> <VerifiedUserIcon className="post__badge"/>@mirembe</span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>Building a twitter clone</p>
                </div>
            </div>
            <img src="https://i.pinimg.com/564x/e9/12/63/e9126301e86d2c22ba1267a420c54ec8.jpg" alt="twitter"/>
            <div className='post__footer'>
                <ChatBubbleOutlineIcon fontSize="small"/>
                <RepeatIcon fontSize="small"/>
                <FavouriteBorderIcon fontSize="small"/>
                <PublishIcon fontSize="small"/>
            </div>
        </div>
        </div>
  )
}

export default Post