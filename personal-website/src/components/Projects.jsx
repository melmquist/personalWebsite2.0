import * as React from 'react';
import '../assets/main/main.css';
import { Row, Col } from 'react-flexbox-grid';

const autoiLogo = require('../assets/webImages/logo@3x.png');
const autoiLogo2 = require('../assets/webImages/autoilogo.png');
const wejayLogo = require('../assets/webImages/wejayLogo.png');
const stackfighterImage = require('../assets/webImages/stackfighterScreenshot.png');
const journalistImage = require('../assets/webImages/journalist.png');

export default class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }1

    render() {
        return (
            <div className="projects-background-div ">
                <div className="projects-content-div ">
                    <Row>   
                       
                        <Col className="" md={6} sm={6} xs={12}>
                            <div className="projectCardOuter">
                                <div className="autoi-background-div projectCard">   
                                    <img className="autoiLogo" src={autoiLogo2} alt="autoiLogo" />
                                </div>
                            </div>
                        </Col>
                        <Col className="" md={6} sm={6} xs={12}>
                            <div className="projectCardOuter wejay-background-div">
                                <div className="wejay-background-div projectCard ">   
                                    <img className="wejayLogo" src={wejayLogo} alt="wejayLogo" />
                                </div>
                            </div>
                        </Col> 
                    </Row> 
                    <Row> 
                        <Col className="" md={6} sm={6} xs={12}>
                            <div className="projectCardOuter">
                                <div className="stackfighter-background-div projectCard">   
                                    <img className="stackfighterImage" src={stackfighterImage} alt="stackfighterImage" />
                                </div>
                            </div>
                        </Col>
                        <Col className="" md={6} sm={6} xs={12}>
                            <div className="projectCardOuter">
                                <div className="journalist-background-div projectCard">   
                                    <img className="journalistImage" src={journalistImage} alt="journalistImage" />
                                </div>
                            </div>
                        </Col>
                         
                    </Row>    
                   

                    

                </div>
            </div>
        );
    }
}

/*
just one background div with picture, 
on hover animate slides over and shows you links/options
always with a *details* choice that will open up a fullscreen/greyed out dialog box

*/