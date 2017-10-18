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

const modalData = {
    autoi: {
        header: "The Auto i TESTTEST",
        tagline: "iOT Dash Camera SPA",
        text: "I am currently working with The Auto i to build a front end web application that allows potential customers to learn about their upcoming product and also allows existing beta clients to access their data. This project is being built with React/Redux, Firebase and many other leading edge front end technologies.",
        // links: [['WEBSITE UNDER CONSTRUCTION', ''], ['PRIVATE REPO', '']]
        links: []
    },
    wejay: {
        header: "Wejay",
        tagline: "A Communal DJ app",        
        text: "A communal DJ app that allows users to pick songs democratically from Soundcloud instead of fighting over the AUX cable. This mobile first application averages user input on potential songs to dynamically alter a public music queue. Persistence and real time updates is achieved with Firebase, React, Redux and Material-UI.",
        links: [['LIVE DEMO', 'http://wejay.herokuapp.com/'], ['GITHUB REPO', 'https://github.com/christophermanahan/wejay'], ['VIDEO', 'https://www.youtube.com/watch?v=-XEOkNGz8m0']]
    },
    stackfighter: {
        header: "StackFighter",
        tagline: "E-Commerce prototype",        
        text: "A prototypal e-commerce site built with Node, Sequelize, Express and AngularJS.  This project was designed to mimic a retro video game interface so that users can Street Fighter characters. Why would you buy StreetFighter characters? To protect you from online bullying obviously...",
        links: [['LIVE DEMO', 'https://stormy-atoll-85405.herokuapp.com/']]
    },
    journalist: {
        header: "BarbaraMantel.com",
        tagline: "Journalist Website",        
        text: "For this marketing and web development project, I worked with Barbara Mantel, an award winning journalist who needed to boost her online presence and provide publishers with a reliable way to understand her personal brand and her extensive body of work. It was an exciting project that allowed me to work on web development as well as digital marketing and I hope to engage in more interdisciplinary projects such as this in the future.",
        links: [['LIVE DEMO', 'https://www.barbaramantel.com/']]
    },
}
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

    handleCancelModal(e) {
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
                                tagline={modalData.autoi.tagline}
                                background={this.state.noBackground}
                                handleModal={this.handleModal}
                            />
                            {
                                this.state.showAutoIModal && this.state.showAutoIModal ? 
                                <ProjectModal 
                                    handleCancel={this.handleCancelModal}
                                    header={modalData.autoi.header}
                                    text={modalData.autoi.text}
                                    links={modalData.autoi.links}
                                    /> :
                                <div></div>
                            }
                           
                        </Col>
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={wejayLogo}
                                header="wejay"
                                tagline={modalData.wejay.tagline}
                                background={this.state.orangeBackground}
                                handleModal={this.handleModal}
                            />
                            {
                                this.state.showWejayModal && this.state.showWejayModal ? 
                                <ProjectModal 
                                    handleCancel={this.handleCancelModal}
                                    header={modalData.wejay.header}
                                    text={modalData.wejay.text}
                                    links={modalData.wejay.links}
                                    /> :
                                <div></div>
                            }

                        </Col> 
                    </Row> 
                    <Row> 
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={stackfighterImage}
                                header="stackfighter"
                                tagline={modalData.stackfighter.tagline}
                                background={this.state.noBackground}
                                handleModal={this.handleModal}
                            />
                            {
                                this.state.showStackfighterModal && this.state.showStackfighterModal ? 
                                <ProjectModal 
                                    handleCancel={this.handleCancelModal}
                                    header={modalData.stackfighter.header}
                                    text={modalData.stackfighter.text}
                                    links={modalData.stackfighter.links}
                                    /> :
                                <div></div>
                            }
        
                        </Col>
                        <Col className="" md={6} sm={6} xs={12}>
                            <ProjectCard 
                                image={journalistImage}
                                header="journalist"
                                tagline={modalData.journalist.tagline}
                                background={this.state.noBackground}
                                handleModal={this.handleModal}
                            />
                            {
                                this.state.showJournalistModal && this.state.showJournalistModal ? 
                                <ProjectModal 
                                    handleCancel={this.handleCancelModal}
                                    header={modalData.journalist.header}
                                    text={modalData.journalist.text}
                                    links={modalData.journalist.links}
                                    /> :
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
                        <ProjectCardOverlay 
                            handleModal={this.props.handleModal} 
                            status={status} 
                            headerRef={this.props.header}
                            tagline={this.props.tagline}
                            />
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
                    <div className="projectTagline ralewayRegular ">{this.props.tagline}</div>
                    {/* <div className="projectLinkText ralewayBold"></div> */}
                    <div className="projectDetailsLink ralewayBold " onClick={this.handleModalDownHere}>Links/Description</div>
                    
                    
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

    handleCancel(e) {
        // console.log("HANDLE CANCEL CALLED")
        e.stopPropagation();
        this.props.handleCancel()

    }

    render() {
        return (
            <div className="project-modal-background" onClick={this.handleCancel}>   
                {/* <ScrollLock /> */}
                <div className="project-modal-outer" onClick={this.handleCancel}>   
                    {/* <div className="modal-exit-button-div ">
                        <img className="modal-exit-button-img" src={cancel} alt="cancel" onClick={this.handleCancel}/>
                    </div> */}
                    <div className="project-modal-inner ">   
                        <div className="modal-content-div "> 
                            <div className="modal-content-header ralewayBold">{this.props.header}</div>
                            <div className="modal-content-text ralewayRegular">{this.props.text}</div>  
                            <div className="links-map-div">  
                                {
                                    this.props.links && this.props.links.map((oneLinkGroup, index) => (
                                        <a className="one-link" key={index} target="_blank" rel="noopener noreferrer" href={oneLinkGroup[1]}>
                                            <div className="ralewayRegular">   
                                                {oneLinkGroup[0]}
                                            </div>
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}