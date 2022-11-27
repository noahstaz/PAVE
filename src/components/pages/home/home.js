import React from "react";
import NavBar from "../../common/navbar";
import LandingContainer from "../../common/styled-container";
import ArrowRight from "../../../assets/arrow_right.png";
import WritingLogo from "../../../assets/pave_writing.png";
import styled from "styled-components";
import PoweredBy from "./powered-by";
import Services from "./services";
import Features from "./features";

const MainLogo = styled.img`
  width: 35vw;
  height: auto;

  @media screen and (max-width: 300px) {
    width: 60vw;
  }
  @media screen and (max-width: 600px) {
    width: 40vw;
  }
`;

const ArrowLogo = styled.img`
  position: absolute;
  transform: rotate(90deg);
  width: 20px;
  height: 30px;
  bottom: 30px;
  /* right: 60px; */
`;

const Home = () => (
  <React.Fragment>
    <NavBar />
    <LandingContainer>
      <MainLogo src={WritingLogo} alt="pave logo in text" />
      <a style={{ position: "absolute", bottom: "30px" }} href="#poweredBy">
        <ArrowLogo src={ArrowRight} alt="arrow right" />
      </a>
    </LandingContainer>
    <PoweredBy />
    <Services />
    <Features />
  </React.Fragment>
);

export default Home;
