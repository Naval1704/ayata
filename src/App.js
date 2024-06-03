// App.js
import React from "react";
import Home from './pages/Home';
import NavBar from './pages/Navbar';
// import Cursor from './pages/Cursor';
import Services from './pages/Services';
import Products from './pages/Products';
import Training from './pages/Training';
import Achievements from './pages/Achievements';
import Team from './pages/Team';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Client from './pages/Client';
import Footer from './pages/Footer';
import ShootingStar from "./pages/ShootingStar";

function App() {
  return (
    <div className="App">
      <ShootingStar />
      {/* <Cursor/> */}
      <NavBar/>
      <div className="pages">
          <Home/>
          <Training/>
          <Services/>
          <Products/>
          <Achievements/>
          <Team/>
          <Client/>
          <Career/>
          <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
