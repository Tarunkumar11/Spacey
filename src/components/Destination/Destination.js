import React from 'react'
import style from 'components/Destination/destination.module.css'
import { Layout,Menu, Typography, Divider} from 'antd';
import MoonImage from 'images/destination/image-moon.png'
const { Content } = Layout;
const { Title, Text, Paragraph}  = Typography

function Destination() {

    // const PlanetDetails = ({}) => {

    // }

    const NavItemStyle = { 
        fontSize:"20px", 
        letterSpacing:"2px",
        color:'white',
        
        
    }
    return (
        <Content className={style.destinationContent}>
            <h2 className={style.headText}><Text className={style.mark}>01</Text> Pick your destination</h2>
            <div className={style.planetInfo}>
                <div className={style.planetImage}>
                    <img src={MoonImage} alt="moon" />
                </div>

                <div className={style.explore} >
                    <Menu theme="light" mode="horizontal" className={style.navList} defaultSelectedKeys={['home']}>
                        <Menu.Item key="home">        <Text style={NavItemStyle}>Moon</Text></Menu.Item>
                        <Menu.Item key="destination"> <Text style={NavItemStyle}>Mars</Text></Menu.Item>
                        <Menu.Item key="crew">        <Text style={NavItemStyle}>Europa</Text></Menu.Item>
                        <Menu.Item key="tech">        <Text style={NavItemStyle}>Titan</Text></Menu.Item>
                    </Menu>
                    <div className={style.detailsAboutPlanet}>
                        <h1 className={style.planetName}>Moon</h1>
                        <Paragraph className={style.planetInfoText}>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</Paragraph>
                        <Divider />

                        <div className={style.distanceTime}>
                            <div className={style.distance}>
                                <h3 className={style.distanceText}>AVG. DISTANCE</h3>
                                <h1 className={style.distanceValue}>384,400 km</h1>
                            </div>

                            <div className={style.time}>
                                <h3 className={style.distanceText}>Est. travel time</h3>
                                <h1 className={style.distanceValue}>3 days</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Content>
    )
}

export default Destination
