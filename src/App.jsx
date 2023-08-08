import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./component/Titulo";
import FormularioTiempo from "./component/FormularioTiempo";

function App() {
  return (
    <>
      <Container>
        <Titulo></Titulo>
        <FormularioTiempo></FormularioTiempo>
      </Container>
    </>
  );
}

export default App;
