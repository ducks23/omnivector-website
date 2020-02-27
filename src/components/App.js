import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/header/Header";
import theme from "./ui/theme/Theme";
import Service from "./ui/service/Service";
import { configServiceRoutes } from "../assets/configData/configServiceRoutes";
import Footer from "../components/ui/footer/Footer";
import Home from "../components/ui/home/Home";

function App() {
  const [selectedValue, setSelectedValue] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

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
          setSelectedIndex={setSelectedIndex}
          selectedIndex={selectedIndex}
          setSelectedValue={setSelectedValue}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/about-us" component={() => <div>About Us</div>} />
          <Route
            exact
            path="/contact-us"
            component={() => <div>Contact Us</div>}
          />
          <Route exact path="/deploy" component={() => <div>Deploy</div>} />
          {serviceRoutes}
          <Route path="/" component={Home} />
        </Switch>
        <Footer
          selectedValue={selectedValue}
          setSelectedIndex={setSelectedIndex}
          selectedIndex={selectedIndex}
          setSelectedValue={setSelectedValue}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
