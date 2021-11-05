import React, { useState, useEffect } from 'react'
import style from 'components/Destination/destination.module.css'
import { Layout,Menu, Typography, Divider} from 'antd';
import axios from 'axios';
const { Content } = Layout;
const { Text, Paragraph}  = Typography




function Destination() {

    const [planets, setPlanets] = useState(null)
    const [currentPlanet, setCurrentPlanet] = useState(null)
    const NavItemStyle = { 
        fontSize:"20px", 
        letterSpacing:"2px",
        color:'white',
    }
    useEffect(() => {
        axios.get('data.json').then((response) => {
            setPlanets(response.data.destinations)
            setCurrentPlanet(response.data.destinations.filter(obj => obj.name === "Moon")[0])

        }).catch((error) => console.log("Something went wrong") )
    }, [])


    return (
        currentPlanet && <Content className={style.destinationContent}>
            <h2 className={style.headText}><Text className={style.mark}>01</Text> Pick your destination</h2>
            <div className={style.planetInfo}>
                <div className={style.planetImage}>
                    <img src={currentPlanet.images.png} alt="moon" />
                </div>

                <div className={style.explore} >
                    <Menu theme="light" mode="horizontal" className={style.navList} defaultSelectedKeys={['home']} inlineCollapsed={false} onClick={({key}) => {setCurrentPlanet(planets.filter(obj => obj.name === key)[0])} }>
                        <Menu.Item key="Moon">        <Text style={NavItemStyle}>Moon</Text></Menu.Item>
                        <Menu.Item key="Mars"> <Text style={NavItemStyle}>Mars</Text></Menu.Item>
                        <Menu.Item key="Europa">        <Text style={NavItemStyle}>Europa</Text></Menu.Item>
                        <Menu.Item key="Titan">        <Text style={NavItemStyle}>Titan</Text></Menu.Item>
                    </Menu>
                    <div className={style.detailsAboutPlanet}>
                        <h1 className={style.planetName}>{currentPlanet.name}</h1>
                        <Paragraph className={style.planetInfoText}>{currentPlanet?.description}</Paragraph>
                        <Divider />

                        <div className={style.distanceTime}>
                            <div className={style.distance}>
                                <h3 className={style.distanceText}>AVG. DISTANCE</h3>
                                <h1 className={style.distanceValue}>{currentPlanet?.distance}</h1>
                            </div>

                            <div className={style.time}>
                                <h3 className={style.distanceText}>Est. travel time</h3>
                                <h1 className={style.distanceValue}>{currentPlanet?.travel}</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Content>
    )
}

export default Destination
