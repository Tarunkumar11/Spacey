import './App.css';
import { Layout } from 'antd';
import Navbar from 'components/Navbar/Navbar';
import Home from 'components/Home/Home';
import Destination from 'components/Destination/Destination';
import Crew from 'components/Crew/Crew';
import Technology from 'components/Technology/Technology';
import HomeBackground from 'images/backgrounds/background-home-desktop.jpg'
import DestinationBackground from 'images/backgrounds/background-destination-desktop.jpg'
import CrewBackground from 'images/crew/background-crew-desktop.jpg'
import TechnologyBackground from 'images/technology/background-technology-desktop.jpg'
const { Footer } = Layout;

function App() {
  return (
    <Layout className="App" style={{backgroundImage:`url(${TechnologyBackground})`}}>
      <Navbar  />
      <Technology />
      {/*
        <Crew />
        <Destination />
       <Footer>Footer</Footer> */}
  </Layout>
    
  );
}

export default App;
