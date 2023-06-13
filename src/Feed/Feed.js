import React from "react";
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post.js";
function Feed() {
  return (
    <div className="feed">
      {/*header*/}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      <Post
        displayName="mirembe"
        username="mariam"
        verified={true}
        text="helllooo"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlsrfLijSsbN3B2gZFOMeuhpr9wWb7x5uQQ&usqp=CAU"
        image="https://i.pinimg.com/564x/e9/12/63/e9126301e86d2c22ba1267a420c54ec8.jpg"
      />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
