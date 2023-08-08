import React, { useEffect, useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import CardTiempo from "./CardTiempo";

const FormularioTiempo = () => {
  const [spinner, setSpinner] = useState(true);
  const [ubicacion, setUbicacion] = useState("");
  const [temperatura, setTemperatura] = useState({});
  const [viento, setViento] = useState({});
  const [clima, setClima] = useState({});
  const [lugarUbicado, setLugarUbicado] = useState({});

  // (/\s/g) solo busca espacion en blanco
  // (/\b\w/g) solo busca la primera letra de cada palabra

  // useEffect(() => {
  // }, [ubicacion]);

  const consultarTemp = async (lugar) => {
    try {
      const llamadaTemp =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lugar[0].lat +
        "&lon=" +
        lugar[0].lon +
        "&appid=78e03be1ff7864e8058dc828008ebfd3&units=metric";
      const respuesta = await fetch(llamadaTemp);
      const temp = await respuesta.json();
      setTemperatura(temp.main);
      setViento(temp.wind);
      setClima(temp.weather[0]);

      console.log(llamadaTemp);

      console.log(temp);
      setSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ubicacion);
    if (ubicacion !== "") {
      consultarApi();
    } else {
      alert("debe ingresar una ubicacion");
    }
  };

  const consultarApi = async () => {
    try {
      setSpinner(true);
      const llamadaUbicacion =
        "http://api.openweathermap.org/geo/1.0/direct?q=" +
        ubicacion
          .replace(/\b\w/g, (l) => l.toUpperCase())
          .replace(/\s/g, (e) => (e = "-")) +
        "&limit=1&appid=78e03be1ff7864e8058dc828008ebfd3&lang=sp";

      const respuesta = await fetch(llamadaUbicacion);

      const lugar = await respuesta.json();

      if (lugar.length > 0) {
        console.log("se puede buscar la temperature");
        console.log(lugar[0]);
        setLugarUbicado(lugar[0]);
        consultarTemp(lugar);
      } else {
        alert("ingrese una ubicacion valida");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <section className="bg-secondary p-3 rounded-3 border border-dark border-3">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="provincia">
            <Form.Label className="display-4 text-center">
              Ubicacion <i className="fa-solid fa-map-pin p2"></i>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: San miguel de tucumán"
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="text-end pt-3">
            <Button variant="warning" type="submit">
              Buscar
            </Button>
          </Form.Group>
        </Form>
      </section>
      {spinner === true ? (
        <div className="text-center p-5">
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        <CardTiempo
          temperatura={temperatura}
          viento={viento}
          clima={clima}
          lugarUbicado={lugarUbicado}
        ></CardTiempo>
      )}
    </Container>
  );
};

export default FormularioTiempo;
