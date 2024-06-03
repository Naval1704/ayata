import React from "react";
import "./Achievements.css";
import ach1 from "../pages/assets/180123_IWC_HalloFame201816.png";
import ach2 from "../pages/assets/Maker-Lab_shartup_demo_photo1-1024x683.webp";
import ach3 from "../pages/assets/vishruti_big_1510038409767.webp";
import ach4 from "../pages/assets/MassChallenge-NATO-Announcement-Blog.png";

function Achievements() {
  const achievements = [
    {
      image: ach1,
      title: "INNOVATION WORLD CUP*",
      description:
        "ViShruti™ is an award-winning AI-powered smart eyewear for the visually impaired, enhancing navigation, object manipulation, and facial recognition. Winner of the Innovation World Cup 2018 Hall of Fame, it empowers users to live independently and stay connected.",
      link: "https://www.innovationworldcup.com/finalist/ayata-intelligence/",
    },
    {
      image: ach3,
      title: "From Wall Art to Talking Glasses",
      description:
        "First place went to Ayata Intelligence",
      link: "https://www.gadgets360.com/wearables/features/intel-india-hardware-startups-sine-dst-plugin-1772161",
    },
    {
      image: ach2,
      title: "Graduate of Intel India Maker Lab's 2nd Batch",
      description:
        "Intel India Maker Lab Is An Accelerator Programme For Hardware Startups By Intel India, DST And SINE IITB,",
      link: "https://inc42.com/buzz/intel-india-maker-lab-startups-accelerator/",
    },
    {
      image: ach4,
      title: "MassChallenge Switzerland 2017 Finalists",
      description:
        "Ayata Intelligence (P) Ltd. (India) Making AI products and services that create a positive impact.",
      link: "https://masschallenge.org/news/masschallenge-switzerland-announces-2017-class/",
    },
    // Add more achievements here
  ];

  return (
    <div id="achievements" className="achievements-container">
      <h1>Achievements</h1>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <a
            key={index}
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link"
          >
            <div key={index} className="achievement-card">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="achievement-image"
              />
              <h2>{achievement.title}</h2>
              <p>{achievement.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Achievements;