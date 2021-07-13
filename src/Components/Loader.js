import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin-top: 20px;
`;

// const Loader = () => <Container></Container>
// export default Loader

export default () => (
  <Container>
    <span role="img" aria-label="Loading" /*people for blind */>
      ⏰
    </span>
  </Container>
);
