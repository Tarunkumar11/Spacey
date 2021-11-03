import React from 'react'
import style from 'components/Navbar/index.module.css'
import { Layout, Menu , Typography, Divider } from 'antd';
import Logo from 'images/icon/logo.svg'
const { Text } = Typography;
const { Header } = Layout

// {new Array(15).fill(null).map((_, index) => {
//     const key = index + 1;
//     return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
// })}
function Navbar() {

    const NavItemStyle = { 
        fontSize:"20px", 
        letterSpacing:"2px",
        color:'white'
    }
    return (
        <Header className={style.spaceHeader}>
             <div className={style.logo}>
                <img src={Logo} alt="Logo" />
             </div>
            <div className={style.line} ></div>
            <Menu theme="light" mode="horizontal" className={style.navList} defaultSelectedKeys={['home']}>
                <Menu.Item key="home">        <Text strong  style={NavItemStyle}>00</Text> <Text style={NavItemStyle}>Home</Text></Menu.Item>
                <Menu.Item key="destination"> <Text strong  style={NavItemStyle}>01</Text> <Text style={NavItemStyle}>Destination</Text></Menu.Item>
                <Menu.Item key="crew">        <Text strong style={NavItemStyle}>02</Text>  <Text style={NavItemStyle}>Crew</Text></Menu.Item>
                <Menu.Item key="tech">        <Text strong style={NavItemStyle}>03</Text>  <Text style={NavItemStyle}> Techmology</Text></Menu.Item>
            </Menu>
                
      </Header>
    )
}

export default Navbar
