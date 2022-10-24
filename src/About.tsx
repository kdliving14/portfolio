import { Component } from "react"
import {Segment, Accordion, Icon, Divider } from "semantic-ui-react"

import javascript from "./images/javascript.svg"
import react from "./images/react.svg"
import rails from "./images/rubyonrails.svg"

export default class About extends Component{
    state = { activeIndex: 0 }

    handleClick = (e:any, titleProps:any) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

  render() {
    const { activeIndex } = this.state

    return(<div>
        <Segment inverted className="about">
        <Accordion inverted style={{padding:"10px", margin:"auto"}} className="about">
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown'/> Experience
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              The best way to describe my career is a shotgun blast: I've tried numerous seemingly unconnected things. 
              Most would see that as a bad thing but I am all about reducing, reusing, and recycling.
            </p>
            <div className="container-reg">
                <div className="timeline">
                    <div className="contain right">
                        <div className="content">
                        <h2>2017</h2>
                        <p>Lorem ipsum..</p>
                        </div>
                    </div>
                    <div className="contain right">
                        <div className="content">
                        <h2>2016</h2>
                        <p>Lorem ipsum..</p>
                        </div>
                    </div>
                    <div className="contain right">
                        <div className="content">
                        <h2>2016</h2>
                        <p>Lorem ipsum..</p>
                        </div>
                    </div>
                </div>
            </div>
          </Accordion.Content>
          <Divider/>
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown'/>Specializations
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>Below are some of the things that I already know, but I am quick to learn and would love to learn more!</p>
            <br></br>
            <div className="center">
              <img style={{height:"50px"}} className="tech" src={javascript} alt="Javascript"></img>
              <img style={{height:"50px"}} className="tech" src={react} alt="React"></img>
              <img style={{height:"50px"}} className="tech" src={rails} alt="Ruby on Rails"></img>
            </div>
            <br></br>
            <p>I am currently looking into refreshing my memory of Java and C++, but after that I want to look into learning Python.</p>
          </Accordion.Content>
        </Accordion>
      </Segment>
    </div>)
}
}
