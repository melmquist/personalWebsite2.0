import * as React from 'react';
import '../assets/main/main.css';

export default class Passions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }1

    render() {
        return (
            <div className="passions-background-div">
                <div className="passions-content-div ">
                    
                    <div className="passions-header-div ralewayRegular">
                        I am extremely passionate about Javascript, but here are some other things in my life that get me excited. 
                    </div>


                    <div className="passion-div">
                        <div className="passion-header ralewayBold">
                            Soccer
                        </div>
                        <div className="passion-copy ralewayRegular">
                            On any given weekend, you can probably find me on a pitch somewhere in Brooklyn playing pickup soccer. To me, this sport is more than just a sport. It is a vehicle for reminding yourself that despite different cultures, we are all essentially the same. We're all just humans running around trying to score a goal and not to tear an ACL (again).
                        </div>
                    </div>


                    <div className="passion-div">
                        <div className="passion-header ralewayBold">
                            Food
                        </div>
                        <div className="passion-copy ralewayRegular">
                            I like to cook and try new recipes and I have been doing it my entire life..Recently I have become more interested in where the food comes from...long term I want to work hard to improve the food system in the USA and give more people access to quality ingredients made from small scale agriculture                        
                        </div>
                    </div>


                    <div className="passion-div">
                        <div className="passion-header ralewayBold">
                            Music
                        </div>
                        <div className="passion-copy ralewayRegular ">
                            I grew up in NYC and played in bands throughout my life...I still play but now I like to listen and appreciate more about different types of music because like all art, it tells you about the culture and subject matter of where it came from
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

