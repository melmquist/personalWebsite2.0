import * as React from 'react';
import '../assets/main/main.css';

const autoiImage = require()
const wejayImage = require()
const stackfighterImage = require()
const freelanceImage = require()

export default class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }1

    render() {
        return (
            <div className="projects-background-div">
                <div className="projects-content-div">

                </div>
            </div>
        );
    }
}

const OneProjectDiv = (props) => {

    return (
        <div className="one-project-background-div">   
            
        </div>
    );
}

/*
just one background div with picture, 
on hover animate slides over and shows you links/options
always with a *details* choice that will open up a fullscreen/greyed out dialog box

*/