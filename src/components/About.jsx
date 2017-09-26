import * as React from 'react';
import '../assets/main/main.css';
import Typed from 'typed.js';


const aboutImg = require('../assets/webImages/aboutImage.png');

export default class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let strings = ['Hi my name is Matt Elmquist <br/>I\'m a Fullstack Javascript Engineer']

        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
    	    strings: strings,
            typeSpeed: 50,
            cursorChar: '_',
            autoInsertCss: true
        };

        this.typed = new Typed(this.el, options);

    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
            <div className="about-background-div">
                <div className="about-content-div">
                    <div className="about-image-div">
                        <img className="about-image" src={aboutImg} alt="aboutImg" />
                    </div>

                    {/* 
                    ADD TYPED.JS
                    https://github.com/mattboldt/typed.js/
                    
                    TO REACT: 
                    https://jsfiddle.net/mattboldt/ovat9jmp/
                     */}
                    <div className="about-header-div ralewayBold">
                        <span 
                            style={{ whiteSpace: 'pre' }}
                            ref={(el) => { this.el = el }}
                        />
                    </div>
                    <div className="about-text-div ralewayRegular">
                        I am passionate about building beautiful front end applications and optimizing the processes that underpin their functionality.
                    </div>
        
                </div>
                <div className="fade-line"></div>
            </div>

            
        );
    }
}



