import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import admin from "../../Assets/Projects/admin_dash.png";
import dropbox from "../../Assets/Projects/dropbox.png";
import myblog from "../../Assets/Projects/myblog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "8px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myblog}
              isBlog={false}
              title="MyBlog"
              description="BlogPost - A blogging website with user authentication and Google sign in methods which allows user to create and publish blogs for others
              "
              ghLink="https://github.com/vedantupadhye/fullstack_blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title=" Admin Dashboard"
              description="
              Admin Dashboard - A admin dashboard for an e-commerce website that allows admin and other users to enlist their products on the website through a admin pannel with user authentication and Google login options.
              "
              ghLink="https://github.com/vedantupadhye/next_adminpanel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dropbox}
              isBlog={false}
              title="Dropbox clone"
              description=" Dropbox - A cloud platform that imitates the working of dropbox includeing features like storing images/vidoes updating it and also sharing it"
              ghLink="https://github.com/vedantupadhye/dropbox"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
