import * as React from 'react';
import '../assets/main/main.css';

export default class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
        this.handleMenuClick = this.handleMenuClick.bind(this)
    }1

    handleMenuClick(val) {
        // this.setState({selected: val})
        this.props.snapScroll(val)

    }

    render() {
        // console.log("this.state, ", this.state)
        return (
            <div className="menu-background-div ">
                <div className="vertical-line "></div>
                <div className="menu-content-div ">    
                    <div className="about menu-item playfairRegular" onClick={() => this.handleMenuClick(0)}>About</div>
                    <div className="projects menu-item playfairRegular" onClick={() => this.handleMenuClick(1)}>Projects</div>
                    <div className="passions menu-item playfairRegular" onClick={() => this.handleMenuClick(2)}>Passions</div>
                    <div className="contact menu-item playfairRegular" onClick={() => this.handleMenuClick(3)}>Contact</div>
                </div>
            </div>
        );
    }
}

