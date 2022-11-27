import React from "react";
import styled from "styled-components";
import "./style.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 200px;
`;

export default function StyledCard({ imgSrc, title, text }) {
  return (
    <Container>
      <div
        style={{
          height: "110px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ width: "90px", marginBottom: "10px" }}
          src={imgSrc}
          alt={title + "card"}
        />
      </div>

      <h3 style={{ marginBottom: "7px" }}>{title}</h3>
      <p style={{ fontSize: "12" }}>{text}</p>
    </Container>
  );
}
