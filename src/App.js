import React from "react";
import Home from './pages/Home';
import NavBar from "./pages/Navbar";
import Cursor from "./pages/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor/>
      <NavBar/>
      <div className="pages">
          <Home/>
      </div>
    </div>
  );
}

export default App;
