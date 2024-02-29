import './App.css';
import * as React from 'react';

function ProjectCard({projectName, tools, desc, link1, link2, link3}) {
  return (
    <div style={{backgroundColor: "#333232", height: "250px", borderRadius: "20px", marginBottom: "30px"}}>

      <header style={{fontSize: "20px", float: "left", marginLeft: "15px", color: "white", marginTop: "20px", textDecoration: "underline"}}>Project: {projectName}</header>
            <br/>

            <ul style={{float:"left", marginRight: "20px"}}>
              <li style={{float:"left", marginBottom: "10px", color: "white"}}>{tools}</li>
              <li style={{float:"left", marginBottom: "10px", color: "white"}}>{desc}</li>
              <br/>
              <li style={{float:"left", marginBottom: "10px", color: "white"}}>Live Site: <a href={link1}>{link1}</a></li>
              <li style={{float:"left", marginBottom: "10px", color: "white"}}>Source Code: <a href={link2}>{link2}</a></li>
            </ul>

    </div>
  );
}

function IntroCard({projectName, subtext, link1, link2, link3}) {
  return (
    <div style={{backgroundColor: "#333232", height: "250px", borderRadius: "20px", marginBottom: "30px"}}>

      <header style={{fontSize: "20px", float: "left", marginLeft: "15px", color: "white", marginTop: "20px"}}>An Introduction</header>
      <br/>

      <ul style={{float:"left", marginRight: "20px"}}>
      <li style={{float:"left", marginBottom: "10px", color: "white"}}>My interests: Robotic Engineering, Backend Web Development and Automation</li>
        <li style={{float:"left", marginBottom: "10px", color: "white"}}>Tools & Frameworks: Flask, Django, Node.js/React, Bootstrap (4/5), Jquery, Ajax, Wordpress, Google Ads & Google Analytics</li>
        <li style={{float:"left", marginBottom: "10px", color: "white"}}>Languages: Python(3), Java/Kotlin, C++, Javascript, HTML5, GoLang, C++, SQL</li>
        <li style={{float:"left", marginBottom: "10px", color: "white"}}>Work: Internship(Internation Dyslexia Association), Lead Software Engineer on FRC Robotics Team (Java), Velcro Companies USA (Manufacturing Full Time) </li>
        <li style={{float:"left", marginBottom: "10px", color: "white"}}>Education: Southern New Hampshire University (In the last year of bachlors), Great Bay Community College (Dual Enrollment In High School), </li>
      </ul>

    </div>
  );
}

function App() {
  return (
    <div style={{height: "100%", backgroundColor: "#211f1f", width: "70%", margin: "0 auto"}} className="App">
      <IntroCard/>

      <ProjectCard projectName = "CollectorsBoard" tools = "Tools/Frameworks/Languages: Python(3), Flask, SQL, Bootstrap, Ajax, Jquery, Boto3, S3, Analytics & Ads" desc = "CollectorsBoard is a site developed to manage, store, track, value and share collections & collectibles." link1 = "https://collectorsboard.live/" link2="https://github.com/corie-lc/collectorsboard" />

      <ProjectCard projectName = "CollectorsBoard" tools = "Tools/Frameworks/Languages: Python(3), Flask, SQL, Bootstrap, Ajax, Jquery, Boto3, S3, Analytics & Ads" desc = "CollectorsBoard is a site developed to manage, store, track, value and share collections & collectibles." link1 = "https://collectorsboard.live/" link2="https://github.com/corie-lc/collectorsboard" />

    </div>
  );
}

export default App;
