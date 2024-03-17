import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vedant Upadhye </span>
            from <span className="purple">Nagpur, India. </span>
            I am currently pursuing BTECH from SVPCET in AI/ML
            <br />
            <br />
            <h1 style={{ fontSize: "1.2em" }} className="text-center">
              My Work <span className="purple">Experience </span> 
            </h1>
            <p> Worked as a blockchain researcher and developer Intern at Ceve Consultancy for 6 months </p>
            
            <br />

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
