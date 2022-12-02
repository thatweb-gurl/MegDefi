import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Developers from "./component/Developers";
import Subscribe from "./component/Subscribe";
import Footer from "./component/Footer";



function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <About />
     <Developers />
     <Subscribe />
     <Footer />
    </div>
  );
}

export default App;
