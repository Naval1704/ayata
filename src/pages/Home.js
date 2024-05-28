import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>AI is the BRAIN, IoT is the BODY</h1>
        <h2 style={{fontSize:'35px'}}>&</h2>
        <h2>We are the CREATORS</h2>
        <p>
          At Ayata Intelligence, we leverage Artificial Intelligence (AI) and Internet of Things (IoT) technologies to create innovative solutions with a positive impact. Our mission is to seamlessly integrate the physical and digital worlds through powerful products and services.
        </p>
        <a href="#products" className="home-link">Explore ViShruti™</a>
      </div>
      <div className="animation-background"></div>
    </div>
  );
}

export default Home;
