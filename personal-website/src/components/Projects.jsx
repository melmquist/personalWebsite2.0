import * as React from 'react';
import '../assets/main/main.css';
import { Row, Col } from 'react-flexbox-grid';
import Transition from 'react-transition-group/Transition';


const autoiLogo = require('../assets/webImages/logo@3x.png');
const autoiLogo2 = require('../assets/webImages/autoilogo.png');
const wejayLogo = require('../assets/webImages/wejayLogo.png');
const stackfighterImage = require('../assets/webImages/stackfighterScreenshot.png');
const journalistImage = require('../assets/webImages/journalist.png');
const cancel = require('../assets/webImages/cancel.png');

export default class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            orangeBackground: 'orange',
            noBackground: 'nothing'
        };
        // const orangeBackground = 'orange';        
        // const noBackground = 'nothing';
    };

    render() {
        // console.log("STATE PROJECTS: ", this.state)
        return (
            <div className="projects-background-div ">
                <div className="projects-content-div ">
                    <Row>   
                       
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={autoiLogo2}
                                header="autoi"
                                background={this.state.noBackground}
                            />
                        </Col>
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={wejayLogo}
                                header="wejay"
                                background={this.state.orangeBackground}
                            />

                        </Col> 
                    </Row> 
                    <Row> 
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={stackfighterImage}
                                header="stackfighter"
                                background={this.state.noBackground}
                            />
        
                        </Col>
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={journalistImage}
                                header="journalist"
                                background={this.state.noBackground}
                            />
           
                        </Col>
                         
                    </Row>    
                   

                    

                </div>
                <div className="fade-line"></div>
            </div>
        );
    }
}

class ProjectCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            in: false
        };
        
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)       
       
    };

    handleMouseEnter() {
        this.setState({
            in: true
        })
    }

    handleMouseLeave() {
        this.setState((prevState) => ({
            in: false
        }))
    }
    // TODO: FIGURE OUT WHY PASSING OF ORANGE BACKGROUND IS NOT WORKING
    
    render() {
        // console.log("PROPS PROJECT CARD : ", this.props)
        return (
            <div className={`projectCardOuter background-${this.props.backgound}`}
                onMouseEnter={this.handleMouseEnter} 
                onMouseLeave={this.handleMouseLeave}
            >
                <div className="projectCard">   
                    <img className="projectImage" src={this.props.image} alt={this.props.image} />
                </div>

                <Transition in={this.state.in} timeout={1000}>
                    {(status) => (
                        <ProjectCardOverlay status={status} />
                    )}
                </Transition>                
                
                
            </div>
        );
    }
    
}


const ProjectCardOverlay = (props) => { 

    return (
        <div className={`animationHoverDiv animation-${props.status}`}>   
   
            {/* {console.log("PROPS IN PROJECT CAR OVERLAY: ", props)} */}

            <div className="animationHoverDivContent">   
            <div className="projectLinkText ralewayBold">Live Link</div>
            <div className="projectLinkText ralewayBold">Github Repo</div>
            <div className="projectLinkText ralewayBold">Full Description</div>
            </div>
            
        </div>
    );
}

// class ProjectModal extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {};
//     }

//     render() {
//         return (
//             <div className="project-modal-background redBorder">   
//                 <div className="modal-exit-button">
//                     <img src={cancel} alt="cancel" />
//                 </div>
//                 {/* <div className="project-modal-inner redBorder">   
                
//                 </div> */}
//             </div>
//         );
//     }
// }