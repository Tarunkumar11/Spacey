import React from 'react'
import style from 'components/Technology/technology.module.css'
import crewStyle from 'components/Crew/crew.module.css'
import { Layout,Menu, Typography, Divider} from 'antd';
import TechpicOne from 'images/technology/image-spaceport-portrait.jpg'
const { Content } = Layout;
const { Title, Text, Paragraph}  = Typography

function Technology() {
    const activeStyle = {
        background:"white",
        color:"black"
        
    }
    return (
        <Content className={style.crewContent}>
            <h2 className={style.headText}><Text className={style.mark}>02</Text> SPACE LAUNCH 101</h2>
            <div className={style.technologyInfo}>    
                <div className={style.detailsAboutTech}>
                    <div className={style.crosell}>
                        <div className={style.page} style={activeStyle}>1</div>
                        <div className={style.page} >2</div>
                        <div className={style.page} >3</div>
                        
                    </div>

                    <div className={style.detailsAboutTechPlans}>
                        <h1 className={style.techTitle}>THE TERMINOLOGY…</h1>
                        <h1 className={crewStyle.crewmemberName}>SPACEPORT</h1>
                        <Paragraph className={crewStyle.crewMemberInfoText}>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</Paragraph>
                    </div>
                </div>

                <div className={style.crewMemberImage}>
                    <img src={TechpicOne} alt="Douglas" />
                </div>
            </div>
        </Content>
    )
}

export default Technology
