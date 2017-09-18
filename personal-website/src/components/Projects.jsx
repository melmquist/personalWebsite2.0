import * as React from 'react';
import '../assets/main/main.css';
import { Row, Col } from 'react-flexbox-grid';
import Transition from 'react-transition-group/Transition';


const autoiLogo = require('../assets/webImages/logo@3x.png');
const autoiLogo2 = require('../assets/webImages/autoilogo.png');
const wejayLogo = require('../assets/webImages/wejayLogo.png');
const stackfighterImage = require('../assets/webImages/stackfighterScreenshot.png');
const journalistImage = require('../assets/webImages/journalist.png');

export default class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className="projects-background-div ">
                <div className="projects-content-div ">
                    <Row>   
                       
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={autoiLogo2}
                                header="autoi"
                            />
                            
                        </Col>
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={wejayLogo}
                                header="wejay"
                            />

                        </Col> 
                    </Row> 
                    <Row> 
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={stackfighterImage}
                                header="stackfighter"
                            />
        
                        </Col>
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={journalistImage}
                                header="journalist"
                            />
           
                        </Col>
                         
                    </Row>    
                   

                    

                </div>
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
            // animationClasses: [...this.state.animationClasses, 'animationHoverDivEngaged']
            transitionInOut: true
        })
    }

    handleMouseLeave() {
        this.setState((prevState) => ({
            // animationClasses: [...prevState.animationClasses.slice(0,1), ...prevState.animationClasses.slice(1+1)]
            transitionInOut: false
        }))
    }
    
    toggleEnterState = () => {
        this.setState({ in: true });
    }
    
    render() {
        console.log("STATE PROJECT CARD : ", this.state)
        return (
            <div className="projectCardOuter" 
                onMouseEnter={this.handleMouseEnter} 
                onMouseLeave={this.handleMouseLeave}
            >
                {/* <div className="projectCard">   
                    <img className="projectImage" src={this.props.image} alt={this.props.image} />
                </div> */}

                <Transition timeout={150}>
                    {(status) => (
                        <ProjectCardOverlay status={status}/>

                    )}
                </Transition>                
                <button onClick={this.toggleEnterState}>Click to Enter</button>
                
                
                {/* <Transition in={this.state.in} timeout={500}>
                    <div className="animationHoverDiv">
                        ????animationHoverDiv???
                    </div>
                </Transition> */}
            </div>
        );
    }
    
}

// MAKE SFC OUT OF OVERLAY, PASS IT INTO STATUS CHILD TRANSITION ABOVE

const ProjectCardOverlay = (props) => { 
    return (
        <div className={`animationHoverDiv `}>   
            props.status is : {props.status}
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






















class ProjectCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            animationClasses: ['animationHoverDiv']
        };
        
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    };


    handleMouseEnter() {
        this.setState({
            animationClasses: [...this.state.animationClasses, 'animationHoverDivEngaged']
        })
    }

    handleMouseLeave() {
        this.setState((prevState) => ({
            animationClasses: [...prevState.animationClasses.slice(0,1), ...prevState.animationClasses.slice(1+1)]
        }))
    }

    
    render() {
        console.log("STATE PROJECT CARD : ", this.state)
        return (
            <div className="projectCardOuter" 
                onMouseEnter={this.handleMouseEnter} 
                onMouseLeave={this.handleMouseLeave}
            >
                <div className="projectCard">   
                    <img className="projectImage" src={this.props.image} alt={this.props.image} />
                </div>
                <div className={this.state.animationClasses.join(' ')}>
    
                </div>
            </div>
        );
    }
    
}







*/