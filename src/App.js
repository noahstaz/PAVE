import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
<<<<<<< Updated upstream
import { About, Home, Service, Team, Verify, SignInForm, SignUpForm} from "./components/pages";
=======
import { About, Home, Service, Team, Main } from "./components/pages";
>>>>>>> Stashed changes

export default function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <BrowserRouter>
        <Switch>
<<<<<<< Updated upstream
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/signup" component={SignUpForm} />

          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/team" component={Team} />
          <Route path="/verify" component={Verify} />
=======
          <Route path="/main" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/team" component={Team} />
          <Route path="/" component={Home} />
>>>>>>> Stashed changes
        </Switch>
      </BrowserRouter>
    </div>
  );
}
