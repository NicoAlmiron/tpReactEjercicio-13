import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

const CardTiempo = ({ temperatura, viento, clima, lugarUbicado }) => {
  return (
    <Card className="bg-dark text-white m-4 w-sm-75" border="primary">
      <Card.Header className="text-center text-warning">
        TIEMPO ACTUAL
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-center pb-3 flex-wrap">
          {lugarUbicado.name}, {lugarUbicado.state}
        </Card.Title>
        <div>
          <Row className="flex-column flex-md-row justify-content-center align-items-center">
            <Col xs={6} className="d-flex">
              <Image
                src={"src/assets/iconList/" + clima.icon + ".png"}
                rounded
                className="d-none d-sm-flex"
              ></Image>
              <div className="text-center">
                <p className="display-4">{Math.round(temperatura.temp)}ºc</p>
                <p className="fw-bold">
                  {Math.round(temperatura.temp_max)}º
                  <i className="fa-solid fa-plus fa-2xs p-1 d-none d-sm-inline"></i>
                  /{Math.round(temperatura.temp_min)}º
                  <i className="fa-solid fa-minus fa-2xs p-1 d-none d-sm-inline"></i>
                </p>
              </div>
            </Col>
            <Col xs={6} className="d-flex flex-row text-center ">
              <p className="fw-light d-none d-sm-inline">
                <span className="d-none d-md-inline">Sensacion Termica</span>
                <i className="fa-solid fa-temperature-low p-2"></i>
                <span className="fw-bold p-2">{temperatura.feels_like}º</span>
              </p>

              <p className="fw-light d-none d-sm-inline">
                <span className="d-none d-md-inline">Viento</span>
                <i className="fa-solid fa-wind p-2"></i>
                <span className="fw-bold p-2">{viento.speed}m/s</span>
              </p>

              <p className="fw-light d-none d-sm-inline">
                <span className="d-none d-md-inline">Huemadad</span>
                <i className="fa-solid fa-water p-2"></i>
                <span className="fw-bold p-2">{temperatura.humidity}%</span>
              </p>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardTiempo;
