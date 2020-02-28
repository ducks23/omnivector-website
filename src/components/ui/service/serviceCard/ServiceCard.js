import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Contact from "../../contact/Contact";

const useStyles = makeStyles(theme => ({
  deploy: {
    ...theme.typography.deploy,
    borderRadius: "8px",
    backgroundColor: theme.palette.secondary.light,
    color: "black",
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
  },
  jujuCard: {
    margin: "1vw"
  },
  img: {
    width: "28vw",
    border: "1px solid lightgrey"
  }
}));

const ServiceCard = props => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div>
        <h4 className={classes.headerTitle}>{props.title}</h4>
        <p className={classes.headerDescription}>{props.description}</p>
      </div>
      <div className={classes.jujuCard}>
        <img
          src={`${props.cardImg}`}
          alt={props.title}
          className={classes.img}
        />
      </div>
      <TextField
        id="outlined-basic"
        label="Deploy with CLI"
        variant="outlined"
        value={props.cliCommand}
        className={classes.jujuCard}
        selected
      />
      <Button
        variant="outlined"
        color="primary"
        href={props.jaasLink}
        className={classes.jujuCard}
      >
        Deploy with JAAS
      </Button>
      <div className={classes.footer}>
        <Contact
          buttonPrefix="Get help with "
          buttonContext={props.title}
          buttonSuffix="..."
          subjectPrefix="I'm interested in finding out more about "
          subjectContext={props.title}
          subjectSuffix="..."
        />
      </div>
    </div>
  );
};

export default ServiceCard;
