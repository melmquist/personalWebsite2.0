import * as React from 'react';
import '../assets/main/main.css';
import Menu from './Menu';
import ContentSlides from './ContentSlides';


export default class Root extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
       
    }1

    render() {
        return (
            <div className="root-background-div">
                <Menu />
                <ContentSlides />
            </div>
        );
    }
}

