import React from 'react'
import classes from "./ServiceHeader.module.css"

const serviceHeader = (props) => {
  return (
    <div className={classes.Container}>
    <div className={classes.CardLeft}>
      <img src={props.serviceImage} alt={props.serviceName} />
    </div>
      <div className={classes.TextBlock}>
        <p className={classes.ServiceTitle}>{props.serviceTitle}</p>
      </div>
      <div className={classes.CardRight}>
        <p className={classes.ServiceText}>{props.serviceText}</p>
      </div>
  </div>
  )
};

export default serviceHeader;
