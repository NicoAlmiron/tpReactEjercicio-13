import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

const CardTiempo = () => {
  return (
    <Card className="bg-dark text-white m-4" border="primary">
      <Card.Header>TIEMPO ACTUAL</Card.Header>
      <Card.Body>
        <Card.Title>Argentina, Tucumán</Card.Title>
        <div>
          <Row>
            <Col xs={6} className="d-flex">
              <Image src="src/assets/iconList/02d.png" rounded></Image>
              <div>
                <p className="display-4">25ºc</p>
                <p className="fw-light">25º/13º</p>
              </div>
            </Col>
            <Col xs={6} className="">
              <p className="fw-light">
                Sensacion Termica
                <i className="fa-solid fa-temperature-low p-1"></i>
                <span className="fw-bold p-2">25º</span>
              </p>
              <p className="fw-light">
                Viento <i className="fa-solid fa-wind p-1"></i>
                <span className="fw-bold p-2">25m/s</span>
              </p>
              <p className="fw-light">
                Huemadad <i className="fa-solid fa-water p-1"></i>
                <span className="fw-bold p-2">25%</span>
              </p>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardTiempo;
