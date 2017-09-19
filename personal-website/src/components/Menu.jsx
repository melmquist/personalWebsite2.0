import * as React from 'react';
import '../assets/main/main.css';

export default class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            aboutSelected: true, 
            projectsSelected: false, 
            passionsSelected: false,
            contactSelected: false
        };
        this.handleMenuClick = this.handleMenuClick.bind(this)
    }1

    handleMenuClick(val) {
        // this.setState({selected: val})
        this.props.snapScroll(val)
        
        switch(val) {
            case 0: 
                this.setState({
                    aboutSelected: true, 
                    projectsSelected: false, 
                    passionsSelected: false,
                    contactSelected: false
                })
                break;
            
            case 1: 
                this.setState({
                    aboutSelected: false, 
                    projectsSelected: true, 
                    passionsSelected: false,
                    contactSelected: false
                })
                break;
                
            case 2: 
                this.setState({
                    aboutSelected: false, 
                    projectsSelected: false, 
                    passionsSelected: true,
                    contactSelected: false
                })
                break;

            case 3: 
                this.setState({
                    aboutSelected: false, 
                    projectsSelected: false, 
                    passionsSelected: false,
                    contactSelected: true
                })
                break;

            default:
                this.setState({
                    aboutSelected: true, 
                    projectsSelected: false, 
                    passionsSelected: false,
                    contactSelected: false
                })
        }

    }

    render() {
        // console.log("this.state, ", this.state)
        return (
            <div className="menu-background-div ">
                <div className="vertical-line "></div>
                <div className="menu-content-div ">    
                    <div className={`about menu-item playfairRegular about-selected-${this.state.aboutSelected}`} onClick={() => this.handleMenuClick(0)}>About</div>
                    <div className={`projects menu-item playfairRegular projects-selected-${this.state.projectsSelected}`} onClick={() => this.handleMenuClick(1)}>Projects</div>
                    <div className={`passions menu-item playfairRegular passions-selected-${this.state.passionsSelected}`} onClick={() => this.handleMenuClick(2)}>Passions</div>
                    <div className={`contact menu-item playfairRegular contact-selected-${this.state.contactSelected}`} onClick={() => this.handleMenuClick(3)}>Contact</div>
                </div>
            </div>
        );
    }
}

