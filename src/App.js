import './App.css';
import * as React from 'react';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

function updateGit(){
  fetch('https://api.github.com/repos/corie-lc/portfolio/commits?per_page=1')
                      .then(res => res.json())
                      .then(res => {
                        document.getElementById('portfolio-update').innerHTML = "Git Update(s): " + res[0].commit.message
                      });

  fetch('https://api.github.com/repos/corie-lc/collectorsboard/commits?per_page=1')
                        .then(res => res.json())
                        .then(res => {
                          document.getElementById('collectors-update').innerHTML = "Git Update(s): " + res[0].commit.message
                        });         
  fetch('https://api.github.com/repos/corie-lc/ManufacturingConnections/commits?per_page=1')
                        .then(res => res.json())
                        .then(res => {
                          document.getElementById('manu-update').innerHTML = "Git Update(s): " + res[0].commit.message
                        });         
  fetch('https://api.github.com/repos/corie-lc/cb-enterprise/commits?per_page=1')
                        .then(res => res.json())
                        .then(res => {
                          document.getElementById('cbent-update').innerHTML = "Git Update(s): " + res[0].commit.message
                        });                              
  fetch('https://api.github.com/repos/corie-lc/collectorsboard-news-robot/commits?per_page=1')
                        .then(res => res.json())
                        .then(res => {
                          document.getElementById('cbot-update').innerHTML = "Git Update(s): " + res[0].commit.message
                        });         
  fetch('https://api.github.com/repos/corie-lc/GlennifferRobotics/commits?per_page=1')
                        .then(res => res.json())
                        .then(res => {
                          document.getElementById('robot-update').innerHTML = "Git Update(s): " + res[0].commit.message
                        });                                        

}


function openInNewTab(url) {
  window.open(url, '_blank').focus();
}



function ProjectCard() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>CollectorsBoard.live    <Badge className='ms-2' bg="primary">Python</Badge>
        </Accordion.Header>
        <Accordion.Body>
        <div className="mb-3" direction="horizontal" gap={2}>
          <Badge style={{marginRight: "10px"}} bg="success">Python</Badge>
          <Badge style={{marginRight: "10px"}} bg="success">Flask</Badge>
          <Badge style={{marginRight: "10px"}} bg="success">Bootstrap</Badge>
          <Badge style={{marginRight: "10px"}} bg="success">JavaScript, Jquery, Ajax</Badge>
          <Badge  style={{marginRight: "10px"}}bg="success">Hashing</Badge>
          <Badge style={{marginRight: "10px"}} bg="success">SQL</Badge>
        </div>
          CollectorsBoard.live is an open source digital tool to organize, track, share, manage and embrace your collections & collectibles. 
          This site includes the ability to create accounts, edit accounts, create collections, create posts and create comments. Deeper functions include privacy,
          feed recommendation, search options, communities, ect. Written in Python with the help of Flask and Bootstrap Five.

          <hr/>

          <Badge style={{marginRight: "10px"}} id="collectors-update" className='ms-2' bg="secondary"></Badge>

          <br />

          <ButtonGroup className='mt-3' >
            <Button variant="primary" onClick={() => openInNewTab('https://github.com/corie-lc/collectorsboard')}>Source Code</Button>
            <Button variant="success" onClick={() => openInNewTab('https://collectorsboard.live')}>Live Site</Button>
          </ButtonGroup>
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>FRC Robotics Engineering  <Badge className='ms-2' bg="danger">Java</Badge></Accordion.Header>
        <Accordion.Body>
        <div className="mb-3" direction="horizontal" gap={2}>
          <Badge style={{marginRight: "10px"}} bg="success">Robotic Engineering</Badge>
          <Badge style={{marginRight: "10px"}} bg="success">Java</Badge>
          <Badge style={{marginRight: "10px"}} bg="success">Image Processing</Badge>
          <Badge style={{marginRight: "10px"}} bg="success">Automation</Badge>
          <Badge style={{marginRight: "10px"}} bg="success">Awards</Badge>
        </div>
          FRC is a robotics competiton that is taken on by high schoolers. Robots are built with Java or C++ and compete on a national level. I was the lead, and the only
          software engineer on the team for both the 2017-2018 Team and the 2019-2020 Team. 

          <hr/>
          
          The 2018 robot went on two win 2/3 Rookie Awards paired
          with multiple games won. 

          <hr/>

          The 2020 robot never saw action due to the Covid-19 epidemic and limitations. Our team still secured funding through grants, and went on to build 
          an advanced robot that could drive in a fully utonomous mode, by able to shoot balls by itself via color and image processing, climb steps, ect. 
          This robot went on to win multiple local matches between local schools and teams. 


          <hr/>

          <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={() => openInNewTab('https://github.com/corie-lc/RaiderBots-2018-Code')}>Source Code (2018 Robot)</Button>
            <Button variant="success" onClick={() => openInNewTab('https://github.com/corie-lc/2020RaiderBots')}>Source Code (2020 Robot)</Button>
          </ButtonGroup>

        </Accordion.Body>
      </Accordion.Item>
      

      
      <Accordion.Item eventKey="2">
      <Accordion.Header>cb-enterprise <Badge className='ms-2' bg="success">GoLang</Badge></Accordion.Header>
        <Accordion.Body>
          <div className="mb-3" direction="horizontal" gap={2}>
            <Badge style={{marginRight: "10px"}} bg="success">GoLang</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">SQL</Badge>
          </div>

            cb-enterprise is a CLI tool to manage, support and edit systems within the CollectorsBoard realm.

            <hr/>

            <Badge style={{marginRight: "10px"}} id="cbent-update" className='ms-2' bg="secondary"></Badge>
            <br />


          <ButtonGroup className='mt-3'>
          <Button onClick={() => openInNewTab('https://github.com/corie-lc/cb-enterprise')} variant="success">Source Code</Button>
          </ButtonGroup>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
      <Accordion.Header>collectorsboard-news-robot <Badge className='ms-2' bg="primary">Python</Badge></Accordion.Header>
        <Accordion.Body>
          <div className="mb-3" direction="horizontal" gap={2}>
            <Badge style={{marginRight: "10px"}} bg="success">Python</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">Python</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">Web Scraping</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">Automation</Badge>
          </div>

            collectorsboard-news-robot is a CLI bot to search and collect news headlines, and create posts for news headlines specific to a community in CollectorsBoard.live

            <hr/>
            <Badge style={{marginRight: "10px"}} id="cbot-update" className='ms-2' bg="secondary"></Badge>
            <br />


          <ButtonGroup className='mt-3' >
            <Button onClick={() => openInNewTab('https://github.com/corie-lc/collectorsboard-news-robot')} variant="success">Source Code</Button>
          </ButtonGroup>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
      <Accordion.Header>Portfolio <Badge className='ms-2' bg="warning">React/Node.js</Badge></Accordion.Header>
        <Accordion.Body>
          <div className="mb-3" direction="horizontal" gap={2}>
            <Badge style={{marginRight: "10px"}} bg="success">JavaScript</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">React</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">Node.js</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">Bootstrap</Badge>
          </div>

            This site you are looking at now is my portfolio, which includes my projects and interests.

            <hr/>


            <Badge style={{marginRight: "10px"}} id="portfolio-update" className='ms-2' bg="secondary"></Badge>

            <br />


          <ButtonGroup className='mt-3'>
            <Button onClick={() => openInNewTab('https://github.com/corie-lc/portfolio')} variant="success">Source Code</Button>
          </ButtonGroup>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
      <Accordion.Header>Glenniffer Robotics <Badge className='ms-2' bg="primary">Python</Badge><Badge className='ms-2' bg="danger">Java</Badge><Badge className='ms-2' bg="transparent">In Progress</Badge></Accordion.Header>
        <Accordion.Body>
          <div className="mb-3" direction="horizontal" gap={2}>
            <Badge style={{marginRight: "10px"}} bg="success">Python</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">Java</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">Video Processing(OpenCV)</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">Raspberry PI</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">Linux</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">GPIO</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">Building & Electrical</Badge>
          </div>

          This robotics project is two parts, a remote controller via sockets (java, to port to android) and python to control the
          motors, proximity sensors, camera, ect. This is on pause until more parts arrive. Waiting on a central power chip and a larger battery.
          <hr/>

          <Badge style={{marginRight: "10px"}} id="robot-update" className='ms-2' bg="secondary"></Badge>
            <br />

          <ButtonGroup className='mt-3' >
            <Button onClick={() => openInNewTab('https://github.com/corie-lc/GlennifferRobotics')} variant="primary">Glenniffer Robot Code</Button>
            <Button onClick={() => openInNewTab('https://github.com/corie-lc/GlennifferController')} variant="success">Glenniffer Controller Code</Button>
          </ButtonGroup>


        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
      <Accordion.Header>OpenManufacturing <Badge className='ms-2' bg="primary">Kotlin</Badge> <Badge className='ms-2' bg="transparent">In Progress</Badge></Accordion.Header>
        <Accordion.Body>
          <div className="mb-3" direction="horizontal" gap={2}>
            <Badge style={{marginRight: "10px"}} bg="success">Kotlin</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">Java</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">JavaFX</Badge>
            <Badge style={{marginRight: "10px"}} bg="success">Maven/Gradle</Badge>
          </div>

            OpenManufacturing is a piece of software to replace costly traveller software for start-up manufacturing companies. This will be a fully customizable 
            enterprise level application, written in Kotlin with JavaFX. This will have the option to store jobs via a database or, for less tech inclined people, a master folder
            with jobs in it. This is in progress and has limited development.

            

            <hr/>
            <Badge style={{marginRight: "10px"}} id="manu-update" className='ms-2' bg="secondary"></Badge>
            <br />


          <ButtonGroup className='mt-3'>
            <Button onClick={() => openInNewTab('https://github.com/corie-lc/ManufacturingConnections')} variant="success">Source Code</Button>
          </ButtonGroup>

        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}




function ToolBadges() {
  return (
    <div style={{width: "20px;", float: "left"}}  className="mb-3" direction="horizontal" gap={2}>
      <Badge style={{marginRight: "10px"}} bg="success">Flask</Badge>
      <Badge style={{marginRight: "10px"}} bg="success">Node.js</Badge>
      <Badge style={{marginRight: "10px"}} bg="success">React</Badge>
      <Badge style={{marginRight: "10px"}} bg="success">Bootstrap/Bootstrap React</Badge>
      <Badge style={{marginRight: "10px"}} bg="success">Django</Badge>
      <Badge style={{marginRight: "10px"}} bg="success">Jquery & Ajax</Badge>
      <Badge style={{marginRight: "10px"}} bg="success">Wordpress</Badge>
      <Badge style={{marginRight: "10px"}} bg="success">Boto3</Badge>
      <Badge style={{marginRight: "10px"}} bg="success">Linux</Badge>
    </div>
  );
}


function LangBadges() {
  return (
    <div style={{width: "20px;", float: "left"}}  className="mb-3 mt-3" direction="horizontal" gap={2}>
      <Badge style={{marginRight: "10px"}} bg="primary">Python</Badge>
      <Badge style={{marginRight: "10px"}} bg="primary">GoLang</Badge>
      <Badge style={{marginRight: "10px"}} bg="primary">Java</Badge>
      <Badge style={{marginRight: "10px"}} bg="primary">Kotlin</Badge>
      <Badge style={{marginRight: "10px"}} bg="primary">HTML/CSS</Badge>
      <Badge style={{marginRight: "10px"}} bg="primary">JavaScript</Badge>
      <Badge style={{marginRight: "10px"}} bg="primary">C++</Badge>
      <Badge style={{marginRight: "10px"}} bg="primary">SQL</Badge>
    </div>
  );
}

function InterestBadges() {
  return (
    <div style={{width: "20px;", float: "left"}}  className="mb-3" direction="horizontal" gap={2}>
      <Badge style={{marginRight: "10px"}} bg="warning">Robotic Engineering</Badge>
      <Badge style={{marginRight: "10px"}} bg="warning">Backend Web</Badge>
      <Badge style={{marginRight: "10px"}} bg="warning">Backend Enterprise</Badge>
      <Badge style={{marginRight: "10px"}} bg="warning">Automation</Badge>
      <Badge style={{marginRight: "10px"}} bg="warning">Linux</Badge>
    </div>
  );
}


function IntroCard() {
  return (
    <Card className="mt-3 mb-3 ">
      <Card.Header>Introducing: Corie LeClair </Card.Header>
      <Card.Body>
        <Card.Title>Corie LeClair: corieleclair.real@gmail.com</Card.Title>
        
        <Card.Text>
        <LangBadges />
        <br />
        <ToolBadges/>
        <br />

        <InterestBadges/>
        <br />
        <br />
        <br />
        <br />
        <text className='mt-2'>
          If you made it here you must be at least a little bit interested in me. I've dipped into a lot of different tools, langauges and projects but these are my most recent projects and the ones I like the most. Enjoy!
        </text>
        </Card.Text>
        <Button  onClick={() => openInNewTab('https://github.com/corie-lc')} variant="primary">My Github</Button>
      </Card.Body>
    </Card>
  );
}



function HistoryContactAccord() {
  return (
    <Accordion className='mt-3'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Work/Internship History  <Badge className='ms-2' bg="success">Work</Badge></Accordion.Header>
        <Accordion.Body>
        <ListGroup>
          <ListGroup.Item className='bg-success'>Velcro Companies USA (Manufactuing Full Time)</ListGroup.Item>
          <ListGroup.Item>Life Science Outsoucing (Full Time Manufacturing)</ListGroup.Item>
          <ListGroup.Item>Walmart Team Lead (Full Time)</ListGroup.Item>
          <ListGroup.Item className='bg-primary'>International Dyslexia Association Internship (Site Editor)</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Education  <Badge className='ms-2' bg="primary">In Progess</Badge></Accordion.Header>
        <Accordion.Body>
        <ListGroup>
          <ListGroup.Item className='bg-success'> COMP SCI: Southern New Hampshire University (In Progress, Final Year)</ListGroup.Item>
          <ListGroup.Item className='bg-primary'>Great Bay Community College</ListGroup.Item>
          <ListGroup.Item>Spaulding High School, Rochester NH</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function App() {
  document.querySelector("body").setAttribute("data-bs-theme", 'dark')

  return (
    <div  data-bs-theme="dark" style={{height: "100%", width: "70%", margin: "0 auto", marginBottom: "20%"}} className="App">
      <IntroCard/>

      <HistoryContactAccord/>

      <hr/>

      <ProjectCard />


    </div>
  );
}

updateGit()
export default App;
