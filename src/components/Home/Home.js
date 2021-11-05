import React from 'react'
import { Layout, Typography } from 'antd';
import style from 'components/Home/home.module.css'
const { Content } = Layout;

const { Title, Text, Paragraph}  = Typography
function Home() {
    return (
        <Content className={style.homeContent}>
            <div className={style.spaceInfo}>
                <div className={style.spaceBox}>
                    <Title className={style.headerInfo} level={5} style={{letterSpacing:'2px', color:'white', textAlign:'left'}}> SO, YOU WANT TO TRAVEL TO</Title>
                    <h1  className={style.specialText}>SPACE</h1>
                    <Paragraph className={style.paragraphStyle}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Paragraph>
                </div>

                <div className={style.outerexplore} >
                    <div className={style.explore}>
                        <Title level={1} style={{letterSpacing:"2px", fontWeight:400}}>EXPLORE</Title>
                    </div>
                </div>
            </div>
        </Content>
    )
}

export default Home
