import Linkedin from "./images/linkedin.svg"
import Github from "./images/github.svg"
import Devto from "./images/devdotto.svg"

// import bkgnd from "./images/background.jpg"

import About from "./About"
import Projects from "./Projects"

import {Container, Header, Icon } from "semantic-ui-react"

// style={{backgroundImage:`url(${bkgnd})`}}

function App() {
  return (
    <div className="app">
      <div className="nav">
        <Header><h1 style={{fontSize:"40px"}}><strong>Karter Livingston</strong></h1>
        <p><small><em>Software Developer | Artist | Perpetual Student</em></small></p>
        </Header>
      </div>

      <div className="container-reg">
        <div><Projects/></div>
        <div><About/></div>
      </div>
      <br></br>

      <div className="footer">
        <Container className="container-reg">
          <div className="footer-content">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karter-livingston/"><img style={{height:"30px"}} src={Linkedin} alt="LinkedIn"></img></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/kdliving14"><img style={{height:"30px"}} src={Github} alt="Github"></img></a>
            <a target="_blank" rel="noreferrer" href="https://dev.to/kdliving14"><img style={{height:"40px"}} src={Devto} alt="Devto"></img></a>
            <a target="_blank" rel="noreferrer" href="mailto:kdlivingston99@gmail.com"><Icon name="mail" size="big" color="black"/></a>
            <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1jS-DtsNsGIbETzJ8jutnTv9so52MXkP1kF82EDAw4Rg/export?format=pdf"><Icon name="file alternate outline" size="big" color="black"/></a>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
