import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  width: 100vw;
  color: white;
  padding: 0 22%;
  text-align: center;
  padding-bottom: 210px;
`;

export default function Services() {
  return (
    <Container id="poweredBy">
      <h1 style={{ fontSize: 18, color: "white", marginBottom: "10px" }}>
        What we offer?
      </h1>
      <p>
        To be successful, the bank of the future will need to embrace emerging
        technology, remain flexible to adopt evolving business models, and put
        customers at the center of every strategy. Pave as a client-centric
        digital banking platform offers their customers to earn their money's
        worth with its peer to peer lending and credit technology.
      </p>
    </Container>
  );
}
