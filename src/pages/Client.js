import React from 'react';
import '../pages/Client.css';
import clientImage1 from '../pages/assets/Cyrrup-Logo.png'; // Assuming you have client images
import clientImage2 from '../pages/assets/upgrad.svg';
// import clientImage3 from '../pages/assets/client3.jpg';

function Client() {
  const clients = [
    {
      name: 'Cyrrup solutions pvt ltd.',
      description: 'Description about Client 1 goes here.',
      image: clientImage1,
    },
    {
      name: 'UpGrad',
      description: 'Provided them complete Lecture series on Machine Learning Deployment',
      image: clientImage2,
    },
    // {
    //   name: 'Client 3',
    //   description: 'Description about Client 3 goes here.',
    //   image: clientImage3,
    // },
    // Add more clients here
  ];

  return (
    <div className="client-container">
      <h1>Our Clients</h1>
      <div className="client-card-container">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <div className="client-image-container">
              <img src={client.image} alt={client.name} className="client-image" />
            </div>
            <div className="client-details">
              <h2>{client.name}</h2>
              <p>{client.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Client;
