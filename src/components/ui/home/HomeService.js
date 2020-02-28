import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Contact from "../contact/Contact";

const useStyles = makeStyles(theme => ({
  button: {
    ...theme.typography.deploy,
    borderRadius: "35px",
    width: "150px",
    backgroundColor: theme.palette.primary.main
  },
  title: {
    ...theme.typography.tab,
    textAlign: "center"
  },
  description: {
    textAlign: "center"
  },
  graphic: {
    width: "275px"
  },
  container: {
    width: "275px",
    margin: "36px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const HomeService = props => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={props.graphic} alt={props.title} className={classes.graphic} />
      <p className={classes.title}>{props.title}</p>
      <p className={classes.description}>{props.description}</p>
      <Contact
        buttonPrefix=""
        buttonContext="Learn More"
        buttonSuffix=""
        subjectPrefix=""
        subjectContext=""
        subjectSuffix=""
        buttonType=""
      />
    </div>
  );
};

export default HomeService;
