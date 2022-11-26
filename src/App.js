import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About, Home, Service, Team, Profile } from "./components/pages";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Home} />
        <Route path="/about" render={About} />
        <Route path="/service" render={Service} />
        <Route path="/team" render={Team} />
        <Route path="/profile" render={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
