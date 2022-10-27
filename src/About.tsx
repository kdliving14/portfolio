import { Component } from "react"
import {Segment, Accordion, Icon, Divider } from "semantic-ui-react"

import javascript from "./images/javascript.svg"
import react from "./images/react.svg"
import rails from "./images/rubyonrails.svg"

import Projects from "./Projects"

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
            <Icon name='dropdown'/> Projects
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Projects/>
          </Accordion.Content>
          <Divider/>
    
          <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
            <Icon name='dropdown'/>Specializations
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>Below are some of the things that I already know, but I am quick to learn and would love to learn more!</p>
            <br></br>
            <div className="center">
              <img style={{height:"70px"}} className="tech" src={javascript} alt="Javascript"></img>
              <img style={{height:"70px"}} className="tech" src={react} alt="React"></img>
              <img style={{height:"100px"}} className="tech" src={rails} alt="Ruby on Rails"></img>
            </div>
            <br></br>
            <p>I am currently looking into refreshing my memory of Java and C++, but after that I want to look into learning Python.</p>
          </Accordion.Content>
          <Divider/>
           
          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown'/>Experience
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>  
            <p>
              My career history looks like the result of a shotgun blast: numerous seemingly unconnected job titles, scattered about my life. 
              Most would see that as a bad thing but I am all about reusing and recycling. 
              <br></br><br></br>
              <span className="center"><em>To learn more, click the LinkedIn or Resume icon at the bottom of the page.</em></span>  
            </p>
            <br></br>
            <div className="container-reg">
                <div className="timeline">
                    <div className="contain right">
                        <div className="content">
                          <h3>June 2022 - October 2022</h3>
                          <p><em>Software Engineering bootcamp</em></p>
                          <p><small>Learned new coding languages and new processes for how to approach project creation.</small></p>
                        </div>
                    </div>
                    <Divider/>
                    <div className="contain right">
                        <div className="content">
                          <h3>June 2019 - May 2022</h3>
                          <p><em>Hotel HR & Accounting Coordinator</em></p>
                          <p><small>Learned management skills and presentational skills.</small></p>
                        </div>
                    </div>
                    <Divider/>
                    <div className="contain right">
                        <div className="content">
                          <h3>August 2018 - June 2019</h3>
                          <p><em>Hotel File Clerk</em></p>
                          <p><small>Learned how to be more organized and reinforced my detail oriented nature.</small></p>
                        </div>
                    </div>
                    <Divider/>
                    <div className="contain right">
                        <div className="content">
                          <h3>June 2017 - September 2018</h3>
                          <p><em>Computer Science & Multimedia Arts classes</em></p>
                          <p><small>Learned a little bit of C++ and Java, and new techniques for video editing.</small></p>
                        </div>
                    </div>
                    <Divider/>
                    <div className="contain right">
                        <div className="content">
                          <h3>June 2014 - June 2016</h3>
                          <p><em>Fashion Associate's Degree</em></p>
                          <p><small>Learned to think outside the box and how to visually disasemble and reassemble items. </small></p>
                        </div>
                    </div>
                    <Divider/>
                    <div className="contain right">
                        <div className="content">
                          <h3>October 2014 - November 2014</h3>
                          <p><em>Fashion Intern</em></p>
                          <p><small>Learned how to be more detail oriented through the creation of tech packs (packet of measurements for a production garment)</small></p>
                        </div>
                    </div>
                    <Divider/>
                    <div className="contain right">
                        <div className="content">
                          <h3>June 2014 - November 2014</h3>
                          <p><em>Educational Video site Intern</em></p>
                          <p><small>Taught myself how to video edit and how to research.</small></p>
                        </div>
                    </div>
                    <Divider/>
                    <div className="contain right">
                        <div className="content">
                          <h3>September 2013 - October 2022</h3>
                          <p><em>Online Virtual Assistant/Lead Graphic Designer</em></p>
                          <p><small>Taught myself how to use Photoshop, Illustrator, and video editing software.</small></p>
                        </div>
                    </div>
                    <Divider/>
                    <div className="contain right">
                        <div className="content">
                          <h3>September 2012 - June 2014</h3>
                          <p><em>Substitute Recreation Leader</em></p>
                          <p><small>Learned how to create enjoyable and educational content and responsibility (graduated highschool in 2014)</small></p>
                        </div>
                    </div>
                </div>
            </div>
          </Accordion.Content>
        </Accordion>
      </Segment>
    </div>)
}
}
