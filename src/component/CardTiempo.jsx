import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

const CardTiempo = () => {
  return (
    <Card className="bg-dark text-white m-4" border="primary">
      <Card.Header className="text-center text-warning">
        TIEMPO ACTUAL
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-center pb-3">Argentina, Tucumán</Card.Title>
        <div>
          <Row className="flex-column flex-md-row justify-content-center align-items-center">
            <Col xs={6} className="d-flex">
              <Image
                src="src/assets/iconList/02d.png"
                rounded
                className="d-none d-sm-flex"
              ></Image>
              <div className="text-center">
                <p className="display-4">20ºc</p>
                <p className="fw-bold">
                  25º<i className="fa-solid fa-plus fa-2xs p-1"></i>/13º
                  <i className="fa-solid fa-minus fa-2xs p-1"></i>
                </p>
              </div>
            </Col>
            <Col xs={6} className="d-flex flex-row flex-md-column text-center">
              <p className="fw-light">
                <span className="d-none d-md-inline">Sensacion Termica</span>
                <i className="fa-solid fa-temperature-low p-2"></i>
                <span className="fw-bold p-2">25º</span>
              </p>
              <p className="fw-light">
                <span className="d-none d-md-inline">Viento</span>
                <i className="fa-solid fa-wind p-2"></i>
                <span className="fw-bold p-2">25m/s</span>
              </p>
              <p className="fw-light">
                <span className="d-none d-md-inline">Huemadad</span>
                <i className="fa-solid fa-water p-2"></i>
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
