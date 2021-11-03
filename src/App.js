import './App.css';
import { Layout } from 'antd';
import Navbar from 'components/Navbar/Navbar';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Navbar  />
      <Content>Content</Content>
      <Footer>Footer</Footer>
  </Layout>
    
  );
}

export default App;
