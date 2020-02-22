import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "./ui/header/Header"
import theme from './ui/theme/Theme'

function App() {
  return (

    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/compute" component={() => <div>Compute</div>} />
          <Route exact path="/storage" component={() => <div>Storage</div>} />
          <Route exact path="/data-services" component={() => <div>Data Services</div>} />
          <Route exact path="/devops" component={() => <div>DevOps</div>} />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/deploy" component={() => <div>deploy</div>} />
          <Route exact path="/" component={() => <div>Home</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
