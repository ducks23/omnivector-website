import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/header/Header";
import theme from "./ui/theme/Theme";
import Service from "./ui/service/Service";
import { configServiceRoutes } from "../assets/configData/configServiceRoutes";
import Footer from "../components/ui/footer/Footer";
import Home from "../components/ui/home/Home";
import About from "../components/ui/about/About";
import Deploy from "../components/ui/deploy/Deploy";
import Services from "../components/ui/service/Services";

function App() {
  const [selectedValue, setSelectedValue] = useState(0);

  const serviceRoutes = configServiceRoutes.map(service => (
    <Route
      key={service.serviceName}
      exact
      path={service.path}
      component={() => (
        <Service
          key={service.serviceName}
          serviceName={service.serviceName}
          serviceImage={service.serviceImage}
          serviceTitle={service.serviceTitle}
          serviceText={service.serviceText}
          cardData={service.cardData}
        />
      )}
    />
  ));

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/deploy" component={Deploy} />
          {serviceRoutes}
          <Route path="/" component={Home} />
        </Switch>
        <Footer
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
