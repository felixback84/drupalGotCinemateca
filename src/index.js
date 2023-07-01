import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/light-bootstrap-dashboard-pro-react.scss?v=2.0.0";
import "assets/css/demo.css";

// import AuthLayout from "layouts/Auth.js";
import PublicLayout from "layouts/Public.js";

// import Got from "views/Pages/Got";
import LockScreenPage from "views/Pages/LockScreenPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch> 
      <Route exact path="/" component={LockScreenPage}/> 
      {/* <Route path="/auth" render={(props) => <AuthLayout {...props} />} />    */}
      <Route path="/public" render={(props) => <PublicLayout {...props} />} />
      {/* <Redirect from="/got" to="/" /> */}
    </Switch>
  </BrowserRouter>
);
 