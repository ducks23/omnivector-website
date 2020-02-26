import React from "react";

import classes from "./Service.module.css";
import ServiceHeader from "./serviceHeader/ServiceHeader";
import ServiceCard from "./serviceCard/ServiceCard";

const Service = props => {
  const serviceCards = props.cardData.map(card => (
    <ServiceCard
      key={card.cardDataId}
      dataId={card.cardDataId}
      title={card.cardTitle}
      description={card.cardDescription}
    />
  ));
  return (
    <div className={classes.Service}>
      <ServiceHeader
        serviceTitle={props.serviceTitle}
        serviceName={props.serviceName}
        serviceImage={props.serviceImage}
        serviceText={props.serviceText}
      />
      <div className={classes.CardContainer}>{serviceCards}</div>
    </div>
  );
};

export default Service;
