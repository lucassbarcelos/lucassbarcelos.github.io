import React from "react";
import { FaGithub } from "react-icons/fa";

import "./BackgroundVideo.css";

import videos from "../VJ_LOOP_004_-_2200_hrs_4K_hd.mp4";

const BackgroundVideo = () => {
  return (
    <div className="Container">
      <video autoPlay="autoplay" loop="loop" muted className="Video">
        <source src={videos} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="Content">
        <div className="SubContent">
          <img
            src="https://avatars2.githubusercontent.com/u/13748415?s=460&u=8fd252c46e97a8e711d6f17fa6a3e379eb38de2f&v=4"
            alt="profile"
          />
          <h1>Lucas Barcelos</h1>
          <p>Web developer using React</p>
          <button type="button" className="btn btn-outline-dark">
            <FaGithub size={18} color="#FFF" /> Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
