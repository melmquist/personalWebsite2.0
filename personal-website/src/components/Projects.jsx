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
            <div className="projects-background-div">
                <div className="projects-content-div redBorder">
                    {/* <Row>   
                        <Col xs={12} sm={6} md={6}> */}
                            <div className="autoi-background-div projectCard redBorder">   
                                <img className="autoiLogo" src={autoiLogo2} alt="autoiLogo" />
                            </div>

                            <div className="wejay-background-div projectCard redBorder">   
                                <img className="wejayLogo" src={wejayLogo} alt="wejayLogo" />
                            </div>

                            <div className="stackfighter-background-div projectCard redBorder">   
                                <img className="stackfighterImage" src={stackfighterImage} alt="stackfighterImage" />
                            </div>

                            <div className="journalist-background-div projectCard redBorder">   
                                <img className="journalistImage" src={journalistImage} alt="journalistImage" />
                            </div>
                        {/* </Col> 
                    </Row>     */}
                   

                    

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