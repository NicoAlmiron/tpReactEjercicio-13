import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./component/Titulo";
import FormularioTiempo from "./component/FormularioTiempo";
import CardTiempo from "./component/CardTiempo";

function App() {
  return (
    <>
      <Container>
        <Titulo></Titulo>
        <FormularioTiempo></FormularioTiempo>
        <CardTiempo></CardTiempo>
      </Container>
    </>
  );
}

export default App;
