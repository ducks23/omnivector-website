import React, {Fragment} from 'react';
import classes from './ServiceCard.module.css'
import { Helmet } from "react-helmet";

const ServiceCard = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.CardHeader}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div>
        <Helmet>
          <script type="text/javascript" src="https://assets.ubuntu.com/v1/juju-cards-v1.7.2.js"></script>
          <script>
            {`
              console.log('Test', typeof $);
            `}
          </script>
        </Helmet>
        <div class="juju-card" data-id={props.dataId} data-dd ></div>
      </div>
    </div>
  )
}

export default ServiceCard;
