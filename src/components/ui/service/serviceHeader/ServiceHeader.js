import React from 'react'
import classes from "./ServiceHeader.module.css"

const serviceHeader = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.CardLeft}>
        <img src={`${props.serviceImage}`} alt={props.serviceName} />
      </div>
      <div className={classes.textContainer}>
          <p className={classes.ServiceTitle}>{props.serviceTitle}</p>
          <p className={classes.ServiceText}>{props.serviceText}</p>
      </div>
    </div>
  )
};

export default serviceHeader;
