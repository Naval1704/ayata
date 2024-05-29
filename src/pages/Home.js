import React from "react";
import "./Home.css";

function Home() {
  return (
    <div id="home" className="home-container">
      <div className="home-content">
        <h1 className="main-heading">AI is the BRAIN, IoT is the BODY</h1>
        <h2 className="separator">&</h2>
        <h2 className="sub-heading">We are the CREATORS</h2>
        <p className="description">
          At Ayata Intelligence, we leverage cutting-edge Artificial
          Intelligence (AI) and Internet of Things (IoT) technologies to
          engineer innovative solutions that make a positive impact on the
          world.<br></br> <br></br> Our mission is to seamlessly integrate the
          physical and digital realms, crafting powerful products and services
          that revolutionize industries and enhance lives.
        </p>
        <a href="#products" className="home-link">
          Discover ViShruti™
        </a>
      </div>
      {/* <div className="animation-background"></div> */}
    </div>
  );
}

export default Home;
