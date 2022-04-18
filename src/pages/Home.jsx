import React from "react";
import ReactPlayer from "react-player";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Home</h2>

      <ReactPlayer
        className="video-container"
        url="https://vimeo.com/270065619"
        playing={true}
        muted={true}
        width="70%"
      />
    </div>
  );
};

export default Home;