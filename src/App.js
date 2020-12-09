import React from "react";
import { Container } from "react-bootstrap";
import { HorizontalLayout, Panel, View } from "nice-react-layout";
import Font from "react-font";
import { Line } from "rc-progress";
import BorderWrapper from "react-border-wrapper";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./styles.css";
import Madhu from "./Madhu.jpeg";
import WorkNum from "./work";
import Masters from "./masters";
import BTECH from "./Bachelors";

const style = {
  fontSize: 21,
  fontFamily: "Times New Roman",
  lineHeight: "8px"
};

class App extends React.Component {
  render() {
    return (
      <Container className="borderProp">
        <View>
          <HorizontalLayout mockup>
            <Panel proportion={1} className="Properties">
              <img src={Madhu} alt="Error" className="img" />
              <h3 className="font"> Madhukar,Gangapuram</h3>
              <div className="icon">
                <img
                  style={{ transform: "rotate(-177deg)" }}
                  src="https://img.icons8.com/android/24/000000/phone.png"
                  alt="error"
                />
                <b> +1(646)-200-1737</b>
                <br />
                <img
                  src="https://img.icons8.com/fluent-systems-regular/24/000000/email-open.png"
                  alt="error"
                />
                <Font family="timesnewroman">
                  <h5 className="email">gangamadhu1234@gmail.com</h5>
                </Font>
                <img
                  className="imageProp"
                  src="https://img.icons8.com/android/24/000000/worldwide-location.png"
                  alt="eror"
                />
                <h5 className="boldP">
                  <span> 108Plank Bridge Way</span>, <span>Morrisville</span>,{" "}
                  <span>Nc,27560</span>
                </h5>
                <br />
                <b style={{ fontSize: "20px", fontFamily: "Times New Roman" }}>
                  Skills:
                </b>
                <h5>JavaScript,&nbsp;React:80%</h5>
                <Line percent="80" strokeWidth="4" strokeColor="black" />
                <h5>Angular,&nbsp;Node Js:70%</h5>
                <Line percent="70" strokeWidth="4" strokeColor="black" />
                <h5>HTML,&nbsp;HTML5,&nbsp;CSS:75%</h5>
                <Line percent="75" strokeWidth="4" strokeColor="black" />
                <h5>SQL:&nbsp;70%</h5>
                <Line percent="70" strokeWidth="4" strokeColor="black" />
                <h5>GIT: 75%</h5>
                <Line percent="75" strokeWidth="4" strokeColor="black" />
                <h5>Visual Studio Code: 80%</h5>
                <Line percent="80" strokeWidth="4" strokeColor="black" />
                <h5>Grunt,Gulp,Webpack: 75%</h5>
                <Line percent="80" strokeWidth="4" strokeColor="black" />
                <h5>JSON, JAVA: 75%</h5>
                <Line percent="80" strokeWidth="4" strokeColor="black" />
                <br />
              </div>
            </Panel>
            <Panel proportion={3} className="Cent">
              <BorderWrapper
                borderColour="#a5835a"
                borderWidth="0"
                innerPadding={46}
              >
                <span style={style}>
                  <b
                    style={{
                      padding: " 0px 0px 4px",
                      borderBottom: " 1px solid black",
                      lineHeight: " 3"
                    }}
                  >
                    PROFESSIONAL&nbsp;&nbsp;SUMMARY
                  </b>
                </span>
                <br />
                <span
                  style={{
                    fontFamily: "pacifico-Regular",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  Over all these years of experience in designing and developing
                  professional UI web applications using front-end technologies
                  like HTML, HTML5, CSS3, JavaScript, AJAX, JSON.Hands on
                  expertise in front-end development utilizing JavaScript
                  frameworks such as React.js, Angular.
                </span>
                <b
                  style={{
                    padding: " 0px 0px 7px",
                    borderBottom: " 1px solid black",
                    lineHeight: " 10"
                  }}
                >
                  WORK&nbsp;&nbsp;EXPERIENCE
                </b>
                <div style={{ backgroundColor: "#8B4513", marginTop: "-15px" }}>
                  <VerticalTimeline>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "sandybrown",
                        color: "black"
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)"
                      }}
                      date="June 2019 - present"
                      iconStyle={{ background: "#ed3572" }}
                      icon={<WorkNum />}
                    >
                      <h3
                        className="vertical-timeline-element-title"
                        style={{ fontFamily: "cursive", fontSize: "13px" }}
                      >
                        <b> Software Developer</b>
                      </h3>
                      <h4
                        className="vertical-timeline-element-subtitle"
                        style={{ fontFamily: "cursive", fontSize: "13px" }}
                      >
                        <b>FIDELITY Durham, Nc,27560</b>
                      </h4>
                      <p style={{ fontSize: "10px", fontFamily: "Rockwell" }}>
                        Working on macro-based applications like PI-Login
                        Experience, 2FA, Security center, DAE, NUR all these
                        related to the security of Fid.com. Additionally,
                        working on Inactivity timeout and DBS (Delegated
                        Brokerage Service) enhancements that are part of Fid.com
                        and moving application on-premises to AWS.
                        <ul>
                          <li>
                            Development of high-performance web applications
                            using JavaScript, HTML, CSS, Node.js, React JS, and
                            Material-UI.
                          </li>
                          <li>
                            Implement new Front-End features with JavaScript and
                            other RESTful APIs.
                          </li>
                          <li>
                            Used Jest and Enzyme for mocking functions and
                            writing unit tests along with Istanbul setup for
                            testing component coverage reports.
                          </li>
                        </ul>
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="DEC 2018 - MAY 2019"
                      contentStyle={{
                        background: "#CAAB85",
                        color: "black"
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)"
                      }}
                      iconStyle={{ background: "lightgrey", color: "#fff" }}
                      icon={<WorkNum />}
                    >
                      <h3
                        className="vertical-timeline-element-title"
                        style={{ fontFamily: "cursive", fontSize: "13px" }}
                      >
                        <b>Software Engineer</b>
                      </h3>
                      <h4
                        className="vertical-timeline-element-subtitle"
                        style={{ fontFamily: "cursive", fontSize: "13px" }}
                      >
                        <b> FORD Dearborn MI</b>
                      </h4>
                      <p style={{ fontSize: "11px", fontFamily: "Rockwell" }}>
                        SYNC is an integrated in-vehicle communications and
                        entertainment system embedded in Ford and Lincoln
                        vehicles. SYNC handles all of the commands sent from an
                        App Link application and delivers the intended message
                        inside the vehicle. All UI including commands, display
                        requests, vehicle data authorization, and responses are
                        managed by the SYNC system on behalf of the mobile
                        application and communicated over App Link.
                        <ul>
                          <li>
                            Contributed on creating application logos and images
                            by using Adobe Photoshop CS3 and Illustrator.
                          </li>
                          <li>
                            Contribute to high-performance web applications
                            using JavaScript, HTML5, CSS, React Js, Es6 and
                            Redux.
                          </li>
                        </ul>
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="APRIL 2016 - DEC 2018"
                      contentStyle={{
                        background: "rgb(67, 63, 97)",
                        color: "black"
                      }}
                      iconStyle={{
                        background: "#097770",
                        color: "#fff"
                      }}
                      icon={<WorkNum />}
                    >
                      <h3
                        className="vertical-timeline-element-title"
                        style={{ fontFamily: "cursive", fontSize: "13px" }}
                      >
                        <b>Front End Engineer</b>
                      </h3>
                      <h4
                        style={{ fontFamily: "cursive", fontSize: "13px" }}
                        className="vertical-timeline-element-subtitle"
                      >
                        <b>IBM SAN JOSE, CA</b>
                      </h4>
                      <p style={{ fontSize: "11px", fontFamily: "Rockwell" }}>
                        The IBM Quantum Experience launched in May, giving
                        researchers, students, and enthusiasts cloud-based
                        access to an experimental quantum computing platform. As
                        computing moves beyond the classic binary system, bits
                        with infinite positions will unlock infinite
                        possibilities. Platform users can learn quantum
                        principles and more.
                        <ul>
                          <li>
                            Experience with various MVC Java frameworks like
                            Angular.JS, EXT.JS, Backbone.JS, Node.JS, Bootstrap
                            JS. Responsible for developing the partner Homepages
                            using HTML5, CSS3, JavaScript, React JS, Node JS,
                            and jQuery.
                          </li>
                          <li>
                            Followed Web Accessibility Guidelines while coding
                            the website following with WCAG 2.0 and providing
                            suggesting to designers and developers about
                            accessibility.
                          </li>
                        </ul>
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="JAN 2013 – DEC 2015"
                      contentStyle={{
                        background: "#355712",
                        color: "black"
                      }}
                      iconStyle={{
                        background: "#766A3D",
                        color: "#fff"
                      }}
                      icon={<WorkNum />}
                    >
                      <h3
                        className="vertical-timeline-element-title"
                        style={{ fontFamily: "cursive", fontSize: "13px" }}
                      >
                        <b>Fullstack Developer</b>
                      </h3>
                      <h4
                        className="vertical-timeline-element-subtitle"
                        style={{ fontFamily: "cursive", fontSize: "13px" }}
                      >
                        <b>Bench Tech Software Pvt Ltd, Bengaluru, India</b>
                      </h4>
                      <p style={{ fontSize: "11px", fontFamily: "Rockwell" }}>
                        Ben Tech offers full-service technology support from the
                        switch to wire, wire to Wi-Fi, server to desktop, cloud
                        to the employee, employee to productivity. Benjamin
                        Keith brings 20+ years of technical knowledge,
                        professionalism, and business experience to you.
                        <ul>
                          <li>
                            Deployment of web, enterprise Java components,
                            messaging components and multi-threading.
                          </li>
                          <li>
                            Involved in Design Development and Implementation of
                            business Applications using core Java Technologies.
                          </li>
                        </ul>
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date=" 2016 - 2017"
                      contentStyle={{
                        background: "#ddc3a5",
                        color: "black"
                      }}
                      iconStyle={{
                        background: "rgb(233, 30, 99)",
                        color: "#fff" //#ddc3a5
                      }}
                      icon={<Masters />}
                    >
                      <h3
                        className="vertical-timeline-element-title"
                        style={{ fontFamily: "cursive", fontSize: "13px" }}
                      >
                        <b> Chicago State University</b>
                      </h3>
                      <h4
                        className="vertical-timeline-element-subtitle"
                        style={{ fontFamily: "cursive", fontSize: "13px" }}
                      >
                        <b>Masters CSE Graduate IL</b>
                      </h4>
                      <p style={{ fontSize: "11px", fontFamily: "Rockwell" }}>
                        Chicago State University is a public university in
                        Chicago, Illinois. Founded in 1867 as the Cook County
                        Normal School, it was an innovative teachers college.
                        Eventually the Chicago Public Schools assumed control of
                        the school and it became Chicago Teachers College.{" "}
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="2008 - 2012"
                      contentStyle={{
                        background: "#cfb845 ",
                        color: "black"
                      }}
                      iconStyle={{
                        background: "#315f72",
                        color: "#fff"
                      }}
                      icon={<BTECH />}
                    >
                      <h3
                        className="vertical-timeline-element-title"
                        style={{ fontFamily: "cursive", fontSize: "13px" }}
                      >
                        Scient Institute Of Technology
                      </h3>
                      <h4
                        className="vertical-timeline-element-subtitle"
                        style={{ fontFamily: "cursive", fontSize: "13px" }}
                      >
                        Bachelor Of Technology IT
                      </h4>
                      <p style={{ fontSize: "11px", fontFamily: "Rockwell" }}>
                        Scient Institute of Technology is committed to prepare
                        high standards Engineering & Management professionals
                        with global technical skills, knowledge, leadership
                        quality attitudes by usage
                      </p>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                </div>
              </BorderWrapper>
            </Panel>
          </HorizontalLayout>
        </View>
      </Container>
    );
  }
}
export default App;
