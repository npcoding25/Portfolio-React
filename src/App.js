import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} /> */}

        </Switch>

      </Container>

    </div>

    
  );
}

export default App;