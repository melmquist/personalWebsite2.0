import * as React from 'react';
import '../assets/main/main.css';

const music = require("../assets/webImages/music.JPG");
const food = require("../assets/webImages/food.JPG");
const soccer = require("../assets/webImages/soccer.JPG");

export default class Passions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }1

    render() {
        return (
            <div className="passions-background-div">
                <div className="passions-content-div">

                    <div className="passions-header-div ralewayRegular">
                        I am passionate about Software Engineering as well as...
                    </div>


                    <div className="passion-div ">
                        <div className="passion-img-div">    
                            <img className="soccer-image" src={soccer} alt="soccer" />
                        </div>
                        <div className="passion-text-div">   

                            <div className="passion-header top ralewayBold">
                                Soccer
                            </div>
                            <div className="passion-copy top ralewayRegular">
                                On any given weekend, you can probably find me on a pitch somewhere in Brooklyn playing pickup soccer. To me, this sport is more than just a sport. It is a vehicle for reminding ourselves that while we may come from different cultures, we are all essentially the same. 
                            </div>
                        </div>
                    </div>


                    <div className="passion-div">
                        

                        <div className="passion-text-div ">   
                            <div className="passion-header ralewayBold">
                                Food
                            </div>
                            <div className="passion-copy bottom ralewayRegular">
                                I love to cook almost as much as I love to eat and entertain. Eating well and occasionally wowing your friends is great but recently I have become very interested in the American food system and in the long term I hope to work on projects that improve our society’s access to quality food from small scale producers.
                            </div>
                        </div>
                        <div className="passion-img-div ">    
                            <img className="food-image" src={food} alt="food" />
                        </div>
                        
                    </div>


                    {/* <div className="passion-div ">
                        <div className="passion-img-div">    
                            <img src={music} alt="music" />
                        </div>

                        <div className="passion-text-div">   
                            <div className="passion-header ralewayBold">
                                Music
                            </div>
                            <div className="passion-copy ralewayRegular ">
                                I grew up in NYC and played in bands throughout my life...I still play but now I like to listen and appreciate more about different types of music because like all art, it tells you about the culture and subject matter of where it came from
                            </div>
                        </div>
                    </div> */}


                </div>
                <div className="fade-line"></div>

            </div>
        );
    }
}

