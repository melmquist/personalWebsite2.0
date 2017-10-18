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
// var Link       = Scroll.Link;




// const imagemin = require('imagemin');
// const imageminJpegtran = require('imagemin-jpegtran');
// const imageminPngquant = require('imagemin-pngquant');
 
// imagemin(['../assets/webImages/*.{jpg,png}'], 'build/images', {
//     plugins: [
//         imageminJpegtran(),
//         imageminPngquant({quality: '65-80'})
//     ]
// }).then(files => {
//     console.log("IMGAGESS  AMALLL: ",files);
//     //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …] 
// });





export default class Root extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentMenuHighlight: 0
        };
        this.snapScroll = this.snapScroll.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
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
            // console.log("END 0", arguments[0]);

        });
        scrollSpy.update();

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    handleScroll() {
        var winHeight = window.innerHeight;
        // console.log("winHeight, ", winHeight)
     
        // Annoying to compute doc height due to browser inconsistency
        var body = document.body;
        // console.log("body, ", body)
        
        var html = document.documentElement;
        // console.log("html, ", html)
        
        var docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        // console.log("docHeight, ", docHeight)        
     
        var value = document.body.scrollTop;
        // console.log("value, ", value)

        let aboutHeight = winHeight - 300;
        let projectsHeight = winHeight * 2 - 300 ;
        let passionsHeight = winHeight * 3 - 300;
        

        if(value < aboutHeight) {
            // console.log("WE ON ABOUT")
            this.setState({currentMenuHighlight: 0})
        } else if(value > aboutHeight && value < projectsHeight) {
            // console.log("WE ON PROJECTS")
            this.setState({currentMenuHighlight: 1})
        } else if(value > projectsHeight && value < passionsHeight) {
            // console.log("WE ON PASSIONS")
            this.setState({currentMenuHighlight: 2})
        } else {
            // console.log("WE ON CONTACT")
            this.setState({currentMenuHighlight: 3})
        }

        // if(value > passionsHeight) {
        //     console.log("WE ON CONTACT")
        // } 
    }

    render() {
        return (
            <div className="root-background-div">
               
                <Menu currentMenuHighlight={this.state.currentMenuHighlight} snapScroll={this.snapScroll}/>


                <div className="content-slides-background-div">
                    <Element name="aboutSnapScrollTarget" className="element">
                        {/* {console.log("PROPS: ", this.props)} */}
                        <About />
                        ABOUTTTT
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

