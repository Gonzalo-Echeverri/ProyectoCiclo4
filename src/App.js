import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CreateUsuario from "./components/create-usuario.component";
import EditUsuario from "./components/edit-usuario.component";
import UsuarioList from "./components/usuario-list.component";

import Inicio from './paginas/Inicio';
import Planes from './paginas/Planes';
import Instalaciones from './paginas/Instalaciones';

function App() {
  return (

    <div className="App">

      <Router>

        <header className="App-header">

          <Navbar bg="dark" variant="dark">

            <Container>

              <Navbar.Brand>
                <Link to="/" className="nav-link">
                  Gimnasio EnForma
                </Link>
              </Navbar.Brand>

              <Navbar.Brand>
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </Navbar.Brand>

              <Navbar.Brand>
                <Link to="/planes" className="nav-link">
                  Planes
                </Link>
              </Navbar.Brand>

              <Navbar.Brand>
                <Link to="/instalaciones" className="nav-link">
                  Instalaciones
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">

                <Nav>
                  <Link to={"/create-usuario"} className="nav-link">
                    Registrar Usuario
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/usuario-list"} className="nav-link">
                    Listar Usuarios
                  </Link>
                </Nav>

              </Nav>

            </Container>

          </Navbar>

        </header>


        <Container>

          <Row>
            <Col md={12}>
              <div className="wrapper">

                <Switch>
                  <Route
                    exact
                    path="/"
                    component={Inicio}
                  />

                  <Route
                    exact
                    path="/planes"
                    component={Planes}
                  />

                  <Route
                    exact
                    path="/instalaciones"
                    component={Instalaciones}
                  />

                  <Route
                    exact
                    path="/create-usuario"
                    component={(props) => <CreateUsuario {...props} />}
                  />

                  <Route
                    exact
                    path="/edit-usuario/:id"
                    component={(props) => <EditUsuario {...props} />}
                  />

                  <Route
                    exact
                    path="/usuario-list"
                    component={(props) => <UsuarioList {...props} />}
                  />

                </Switch>

              </div>

            </Col>

          </Row>

        </Container>

      </Router>

    </div>

  );
}

export default App;
