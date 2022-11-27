import React from "react";
import styled from "styled-components";
import githubLogo from "../../../../assets/poweredByLogo/github.png";
import googleLogo from "../../../../assets/poweredByLogo/google-logo.webp";
import desoLogo from "../../../../assets/poweredByLogo/deso.png";
import vsLogo from "../../../../assets/poweredByLogo/vscode1.png";
import twilioLogo from "../../../../assets/poweredByLogo/twilio.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding-bottom: 150px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  padding: 0 100px;
`;

const StyledCard = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Card = ({ imgSrc, altText }) => (
  <StyledCard>
    <img
      width="100px"
      style={{ maxHeight: "150px" }}
      src={imgSrc}
      alt={altText}
    />
  </StyledCard>
);

const PoweredBy = () => {
  return (
    <Container id="poweredBy">
      <h1 style={{ fontSize: 18, color: "white", marginBottom: "10px" }}>
        Powered by:
      </h1>
      <FlexContainer>
        <Card imgSrc={googleLogo} altText="google logo" />
        <Card imgSrc={githubLogo} altText="github logo" />
        <Card imgSrc={desoLogo} altText="deso logo" />
        <Card imgSrc={vsLogo} altText="visual studio code logo" />
        <Card imgSrc={twilioLogo} altText="twilio logo" />
      </FlexContainer>
    </Container>
  );
};

export default PoweredBy;
