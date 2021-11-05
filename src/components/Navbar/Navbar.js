import React from 'react'
import style from 'components/Navbar/index.module.css'
import { Layout, Menu , Typography, Divider } from 'antd';
import Logo from 'images/icon/logo.svg'
import HomeBackground from 'images/backgrounds/background-home-desktop.jpg'
import DestinationBackground from 'images/backgrounds/background-destination-desktop.jpg'
import CrewBackground from 'images/crew/background-crew-desktop.jpg'
import TechnologyBackground from 'images/technology/background-technology-desktop.jpg'
import { Link, useHistory } from 'react-router-dom';

const { Text } = Typography;
const { Header } = Layout


function Navbar({ handleBackgroundImage }) {
    const history = useHistory()    
    
    const NavItemStyle = { 
        fontSize:"20px", 
        letterSpacing:"2px",
        color:'white'
    }

    const handleMenuItemClick = (key) => {

        switch(key){
            case "home":{
                    handleBackgroundImage(HomeBackground)
                    history.push('/')
                    break
                }
            case "destination":{
                    handleBackgroundImage(DestinationBackground)
                    history.push('/destination')
                    break
                }
            case "crew":{
                    handleBackgroundImage(CrewBackground)
                    history.push('/crew')
                    break
                }
            case "technology":{
                    handleBackgroundImage(TechnologyBackground)
                    history.push("technology")
                    break
                }
            default:
                {
                return

                }
        }
    }

    return (
        <Header className={style.spaceHeader}>
             <div className={style.logo}>
                <img src={Logo} alt="Logo" />
             </div>
            <div className={style.line} ></div>
            <Menu theme="light" mode="horizontal" className={style.navList} defaultSelectedKeys={['home']} onClick={(item) => {handleMenuItemClick(item.key)}}>
                <Menu.Item key="home"><Text strong  style={NavItemStyle}>00</Text> <Text style={NavItemStyle}>Home</Text></Menu.Item> 
                <Menu.Item key="destination"> <Text strong  style={NavItemStyle}>01</Text> <Text style={NavItemStyle}>Destination</Text></Menu.Item>
                <Menu.Item key="crew">        <Text strong style={NavItemStyle}>02</Text>  <Text style={NavItemStyle}>Crew</Text></Menu.Item>
                <Menu.Item key="technology">        <Text strong style={NavItemStyle}>03</Text>  <Text style={NavItemStyle}> Techmology</Text></Menu.Item>
            </Menu>
        </Header>
    )
}

export default Navbar
