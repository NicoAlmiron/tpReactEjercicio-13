import React from "react";
import { Form } from "react-bootstrap";

const FormularioTiempo = () => {
  return (
    <section className="bg-secondary p-3 rounded-3">
      <Form className="d-md-flex justify-content-evenly align-items-evenly">
        <Form.Group controlId="pais">
          <Form.Label className="display-4">Pais</Form.Label>
          <Form.Control type="text" placeholder="Ej: Argentina"></Form.Control>
        </Form.Group>
        <Form.Group controlId="provincia">
          <Form.Label className="display-4">Provincia</Form.Label>
          <Form.Control type="text" placeholder="Ej: Tucumán"></Form.Control>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioTiempo;
