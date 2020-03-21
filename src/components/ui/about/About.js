import React from "react";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import jamesImg from "../../../assets/images/james_headshot_sq300px.jpg";
import coryImg from "../../../assets/images/cory_headshot_sq300px.jpg";

const useStyles = makeStyles(theme => ({
  body: {
    fontFamily: "Ubuntu",
    width: "50vw",
    margin: "4vh auto ",
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      width: "75vw"
    },
    [theme.breakpoints.down("xs")]: {
      width: "85vw"
    }
  },
  foundersTitle: {
    fontFamily: "Ubuntu",
    fontWeight: 600,
    textAlign: "center",
    margin: "auto"
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center"
  },
  img: {
    borderRadius: "36px",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, .3)",
    margin: "3vw"
  },
  names: {
    fontFamily: "Ubuntu,Arial,libra sans,sans-serif",
    position: "relative",
    top: "-5.5vw",
    left: "6vw",
    width: "240px",
    textAlign: "center",
    lineHeight: 0.9,
    backgroundColor: "rgba(255, 255, 255, .9)",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, .5)",
    color: "black",
    padding: "15px",
    borderRadius: "36px"
  },
  spacerDiv: {
    [theme.breakpoints.down("md")]: {
      height: "25vh"
    }
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="body1" className={classes.body}>
        Omnivector Solutions Limited is a Service Disabled Veteran Owned Small
        Business based in Portland, OR. Founded in 2019, OSL provides services
        to deploy, manage and scale software and interconnected services on
        premise and in the cloud. With over 40 years combined experience, the
        OSL founders bring a wealth of capabilities and proven success in taking
        software projects from inception to fruition. In addition to hardware
        and software solutions, OSL also maintains a current dataset of resume,
        contact, social, and demographic information for over 1.5 billion unique
        individuals, delivered to you at the scale you need it.
      </Typography>
      <Typography variant="h4" className={classes.foundersTitle}>
        Our Founders
      </Typography>
      <Grid container className={classes.imgContainer}>
        <Grid item>
          <img src={jamesImg} alt="James Beedy" className={classes.img} />
          <Typography variant="h6" className={classes.names}>
            James Beedy, President
          </Typography>
        </Grid>
        <Grid item>
          <img src={coryImg} alt="Cory Zimmerman" className={classes.img} />
          <Typography variant="h6" className={classes.names}>
            Cory Zimmerman, CEO
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.spacerDiv}></div>
    </Container>
  );
};

export default About;
