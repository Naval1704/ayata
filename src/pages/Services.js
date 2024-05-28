import React from "react";
import "./Services.css";
import AIImage from "../pages/assets/ai.jpg";
import IoTImage from "../pages/assets/iot.jpg";

function Services() {
  return (
    <div id="services" className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="content">
        <div className="service">
          <img src={AIImage} alt="Artificial Intelligence" />
          <div className="service-content">
            <h2>Artificial Intelligence</h2>
            <p>
              With the increase in the deep, dense and diverse data, information
              technology has evolved from indexing and interpretation era to
              intelligence era. Artificial Intelligence is coming into our lives
              more than ever before and is becoming ubiquitous rapidly. Be it
              Computer Vision, Natural Language Processing, Speech and Signal
              Processing, Data Analytics or Business Intelligence, we help
              organizations to investigate complex business problems in various
              domains using Machine Learning and Artificial Intelligence and
              help them moving from Data to Decisions.
            </p>
          </div>
        </div>
        <div className="service">
          <img src={IoTImage} alt="Internet of Things" />
          <div className="service-content">
            <h2>Internet of Things (IoT)</h2>
            <p>
              In this era of rapid innovation, we don’t just follow changing
              trends but believe in getting our hands dirty to experiment,
              create, break, analyze and improve. Be it designing Printed
              Circuit Boards, designing wearable tech solutions, advanced
              robotics or IoT product for a smart city scale application, we
              help realize the full potential of your idea through cutting edge
              product engineering services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
