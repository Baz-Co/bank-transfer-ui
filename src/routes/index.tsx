import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from "../views/Header";
import Accounts from "../views/Accounts";
import Transfers from "../views/Transfers";
import Profile from "../views/Profile";

export const RootRouter = () => (
  <React.Fragment>
    <Router>
      <Header />
      <div className="App-content">
        <Route path="/" exact render={() => <Redirect to="/accounts" />} />
        <Route path="/accounts" exact component={Accounts} />
        <Route path="/transfers" exact component={Transfers} />
        <Route path="/profile" exact component={Profile} />
      </div>
    </Router>
  </React.Fragment>
);

export default RootRouter;