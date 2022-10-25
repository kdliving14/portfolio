import fff from "./images/FindFundFoster.png"
import hakumele from "./images/HakuMele.png"
import puppair from "./images/PuppyPairing.png"
import adventure from "./images/adventure.png"
import cheetcode from "./images/cheetcode.png"

import {Button, Divider} from "semantic-ui-react"

function Projects(){
    return(
<div>
    <div>
        <div className="row">
            <div className="column">
                <div className="projects">
                    <img src={hakumele} alt="Haku Mele" className="invert center" style={{width:"60%",}}/>
                    <Divider />
                    <p>Generates a random song in a user chosen genre, displayed from a JSON database.</p>
                </div>
                <Button.Group attached="bottom" color="black">
                        <Button compact target="_blank" rel="noreferrer" href="https://haku-mele.netlify.app/">
                            Deployed</Button>
                        <Button compact target="_blank" rel="noreferrer" href="https://github.com/Garret-Gallant/haku-mele-react-app">
                            Github</Button>
                </Button.Group>
            </div>

            <div className="column">
                <div className="projects">
                    <img src={fff} alt="Find Fund Foster" className="invert center" style={{width:"40%"}}/>
                    <Divider />
                    <p>Find forever homes for pets and fund animal shelters per animal by digitally maintaining a pet via life stats, such as hunger/thirst/fun/hygiene/etc.</p>
                </div>
                <Button.Group attached="bottom" color="black">
                    <Button compact target="_blank" rel="noreferrer" href="https://github.com/kgicheha/phase-3-group-project-frontend">
                        Frontend</Button>
                    <Button compact target="_blank" rel="noreferrer" href="https://github.com/kdliving14/Phase-3-Group-Project-Backend">
                        Backend</Button>
                </Button.Group>
            </div>

            <div className="column">
                <div className="projects">
                    <img src={adventure} alt="Adventure" className="center" style={{width:"50%"}}/>
                    <Divider />
                    <h3>Adventure</h3>
                    <p>A choose your own adventure web application. Still in progress! If you want to pitch in, contact me via Github!</p>
                </div>
                <Button.Group attached="bottom" color="black">
                    <Button compact target="_blank" rel="noreferrer" href="https://github.com/kdliving14/story-front">
                        Frontend</Button>
                    <Button compact target="_blank" rel="noreferrer" href="https://github.com/kdliving14/story-back">
                        Backend</Button>
                </Button.Group>
            </div>

            <div className="column">
                <div className="projects">
                    <img src={puppair} alt="Puppy Pairing" className="center" style={{width:"80%"}}/>
                    <Divider />
                    <p>Pairing you with your perfect pal based on your parameters.</p>
                </div>
                <Button compact color="black" fluid attached="bottom" target="_blank" rel="noreferrer" href="https://github.com/kdliving14/p1-Group-Project">
                    Github</Button>
            </div>
            
            <div className="column">
                <div className="projects">
                    <img src={cheetcode} alt="Cheet Code" className="center" style={{width:"80%"}}/>
                    <Divider />
                    <p>A quick knock off of LeetCode. Made mostly so that we would review algorithms while working on a project.</p>
                </div>
                <Button compact color="black" fluid attached="bottom" target="_blank" rel="noreferrer" href="https://github.com/kdliving14/Phase4_Group_Project">
                        Github</Button>
            </div>
        </div>
    </div>
</div>)
}
export default Projects;