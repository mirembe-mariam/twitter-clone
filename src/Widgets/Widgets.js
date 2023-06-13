import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h3>What`s happening</h3>
        {/*<TwitterTweetEmbed tweetId={"1668017726609149958"} />*/}
        <TwitterTweetEmbed tweetId={"1667936979474939904"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="mar_mirembe"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://github.com/mirembe-mariam?tab=projects"}
          options={{ text: "reactjs is awesome", via: "mar_mirembe" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
