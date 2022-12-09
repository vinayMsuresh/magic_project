import React from "react";
import "./price.css";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
export default function Price() {
  return (
    <Container fluid>
      <div className="priceTop">
        <h1 className="priceTopTitle">
          Find <span className="textOrange">Your Voice</span> across the world
          of audio
        </h1>
        <p className="priceTopDesc">Choose a plan that's right for you</p>
      </div>
      <Row>
        <Col md={4}>
          <Card
            className="pricingSlot"
            onClick={() => console.log("1")}
          >
            <h1 className="priceSlotTitle">Freebie</h1>
            <p className="priceDesc">
              Ideal for individuals who need quick access to basic features.
            </p>
            <div className="pricePerMonth"><h1 className="pricePerMonthTitle">$0</h1>/month</div>
            <Button className="priceSlotBtn" variant="outline-danger">Get Started Now</Button>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="pricingSlot"
            onClick={() => console.log("2")}
          >
            <h1 className="priceSlotTitle">Professonal</h1>
            <p className="priceDesc">
              Ideal for individuals who need advance features and tools.
            </p>
            <div className="pricePerMonth"><h1 className="pricePerMonthTitle">$5</h1>/month</div>
            <Button className="priceSlotBtn">Get Started Now</Button>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="pricingSlot"
            onClick={() => console.log("3")}
          >
            <h1 className="priceSlotTitle">Enterprise</h1>
            <p className="priceDesc">
              Ideal for buisnessess who need personalized services.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
