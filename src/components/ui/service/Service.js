import React from "react";

import classes from "./Service.module.css";
import ServiceHeader from "../serviceHeader/ServiceHeader";

const Service = props => {
  return (
    <div className={classes.Service}>
      <ServiceHeader
        serviceTitle={props.serviceTitle}
        serviceName={props.serviceName}
        serviceImage={props.serviceImage}
        serviceText={props.serviceText}
      />
    </div>
  );
};

export default Service;
