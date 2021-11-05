import React, { useState, useEffect } from 'react'
import style from 'components/Destination/destination.module.css'
import crewStyle from 'components/Crew/crew.module.css'
import { Layout, Typography} from 'antd';
import axios from 'axios';
const { Content } = Layout;
const { Text, Paragraph}  = Typography

function Crew() {

    const [crew, setCrew] = useState(null)
    const [index, setIndex] = useState(0)
    useEffect(() => {
        axios.get('data.json').then((response) => {
            setCrew(response.data.crew)
        }).catch((error) => console.log("Something went wrong") )
    }, [])
    const activeStyle = {
        background:"white"
    }   
    
    return (
        crew && <Content className={crewStyle.crewContent}>
            <div className={crewStyle.crewMemberInfo}>
                <h2 className={style.headText}><Text className={style.mark}>02</Text> Meet your crew</h2>
                <div className={crewStyle.detailsAboutCrewMember}>
                    <h1 className={crewStyle.crewmemberTitle}>{crew[index].role}</h1>
                    <h1 className={crewStyle.crewmemberName}>{crew[index].name}</h1>
                    <Paragraph className={crewStyle.crewMemberInfoText}>{crew[index].bio}</Paragraph>
                </div>
                <div className={crewStyle.crosell}>
                    {
                        crew.map((obj, key) => {
                            return <div className={crewStyle.page} onClick = {() => setIndex(key)} style={index === key ?activeStyle:null}></div>
                        })
                    }
                </div>
            </div>
            <div className={crewStyle.crewMemberImage}>
                <img src={crew[index]?.images?.png} alt="Douglas" />
            </div>
        </Content>
    )
}

export default Crew
