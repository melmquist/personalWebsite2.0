import * as React from 'react';
import '../assets/main/main.css';
import { Row, Col } from 'react-flexbox-grid';
import Transition from 'react-transition-group/Transition';

const ScrollLock = require('react-scrolllock')

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
            showAutoIModal: false,
            showWejayModal: false,
            showStackfighterModal: false, 
            showJournalistModal: false
        };
        
        this.handleModal = this.handleModal.bind(this);
        this.handleCancelModal = this.handleCancelModal.bind(this);
        
    };

    handleModal(ref) {
        // console.log("HANDLE MODAL CALLED WITH REF???", ref)
        if(ref === "autoi") {
            this.setState({showAutoIModal: true})
        }
        if(ref === "wejay") {
            this.setState({showWejayModal: true})
        }
        if(ref === "stackfighter") {
            this.setState({showStackfighterModal: true})
        }
        if(ref === "journalist") {
            this.setState({showJournalistModal: true})
        }
    }

    handleCancelModal() {
        // console.log("handleCancelModal CALLED UP TOP")
        this.setState({
            showAutoIModal: false,
            showWejayModal: false,
            showStackfighterModal: false, 
            showJournalistModal: false
        })
    }

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
                                handleModal={this.handleModal}
                            />
                            {
                                this.state.showAutoIModal && this.state.showAutoIModal ? 
                                <ProjectModal handleCancel={this.handleCancelModal}/> :
                                <div></div>
                            }
                           
                        </Col>
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={wejayLogo}
                                header="wejay"
                                background={this.state.orangeBackground}
                                handleModal={this.handleModal}
                            />
                            {
                                this.state.showWejayModal && this.state.showWejayModal ? 
                                <ProjectModal handleCancel={this.handleCancelModal}/> :
                                <div></div>
                            }

                        </Col> 
                    </Row> 
                    <Row> 
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={stackfighterImage}
                                header="stackfighter"
                                background={this.state.noBackground}
                                handleModal={this.handleModal}
                            />
                            {
                                this.state.showStackfighterModal && this.state.showStackfighterModal ? 
                                <ProjectModal handleCancel={this.handleCancelModal}/> :
                                <div></div>
                            }
        
                        </Col>
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={journalistImage}
                                header="journalist"
                                background={this.state.noBackground}
                                handleModal={this.handleModal}
                            />
                            {
                                this.state.showJournalistModal && this.state.showJournalistModal ? 
                                <ProjectModal handleCancel={this.handleCancelModal}/> :
                                <div></div>
                            }
           
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
                        <ProjectCardOverlay handleModal={this.props.handleModal} status={status} headerRef={this.props.header}/>
                    )}
                </Transition>                
                
                
            </div>
        );
    }
    
}


class ProjectCardOverlay extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {};
        this.handleModalDownHere = this.handleModalDownHere.bind(this)
    }

    handleModalDownHere() {
        this.props.handleModal(this.props.headerRef)
    }

    render() {
        return (
            <div className={`animationHoverDiv animation-${this.props.status}`}>   
       
                {/* {console.log("this.PROPS IN PROJECT CAR OVERLAY: ", this.props)} */}
    
                <div className="animationHoverDivContent">   
                    <div className="projectLinkText ralewayBold">Live Link</div>
                    <div className="projectLinkText ralewayBold">Github Repo</div>
                    <div className="projectLinkText ralewayBold" onClick={this.handleModalDownHere}>Full Description</div>
                    {/* THIS DOESNT KNOW HOW TO PASS UP A REF 
                    MAYBE BECAUSE IT DOESNT HAVE ITS OWN STATE????
                    SO MAKE IT A STATEFUL COMPONENT AND BUBBLE THE SHIT UP VIA A HELPER FUNCTION IN HERE???????????????? */}
                </div>
                
            </div>
        );
    }
    
}

class ProjectModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleCancel() {
        // console.log("HANDLE CANCEL CALLED")
        this.props.handleCancel()
    }

    render() {
        return (
            <div className="project-modal-background ">   
                <ScrollLock />
                <div className="project-modal-outer ">   
                    <div className="modal-exit-button-div ">
                        <img className="modal-exit-button-img" src={cancel} alt="cancel" onClick={this.handleCancel}/>
                    </div>
                    <div className="project-modal-inner ">   
                        <div className="modal-content-div "> 
                            <div className="modal-content-header ralewayBold">Placeholder</div>
                            <div className="modal-content-text ralewayRegular">We're really excited that you're trying to use ES2016 syntax, but instead of making more yearly presets, Babel has a better preset that we recommend you use instead: npm install babel-preset-env --save-dev. <br/><br/>We're really excited that you're trying to use ES2016 syntax, but instead of making more yearly presets, Babel has a better preset that we recommend you use instead: npm install babel-preset-env --save-dev. </div>  
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}