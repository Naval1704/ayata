import React from "react";
import "./Products.css";
import aiIcon from "../pages/assets/ai_use.png"; // Placeholder for AI icon
import userIcon from "../pages/assets/user_friendly.png"; // Placeholder for user icon
import timeIcon from "../pages/assets/time_management.png"; // Placeholder for time icon
import costIcon from "../pages/assets/money.png"; // Placeholder for cost icon
import collaborationIcon from "../pages/assets/collaboration.png"; // Placeholder for collaboration icon
import ViShruti_img from "../pages/assets/Vishruti_device.png";
import img1 from "../pages/assets/ml_im1.png";

function Products() {
  return (
    <div id="products" className="products-page">
      <h1 className="main-heading">Products by Us</h1>
      <div className="content-wrapper">
        <h2 className="product-heading">ViShruti™</h2>
        <p className="product-subheading">
          Seeing through Listening. A smart eyewear for the visually
          differently-abled.
        </p>
        <div className="upper-mid">
          <section className="product-section">
            <h2>Inspiration - Origination of Idea!</h2>
            <p className="product-description">
              Over 285 million people worldwide are visually impaired, a number
              expected to double by 2020 due to demographic changes, according
              to WHO (2010). Current tools available for the visually impaired
              are often basic, bulky, expensive, or inefficient, highlighting a
              significant need for better solutions.
            </p>
          </section>
          <section className="product-overview">
            <h2>Insight - An Overview of ViShruti™</h2>
            <p className="product-description">
              Our product, ViShruti™ is a wearable smart eyewear that has
              assistive artificial intelligence capabilities for the visually
              differently-abled.
            </p>
          </section>
        </div>
        <img
          src={ViShruti_img}
          alt="ViShruti Device"
          className="visruti-image"
        />
        {/* <p>Our product, ViShruti™ is a wearable smart eyewear that has assistive artificial intelligence capabilities for the visually differently-abled.</p> */}

        <div className="right-content">
          <div className="additional-images">
            <img src={img1} alt="Feature 1" />
          </div>
          <p className="product-description1">
            It provides a comprehensive understanding of the environment,
            assisting the visually differently-abled to navigate independently,
            search and manipulate objects, and provide facial recognition
            capabilities, thus leading an independent and digitally connected
            life.
          </p>
          <div class="video-container">
            <div class="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/Mad8x4azJjc"
                title="ViShruti™ Smart Eyewear for Visually Differently abled"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div class="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/ik5HO4VjMsk"
                title="ViShruti™ Seeing through Listening Ayata Intelligence"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <section className="product-differentiators">
          <h2>Why ViShruti™?</h2>
          <div className="differentiators-grid">
            <div className="differentiator">
              <img src={aiIcon} alt="AI Icon" />
              <p>Uses Artificial Intelligence</p>
            </div>
            <div className="differentiator">
              <img src={userIcon} alt="User Icon" />
              <p>User friendly in small form factor</p>
            </div>
            <div className="differentiator">
              <img src={timeIcon} alt="Time Icon" />
              <p>Efficient time management</p>
            </div>
            <div className="differentiator">
              <img src={costIcon} alt="Cost Icon" />
              <p>Less expensive compared to competitors</p>
            </div>
            <div className="differentiator">
              <img src={collaborationIcon} alt="Collaboration Icon" />
              <p>Encourages collaboration & data sharing</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Products;
