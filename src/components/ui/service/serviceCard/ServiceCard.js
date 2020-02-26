import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  deploy: {
    ...theme.typography.deploy,
    borderRadius: "8px",
    backgroundColor: theme.palette.primary.main,
    margin: "0 30px 0 20px "
  },
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    width: "30vw",
    borderRadius: "16px",
    margin: "0 3vw",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, .5)"
  },
  headerTitle: {
    ...theme.typography.deploy,
    display: "block",
    textAlign: "left",
    margin: "16px 16px",
    color: "black"
  },
  headerDescription: {
    ...theme.typography.deploy,
    display: "block",
    textAlign: "left",
    margin: "16px 16px",
    color: "black",
    fontWeight: 200
  },
  footer: {
    ...theme.typography.deploy,
    display: "block",
    margin: "16px 16px"
  }
}));

const ServiceCard = props => {
  const classes = useStyles();

  useEffect(() => {
    "https://assets.ubuntu.com/v1/juju-cards-v1.7.2.js";
  }, [props.title]);

  return (
    <div className={classes.card}>
      <div>
        <h4 className={classes.headerTitle}>{props.title}</h4>
        <p className={classes.headerDescription}>{props.description}</p>
      </div>
      <div>
        <div>JUJU CARD GOES HERE</div>
      </div>
      <div className={classes.footer}>
        <Button className={classes.deploy} variant="contained">
          Get help with {props.title}...
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
