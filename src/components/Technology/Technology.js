import React, {useState, useEffect } from 'react'
import style from 'components/Technology/technology.module.css'
import crewStyle from 'components/Crew/crew.module.css'
import { Layout, Typography} from 'antd';
import axios from 'axios';
const { Content } = Layout;
const { Text, Paragraph}  = Typography

const activeStyle = {
    background:"white",
    color:"black"
}

function Technology() {
    const [technologies, setTechnologies] = useState(null)
    const [index, setIndex] = useState(0)
    useEffect(() => {
        axios.get('data.json').then((response) => {
            setTechnologies(response.data.technology)
        }).catch((error) => console.log("Something went wrong") )
    }, [])
    return (
        technologies && <Content className={style.crewContent}>
            <h2 className={style.headText}><Text className={style.mark}>02</Text> SPACE LAUNCH 101</h2>
            <div className={style.technologyInfo}>    
                <div className={style.detailsAboutTech}>
                    <div className={style.crosell}>
                        {
                            technologies.map((item, key) => {
                                return <div className={style.page} onClick={() => setIndex(key)} style={index === key?activeStyle:null}>{key + 1}</div>
                            })
                        }
                        
                        
                    </div>

                    <div className={style.detailsAboutTechPlans}>
                        <h1 className={style.techTitle}>THE TERMINOLOGY…</h1>
                        <h1 className={crewStyle.crewmemberName}>{technologies[index]?.name}</h1>
                        <Paragraph className={crewStyle.crewMemberInfoText}>{technologies[index]?.description}</Paragraph>
                    </div>
                </div>

                <div className={style.crewMemberImage}>
                    <img src={technologies[index]?.images.portrait} alt="Douglas" />
                </div>
            </div>
        </Content>
    )
}

export default Technology
