import React from "react";
import Home from './pages/Home';
import NavBar from './pages/Navbar';
import Cursor from './pages/Cursor';
import Services from './pages/Services';
import Products from './pages/Products';
import Training from './pages/Training';
import Achievements from './pages/Achievements';
import Team from './pages/Team';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Client from './pages/Client';
import Footer from './pages/Footer';
// import Stars from "./pages/Stars";
function App() {
  return (
    <div className="App">
      {/* <Stars/> */}
      <Cursor/>
      <NavBar/>
      <div className="pages">
          <Home/>
          <Services/>
          <Products/>
          <Training/>
          <Achievements/>
          <Team/>
          <Career/>
          <Client/>
          <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
