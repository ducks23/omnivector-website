import React from "react";
import Iframe from "react-iframe";

const Deploy = () => {
  return (
    <div>
      <Iframe
        url="https://jaas.ai/u/omnivector"
        width="100%"
        height="4280px"
        id="jaas"
        display="initial"
        position="relative"
        frameBorder="0"
      />
    </div>
  );
};

export default Deploy;
