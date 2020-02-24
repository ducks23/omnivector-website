import React from "react";

import classes from "./Service.module.css";
import ServiceHeader from "./serviceHeader/ServiceHeader";
import ServiceCard from "./serviceCard/ServiceCard"

const Service = props => {
  return (
      <div className={classes.Service}>
        <ServiceHeader
          serviceTitle={props.serviceTitle}
          serviceName={props.serviceName}
          serviceImage={props.serviceImage}
          serviceText={props.serviceText}
        />
        <div className={classes.CardContainer}>
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
  );
};

export default Service;
