import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About, Home, Service, Team, SignInForm, SignUpForm} from "./components/pages";

export default function App() {
  return (
    <div style={{ overflow: "hidden", backgroundColor: "black" }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={Home} />
          <Route path="/signin" render={SignInForm} />
          <Route path="/signup" render={SignUpForm} />

          <Route path="/about" render={About} />
          <Route path="/service" render={Service} />
          <Route path="/team" render={Team} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
