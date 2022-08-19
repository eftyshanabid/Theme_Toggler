
import { ErrorBoundary } from "react-error-boundary";
// import Carousel from "./components/Carousel";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar";
import Fallback from "./components/Fallback";
import React, { useState } from 'react';


function App() {

  //cart objects

  const cart1 = {
    link: "https://fs.hubspotusercontent00.net/hubfs/6426302/Imported_Blog_Media/263a75529a1752b75d64f9f21fd07c92-3-2.jpg",
    header: "Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website"
  }
  const cart2 = {
    link: "https://codecondo.com/wp-content/uploads/2017/09/What-is-back-end-development.jpg",
    header: "Back-end development means working on server-side software, which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers."
  }
  const cart3 = {
    link: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png",
    header: "A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well."
  }

  //error handler
  const errorHandler = (error, errorInfo) => {
    console.log("logging", error, errorInfo);
  }

  //mode state
  const [mode, setMode] = useState('light');
  //toggle function
  const toggleMode =()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (

    <>
      <Navbar title="Course Café" mode={mode} toggleMode={toggleMode}/>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <ImageCard cart1={cart1} cart2={cart2} cart3={cart3} mode={mode}/>
      </ErrorBoundary>
    </>
  );
}

export default App;
