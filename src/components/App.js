import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/header/Header";
import theme from "./ui/theme/Theme";
import Service from "./ui/service/Service";
import bigDataImage from "../assets/founder.jpg";

function App() {
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
          <Route
            exact
            path="/big-data"
            component={() => (
              <Service
                serviceName="Big Data"
                serviceImage={bigDataImage}
                serviceTitle="SPARK/HADOOP WORKFLOW SIMPLIFED"
                serviceText="OSL provides packaging and lifecycle management for all components in the Apache Software Foundation ecosystem."
              />
            )}
          />
          <Route exact path="/hpc" component={() => <div>HPC</div>} />
          <Route
            exact
            path="/elasticsearch"
            component={() => <div>Elasticsearch</div>}
          />
          <Route exact path="/redis" component={() => <div>Redis</div>} />
          <Route exact path="/ceph" component={() => <div>Ceph</div>} />
          <Route
            exact
            path="/batch-enrichment"
            component={() => <div>Batch Enrichment</div>}
          />
          <Route exact path="/devops" component={() => <div>DevOps</div>} />
          <Route exact path="/logging" component={() => <div>Logging</div>} />
          <Route exact path="/" component={() => <div>Home</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
