import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import MedicalAttention from "./components/MedicalAttention";
import SupportGroup from "./components/SupportGroup";
import Content from "./components/Content";
import Events from "./components/SupportGroup";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/contacto'>
          <Contact />
        </Route>
        <Route path='/eventos'>
          <Events />
        </Route>
        <Route path='/contenido'>
          <Content />
        </Route>
        <Route path='/grupos-de-ayuda'>
          <SupportGroup />
        </Route>
        <Route path='/atencion-medica'>
          <MedicalAttention />
        </Route>
        <Route path='/quienes-somos'>
          <AboutUs />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;