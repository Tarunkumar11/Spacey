import './App.css';
import { Layout } from 'antd';
import Navbar from 'components/Navbar/Navbar';
import Home from 'components/Home/Home';
import Destination from 'components/Destination/Destination';
import HomeBackground from 'images/backgrounds/background-home-desktop.jpg'
import DestinationBackground from 'images/backgrounds/background-destination-desktop.jpg'
const { Footer } = Layout;

function App() {
  return (
    <Layout className="App" style={{backgroundImage:`url(${DestinationBackground})`}}>
      <Navbar  />
      <Destination />
      {/* <Footer>Footer</Footer> */}
  </Layout>
    
  );
}

export default App;
