import React from "react";
import {Redirect, Router, Switch} from "react-router-dom";



const Index = () => (
  <Router>
    <Switch>
        <Redirect to="/" />
    </Switch>
  </Router>
);
export default Index;