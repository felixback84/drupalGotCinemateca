import React from "react";
import { Switch, Route } from "react-router-dom";

// compo
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footers/Footer.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

// dinamically create Admin routes
import routes from "routes.js";

function Public() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/public") {
        // console.log(prop.path)
        return (
          <Route
            path={prop.layout + prop.path}
            key={key}
            component={prop.component}
          />
        );
        
      } else {
        return null;
      }
    });
  };
  
  return (
    <>
      <div className="wrapper wrapper-full-page">
        {/* Navbar */}
        <AdminNavbar /> 
        {/* End Navbar */}
        <Switch>
          {getRoutes(routes)}
        </Switch>
        <Footer />
      </div>
     
    </>
  );
}

export default Public;
