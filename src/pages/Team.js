import React from 'react';
import './Team.css';
import sanchit from "../pages/assets/founder-sanchit.jpg";
import arpit from "../pages/assets/founder-arpit.jpg";
import mamatha from "../pages/assets/advisor-mamatha.jpg";

// Sample team data
const teamMembers = [
  {
    name: "Sanchit Agarwal",
    role: "Consultant",
    image: sanchit,
    linkedin: "https://www.linkedin.com/in/sanchit-aggarwal/"
  },
  {
    name: "Arpit Jain",
    role: "Advisor",
    image: arpit,
    linkedin: "https://www.linkedin.com/in/jarpit91/"
  },
  {
    name: "Dr Mamatha Raghu",
    role: "Advisor",
    image: mamatha,
    linkedin: "https://www.linkedin.com/in/mamatha-alugubelly-9b36b0124/?originalSubdomain=in"
  },
];

function Team() {
  return (
    <div id='team' className="team-section">
      <h2 className="team-heading">Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-member-link">
              <span className='linkedin'>LinkedIn</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
