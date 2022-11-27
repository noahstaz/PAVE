import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About, Home, Service, Team, Verify, SignInForm, SignUpForm} from "./components/pages";

export default function App() {
  return (
    <div style={{ overflow: "hidden", backgroundColor: "black" }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/signup" component={SignUpForm} />

          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/team" component={Team} />
          <Route path="/verify" component={Verify} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
