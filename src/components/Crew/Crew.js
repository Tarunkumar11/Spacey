import React from 'react'
import style from 'components/Destination/destination.module.css'
import crewStyle from 'components/Crew/crew.module.css'
import { Layout, Typography} from 'antd';
import ComonderImage from 'images/crew/image-douglas-hurley.png'
const { Content } = Layout;
const { Text, Paragraph}  = Typography

function Crew() {

    const activeStyle = {
        background:"white"
    }    
    return (
        <Content className={crewStyle.crewContent}>
            <div className={crewStyle.crewMemberInfo}>
                <h2 className={style.headText}><Text className={style.mark}>02</Text> Meet your crew</h2>
                <div className={crewStyle.detailsAboutCrewMember}>
                    <h1 className={crewStyle.crewmemberTitle}>Commander</h1>
                    <h1 className={crewStyle.crewmemberName}>Douglas Hurley</h1>
                    <Paragraph className={crewStyle.crewMemberInfoText}>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</Paragraph>
                </div>
                <div className={crewStyle.crosell}>
                    <div className={crewStyle.page} style={activeStyle}></div>
                    <div className={crewStyle.page} ></div>
                    <div className={crewStyle.page} ></div>
                    <div className={crewStyle.page} ></div>
                </div>
            </div>


            <div className={crewStyle.crewMemberImage}>
                <img src={ComonderImage} alt="Douglas" />
            </div>
        </Content>
    )
}

export default Crew
