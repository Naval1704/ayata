import React from "react";
import "./Home.css";
// import homeBackground from '../pages/background_Image/home.jpg';

function Home() {
  return (
    <div id="home" className="home-container">
      {/* <img className="background-image-home" src={homeBackground}></img> */}
      <div className="home-content">
        <h1 className="main-heading"><span className="tech">AI</span> is the <spann className='us'>BRAIN</spann></h1>
        <div className="fine">
          <h1 className="main-heading"><span className="tech">IOT</span> is the <span className='us'>BODY</span></h1>
          <h2><span className="separator">&</span></h2>
        </div>
        <h2 className="sub-heading"><span className="tech">We</span> are the <span className='us'>CREATORS</span></h2>
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
