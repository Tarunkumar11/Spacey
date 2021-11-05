import './App.css';
import React, { useState } from 'react'
import { Layout } from 'antd';
import Navbar from 'components/Navbar/Navbar';
import Home from 'components/Home/Home';
import Destination from 'components/Destination/Destination';
import Crew from 'components/Crew/Crew';
import Technology from 'components/Technology/Technology';
import HomeBackground from 'images/backgrounds/background-home-desktop.jpg'
import { BrowserRouter as Router, Route, } from "react-router-dom";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(HomeBackground)
  const handleBackgroundImage = (image) => {
      setBackgroundImage(image)
  }
  
  return (
    <Layout className="App" style={{backgroundImage:`url(${backgroundImage})`}}>
      <Router>
          <Navbar  handleBackgroundImage={handleBackgroundImage}/>
          <Route exact path="/" component={Home} />  
          <Route exact path="/crew" component={Crew} />
          <Route exact path="/technology" component={Technology} /> 
          <Route exact path="/destination" component={Destination} />
      </Router>
    </Layout>
  );
}

export default App;
