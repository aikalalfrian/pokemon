import React from "react";
import Home from "./Home/HomeContainer";
import MyPokemon from "./Home/MyPokemon";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar fixed="top" expand="sm" bg="dark" variant="dark">
          <Container>
            <Nav>
              <Nav.Link href="/"> Pokemon List </Nav.Link>
              <Nav.Link href="mypokemon"> My Pokemon </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mypokemon" component={MyPokemon} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
