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
                    <div className="about-image-div">
                        <img className="about-image" src={aboutImg} alt="aboutImg" />
                    </div>

                    {/* 
                    ADD TYPED.JS
                    https://github.com/mattboldt/typed.js/
                    
                    TO REACT: 
                    https://jsfiddle.net/mattboldt/ovat9jmp/
                     */}
                    <div className="about-header-div ralewayBold">Hi! My name is Matt Elmquist and I'm a Javascript Engineer</div>
                    <div className="about-text-div ralewayRegular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                    </div>
            </div>

            
        );
    }
}

