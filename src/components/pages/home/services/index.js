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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </Container>
  );
}
