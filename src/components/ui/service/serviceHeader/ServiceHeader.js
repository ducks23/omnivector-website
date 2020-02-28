import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  Container: {
    display: "flex",
    margin: "35px 13vw",
    width: "60%"
  },
  containerImg: {
    objectFit: "cover",
    width: "40vw",
    height: "50vh",
    borderRadius: "36px 0 0 36px",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, .5)"
  },
  ServiceText: {
    fontSize: "1.9vh",
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    width: "25vw",
    position: "relative",
    marginTop: "-24px",
    marginLeft: "8px",
    color: "black",
    opacity: "0.7",
    padding: "10px"
  },
  ServiceTitle: {
    borderRadius: "0px 24px 24px 0px",
    fontSize: "4vw",
    fontWeight: "bold",
    fontFamily: "Ubuntu,Arial,libra sans,sans-serif",
    width: "50vw",
    position: "relative",
    top: ".05vw",
    left: "-20vw",
    lineHeight: ".9",
    backgroundColor: "rgba(255, 255, 255, .8)",
    color: "black",
    padding: "15px",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, .3)"
  }
}));

const ServiceHeader = props => {
  const classes = useStyles();

  return (
    <div className={classes.Container}>
      <div className={classes.CardLeft}>
        <img
          src={`${props.serviceImage}`}
          alt={props.serviceName}
          className={classes.containerImg}
        />
      </div>
      <div className={classes.textContainer}>
        <p className={classes.ServiceTitle}>{props.serviceTitle}</p>
        <p className={classes.ServiceText}>{props.serviceText}</p>
      </div>
    </div>
  );
};

export default ServiceHeader;
