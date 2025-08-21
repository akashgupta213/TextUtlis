import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { use, useState } from "react";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (Message, type) => {
    setalert({
      msg: Message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 5000);
  }; //here the alert is an object
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("dark mode hass been enable", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Hi"
      // }, 3000);
      // setInterval(() => {
      //   document.title = "Hello"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Bye"
      // }, 4000);//not a good user experience.
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode hass been enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    // <Router>
    <>
    
      {/* <Navbar title = "Textutils2" link = "LINK"/> */}
      {/* <Navbar> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Routes>
        <Route excat path="/" element={ */}
      {/* <div className="container"> */}
        <TextForm heading="Enter the text to analyse" showAlert={showAlert} />
      {/* </div>
    }
  /> */}


  {/* /users -->component1 
  /users/hello-->component2 
  this the react router dom will consider both the path as same if /users is passed*/}

  
        {/* <Route excat path="/about" 
          element = {<About/>}
        />
      </Routes>
    
    </>
  </Router> */}
  </>
  );
}

export default App;
