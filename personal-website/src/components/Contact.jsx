import * as React from 'react';
import '../assets/main/main.css';

const github = require('../assets/webImages/github.png');
const stackOverflow = require('../assets/webImages/stackOverflow.png');
const linkedIn = require('../assets/webImages/linkedIn.jpg');
const twitter = require('../assets/webImages/twitter.png');

export default class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }1

    render() {
        return (
            <div className="contact-background-div">
                <div className="contact-content-div ">
                    
                    <div className="contact-copy-div ralewayRegular">
                        Feel free to reach out via email at <b>mattelmquist@gmail.com</b> or social media. I'm always interested in learning about new projects and opportunities.
                    </div>

                    <div className="contact-icons-div">
                        <img src={github} alt="github" />
                        <img src={stackOverflow} alt="stackOverflow" />
                        <img src={linkedIn} alt="linkedIn" />
                        <img src={twitter} alt="twitter" />

                    </div>
                    <div className="contact-lower-copy-div ralewayBold">Thanks for visiting!</div>
                </div>
            </div>
        );
    }
}

