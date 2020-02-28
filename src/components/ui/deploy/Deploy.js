import React from "react";
import Container from "@material-ui/core/Container";
import Iframe from "react-iframe";

const Deploy = () => {
  return (
    <Container>
      <Iframe
        url="https://jaas.ai/u/omnivector"
        width="100%"
        height="4280px"
        id="myId"
        display="initial"
        position="relative"
      />
    </Container>
  );
};

export default Deploy;
