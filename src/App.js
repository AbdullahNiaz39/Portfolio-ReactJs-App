import React, { Component } from "react";
import Projects from "./Project";
import SocialProfiles from "./SocialProfiles";
import Profile1 from "./assets/profile1.png";




class App extends Component {
    state = { displayBio: false };


    toogleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render() {



        return (
            <div>
                <img src={Profile1} alt="profile" className="profile"/>
                <h1>Hello!</h1>
                <p> My name i Abdullah Niaz.I'm a Software engineer.</p>
                <p> I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (<div>
                        <p>I love to doing programming. My favourite language is javascript.</p>
                        <p>I normally use React.js framework. It is awesume. 😌</p>
                        <p> Besides coding, In free time I watch and play football. 😜</p>
                        <button onClick={this.toogleDisplayBio}>Show Less</button>
                    </div>) : (<div>
                        <button onClick={this.toogleDisplayBio}>Read More</button>
                    </div>)
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
          

        )
    }
    
}
export default App;