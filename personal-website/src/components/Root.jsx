import * as React from 'react';
import '../assets/main/main.css';
import Menu from './Menu';
// import ContentSlides from './ContentSlides';
import About from './About'
import Projects from './Projects'
import Passions from './Passions'
import Contact from './Contact'

var Scroll  = require('react-scroll');
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scrollSpy  = Scroll.scrollSpy;
var scroller = Scroll.scroller;


export default class Root extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.snapScroll = this.snapScroll.bind(this);
        
    };

    snapScroll = (val) => {
        // console.log("VAL PASSED INTO ROOT SNAPSCROL IS: ", val)
        if (val === 0) {
            scroller.scrollTo('aboutSnapScrollTarget', {
                duration: 1000,
                smooth: true
            })
        }
        if (val === 1) {
            scroller.scrollTo('projectsSnapScrollTarget', {
                duration: 1000,
                smooth: true
            })
        }
        if (val === 2) {
            scroller.scrollTo('passionsSnapScrollTarget', {
                duration: 1000,
                smooth: true
            })
        }
        if (val === 3) {
            scroller.scrollTo('contactSnapScrollTarget', {
                duration: 1000,
                smooth: true
            })
        }
        
    }
    
    componentDidMount() {
        
        // this.props.onStartListeningToAuth();

        Events.scrollEvent.register('begin', function() {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function() {
            console.log("end", arguments);
        });
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div className="root-background-div">
               
                <Menu snapScroll={this.snapScroll}/>


                <div className="content-slides-background-div">
                    <Element name="aboutSnapScrollTarget" className="element">
                        <About />
                    </Element>
                    
                    <Element name="projectsSnapScrollTarget" className="element">
                        <Projects />
                    </Element>
                    
                    <Element name="passionsSnapScrollTarget" className="element">
                        <Passions />
                    </Element>

                    <Element name="contactSnapScrollTarget" className="element">
                        <Contact />
                    </Element>
                </div>


            </div>
        );
    }
}

