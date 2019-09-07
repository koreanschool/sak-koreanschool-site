import React from 'react';
import Container from 'react-bootstrap/Container';
import data from '../../data/data';

const {
	MAIN_TEXT_EN,
	MAIN_TEXT_KR
} = data.HOME;

export const About = () => {
    return (
        <Container style={{marginTop:'50px'}}>
        <h1>{data.HOME.MAIN_TEXT_KR}</h1>
        <h3>{data.HOME.MAIN_TEXT_EN}</h3>
            <br/> 1 학기는 <strong>9/6/2019(금) 9/7/2019(토)</strong> 시작합니다.
            <br/> 1st Semester starts 9/6/2019(Friday) 9/7/2019(Saturday).<br/>

        <br/> Address | 주소:
        <br/>St. Andrew Kim Korean School 
        <br/>Address: 11700 1st Ave. NE, 
        <br/>Seattle WA 98125

        <br/><br/>
          Please email us at sakks10@gmail.com or call us at 425.773.8597 for any questions.
        <br/><br/>
        </Container>
    )
}
