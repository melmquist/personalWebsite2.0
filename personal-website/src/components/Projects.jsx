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
                            <ProjectCard image={autoiLogo2}/>
                            
                        </Col>
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard image={wejayLogo}/>

                        </Col> 
                    </Row> 
                    <Row> 
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard image={stackfighterImage}/>
        
                        </Col>
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard image={journalistImage}/>
           
                        </Col>
                         
                    </Row>    
                   

                    

                </div>
            </div>
        );
    }
}

const ProjectCard = (props) => {
    let { backColor, image} = props;
    return (
        <div className="projectCardOuter">
            <div className="projectCard">   
                <img className="projectImage" src={image} alt={image} />
            </div>
            <div className="animationHoverDiv">

            </div>
        </div>
    );
}

// const HoverTransition = () => {
//     const componentClasses = ['animationHoverDiv'];

//     if(show)
// }

/*
just one background div with picture, 
on hover animate slides over and shows you links/options
always with a *details* choice that will open up a fullscreen/greyed out dialog box

*/