import * as React from 'react';
import '../assets/main/main.css';

const aboutImg = require('../assets/webImages/aboutImage.png');

export default class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }1

    render() {
        return (
            <div className="about-background-div">
                <div className="about-content-div">
                    <img className="about-image" src={aboutImg} alt="aboutImg" />

                </div>
            </div>
        );
    }
}

