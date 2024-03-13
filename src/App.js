import './App.css';
import * as React from 'react';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';



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
        <Stack className="mb-3" direction="horizontal" gap={2}>
          <Badge bg="success">Python</Badge>
          <Badge bg="success">Flask</Badge>
          <Badge bg="success">Bootstrap</Badge>
          <Badge bg="success">JavaScript, Jquery, Ajax</Badge>
          <Badge bg="success">Hashing</Badge>
          <Badge bg="success">SQL</Badge>
        </Stack>
          CollectorsBoard.live is an open source digital tool to organize, track, share, manage and embrace your collections & collectibles. 
          This site includes the ability to create accounts, edit accounts, create collections, create posts and create comments. Deeper functions include privacy,
          feed recommendation, search options, communities, ect. Written in Python with the help of Flask and Bootstrap Five.

          <hr/>

          <ButtonGroup className='mt-3' >
            <Button variant="primary" onClick={() => openInNewTab('https://github.com/corie-lc/collectorsboard')}>Source Code</Button>
            <Button variant="success" onClick={() => openInNewTab('https://collectorsboard.live')}>Live Site</Button>
          </ButtonGroup>
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>FRC Robotics Engineering  <Badge className='ms-2' bg="danger">Java</Badge></Accordion.Header>
        <Accordion.Body>
        <Stack className="mb-3" direction="horizontal" gap={2}>
          <Badge bg="success">Robotic Engineering</Badge>
          <Badge bg="success">Java</Badge>
          <Badge bg="success">Image Processing</Badge>
          <Badge bg="success">Automation</Badge>
          <Badge bg="success">Awards</Badge>
        </Stack>
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
          <Stack className="mb-3" direction="horizontal" gap={2}>
            <Badge bg="success">GoLang</Badge>
            <Badge bg="success">SQL</Badge>
          </Stack>

            cb-enterprise is a CLI tool to manage, support and edit systems within the CollectorsBoard realm.

            <hr/>


          <ButtonGroup className='mt-3'>
          <Button onClick={() => openInNewTab('https://github.com/corie-lc/cb-enterprise')} variant="success">Source Code</Button>

            <Button variant="success" >Source Code</Button>
          </ButtonGroup>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
      <Accordion.Header>collectorsboard-news-robot <Badge className='ms-2' bg="primary">Python</Badge></Accordion.Header>
        <Accordion.Body>
          <Stack className="mb-3" direction="horizontal" gap={2}>
            <Badge bg="success">Python</Badge>
            <Badge bg="success">Python</Badge>
            <Badge bg="success">Web Scraping</Badge>
            <Badge bg="success">Automation</Badge>
          </Stack>

            collectorsboard-news-robot is a CLI bot to search and collect news headlines, and create posts for news headlines specific to a community in CollectorsBoard.live

            <hr/>


          <ButtonGroup className='mt-3' >
            <Button onClick={() => openInNewTab('https://github.com/corie-lc/collectorsboard-news-robot')} variant="success">Source Code</Button>
          </ButtonGroup>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
      <Accordion.Header>Portfolio <Badge className='ms-2' bg="warning">React/Node.js</Badge></Accordion.Header>
        <Accordion.Body>
          <Stack className="mb-3" direction="horizontal" gap={2}>
            <Badge bg="success">JavaScript</Badge>
            <Badge bg="success">React</Badge>
            <Badge bg="success">Node.js</Badge>
            <Badge bg="success">Bootstrap</Badge>
          </Stack>

            This site you are looking at now is my portfolio, which includes my projects and interests.

            <hr/>


          <ButtonGroup className='mt-3'>
            <Button onClick={() => openInNewTab('https://github.com/corie-lc/portfolio')} variant="success">Source Code</Button>
          </ButtonGroup>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
      <Accordion.Header>Tank TP101 Robotics Project <Badge className='ms-2' bg="primary">C++</Badge></Accordion.Header>
        <Accordion.Body>
          <Stack className="mb-3" direction="horizontal" gap={2}>
            <Badge bg="success">C++</Badge>
            <Badge bg="success">Image/Video Processing</Badge>
            <Badge bg="success">Raspberry PI</Badge>
            <Badge bg="success">Linux</Badge>
            <Badge bg="success">GPIO</Badge>
            <Badge bg="success">Building & Electrical</Badge>
          </Stack>

            This will be updated shortly once the source code is published. 

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}




function ToolBadges() {
  return (
    <Stack className="mb-3" direction="horizontal" gap={2}>
      <Badge bg="success">Flask</Badge>
      <Badge bg="success">Node.js</Badge>
      <Badge bg="success">React</Badge>
      <Badge bg="success">Bootstrap/Bootstrap React</Badge>
      <Badge bg="success">Django</Badge>
      <Badge bg="success">Jquery & Ajax</Badge>
      <Badge bg="success">Wordpress</Badge>
      <Badge bg="success">Boto3</Badge>
      <Badge bg="success">Linux</Badge>
    </Stack>
  );
}


function LangBadges() {
  return (
    <Stack style={{width: "20px;"}}  className="mb-3" direction="horizontal" gap={2}>
      <Badge bg="primary">Python</Badge>
      <Badge bg="primary">GoLang</Badge>
      <Badge bg="primary">Java</Badge>
      <Badge bg="primary">Kotlin</Badge>
      <Badge bg="primary">HTML/CSS</Badge>
      <Badge bg="primary">JavaScript</Badge>
      <Badge bg="primary">C++</Badge>
      <Badge bg="primary">SQL</Badge>
    </Stack>
  );
}

function InterestBadges() {
  return (
    <Stack className="mb-3 overflow: scroll;" direction="horizontal" gap={2}>
      <Badge bg="warning">Robotic Engineering</Badge>
      <Badge bg="warning">Backend Web</Badge>
      <Badge bg="warning">Backend Enterprise</Badge>
      <Badge bg="warning">Automation</Badge>
      <Badge bg="warning">Linux</Badge>
    </Stack>
  );
}


function IntroCard() {
  return (
    <Card className="mt-3 mb-3 ">
      <Card.Header>Introduction(Site Is Not Ready For Mobile Use Yet)</Card.Header>
      <Card.Body>
        <Card.Title>Corie LeClair: corieleclair.real@gmail.com</Card.Title>
        
        <Card.Text>
        <LangBadges />
        <ToolBadges/>
        <InterestBadges/>
          Starting my journey in software development has left me with a lot of expierences. These range from competitive robotics competitions, internships, database tools, full fledged social media web application and more. Passion drives my exploration and development when it comes to softare development.
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
          <ListGroup.Item>Walmart Team Lead (Full Time Manufacturing)</ListGroup.Item>
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
    <div  data-bs-theme="dark" style={{height: "100%", width: "70%", margin: "0 auto"}} className="App">
      <IntroCard/>

      <HistoryContactAccord/>

      <hr/>

      <ProjectCard />


    </div>
  );
}

export default App;
