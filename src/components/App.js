import React from "react";
import { FaGithub, FaUserNinja, FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./BackgroundVideo.css";

import videos from "../VJ_LOOP_004_-_2200_hrs_4K_hd.mp4";

const BackgroundVideo = () => {
  return (
    <div class="Container">
      <div className="first">
        <video autoPlay="autoplay" loop="loop" muted className="Video">
          <source src={videos} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <header className="header">
          <img
            src="https://avatars2.githubusercontent.com/u/13748415?s=460&u=8fd252c46e97a8e711d6f17fa6a3e379eb38de2f&v=4"
            alt="profile"
          />
          <div className="actions">
            <button type="button" className="teste btn btn-outline-dark ">
              <FaUserNinja size={20} color="#FFF" /> About.Me
            </button>
            <button type="button" className="btn btn-outline-dark">
              <FaGithub size={18} color="#FFF" />
              <b>Jobs</b>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <FaGithub size={18} color="#FFF" /> Github
            </button>
          </div>
        </header>

        <div className="Content">
          <div className="SubContent">
            <img
              src="https://avatars2.githubusercontent.com/u/13748415?s=460&u=8fd252c46e97a8e711d6f17fa6a3e379eb38de2f&v=4"
              alt="profile"
            />
            <h1>Lucas Barcelos</h1>
            <p>Web developer using React</p>
            <Link To="https://github.com/lucassbarcelos">
              <button
                type="button"
                onClick="redirect('github.com/lucassbarcelos')"
                className="btn btn-outline-dark"
              >
                <FaGithub size={18} color="#FFF" /> Github
              </button>
            </Link>
          </div>
          <FaAngleDoubleDown className="next" size={100} color="#BBB" />
        </div>
      </div>
      <div id="aboutMe">teste</div>
    </div>
  );
};

export default BackgroundVideo;
