import React from "react";
import { makeStyles } from "@material-ui/styles";
import HomeHeader from "./HomeHeader";
import Grid from "@material-ui/core/Grid";
import HomeService from "./HomeService";
import iaGraphic from "../../../assets/images/computer-code.png";
import lfGraphic from "../../../assets/images/lifecycle.png";
import caGraphic from "../../../assets/images/cloud-agnostic.png";
import hsGraphic from "../../../assets/images/cloud-archetecture.png";
import esGraphic from "../../../assets/images/computer-monitoring.png";
import prGraphic from "../../../assets/images/people.png";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  grid: {
    width: "65%",
    justifyContent: "center"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <HomeHeader />
      <div className={classes.gridContainer}>
        <Grid container direction="row" spacing={4} className={classes.grid}>
          <Grid item>
            <HomeService
              title="INFRASTRUCTURE AUTOMATION"
              description="The DevOps culture at OSL embraces automation in all aspects of infrastructure, network, and cloud operations."
              graphic={`${iaGraphic}`}
            />
          </Grid>
          <Grid item>
            <HomeService
              title="LIFECYCLE FOCUSED"
              description="OSL creates solutions for the entire lifecycle of the application, development workflow, and production operations."
              graphic={`${lfGraphic}`}
            />
          </Grid>
          <Grid item>
            <HomeService
              title="CLOUD AGNOSTIC"
              description="Public, Private, Hybrid, and On-Prem – we excel at designing solutions that can be deployed anywhere."
              graphic={`${caGraphic}`}
            />
          </Grid>
          <Grid item>
            <HomeService
              title="HYPERSCALE SPECIALISTS"
              description="The DevOps culture at OSL embraces automation in all aspects of infrastructure, network, and cloud operations."
              graphic={`${hsGraphic}`}
            />
          </Grid>
          <Grid item>
            <HomeService
              title="ENTERPRISE SUPPORT"
              description="OSL creates solutions for the entire lifecycle of the application, development workflow, and production operations."
              graphic={`${esGraphic}`}
            />
          </Grid>
          <Grid item>
            <HomeService
              title="1.5B UNIQUE PEOPLE RECORDS"
              description="With over 150 data points for each record, we enable organizations to enrich single data points into robust information."
              graphic={`${prGraphic}`}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
