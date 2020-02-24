import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/header/Header";
import theme from "./ui/theme/Theme";
import Service from "./ui/service/Service";
import { serviceRoutesConfig } from "../assets/configData/serviceRoutesConfig"

function App() {


  const serviceRoutes = serviceRoutesConfig.map(service => (
    <Route
      exact
      path={service.path}
      component={() => (
        <Service
          serviceName={service.serviceName}
          serviceImage={service.serviceImage}
          serviceTitle={service.serviceTitle}
          serviceText={service.serviceText}
          cardData={service.cardData}
        />
      )}
    />
  ))

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/home" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/about-us" component={() => <div>About Us</div>} />
          <Route
            exact
            path="/contact-us"
            component={() => <div>Contact Us</div>}
          />
          <Route exact path="/deploy" component={() => <div>Deploy</div>} />
          {serviceRoutes}
          <Route exact path="/" component={() => <div>Home</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
