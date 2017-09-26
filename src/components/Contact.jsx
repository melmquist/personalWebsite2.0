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
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/melmquist"><img src={github} alt="github" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/6084963/melmquist?tab=profile"><img src={stackOverflow} alt="stackOverflow" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mattelmquist/"><img src={linkedIn} alt="linkedIn" /></a>
                        {/* <img src={twitter} alt="twitter" /> */}

                    </div>
                    <div className="contact-lower-copy-div ralewayBold">Thanks for visiting!</div>
                </div>
            </div>
        );
    }
}

