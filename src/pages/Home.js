import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bk.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Slazyo's World </h1>
        <p> Shhhhhh</p>
        <Link to="/menu">
          <button> Cool Staff </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;