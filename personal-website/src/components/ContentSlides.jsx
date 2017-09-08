import * as React from 'react';
import '../assets/main/main.css';
import About from './About'
import Projects from './Projects'
import Passions from './Passions'
import Contact from './Contact'

export default class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }1

    render() {
        return (
            <div className="content-slides-background-div">
                <About />
                <Projects />
                <Passions />
                <Contact />
            </div>
        );
    }
}

