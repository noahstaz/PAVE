import React from "react";
import { Col as BaseCol, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import StyledCard from "./styled-card";
import lending from "../../../../assets/features/lending.png";
import autoCredit from "../../../../assets/features/autocredit.png";
import freeTransfer from "../../../../assets/features/freeTransfer.png";
import marketInterest from "../../../../assets/features/marketInterest.png";
import noFees from "../../../../assets/features/noFees.png";
import identityTheftProtection from "../../../../assets/features/identityTheftProtection.png";

const Col = styled(BaseCol)`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
`;

export default function Features() {
  return (
    <Container>
      <Row style={{ borderBottom: "1px solid white" }}>
        <Col style={{ borderRight: "1px solid white" }}>
          <StyledCard
            title="Auto Lending"
            text="Our P2P lending system automatically lends the money that you deposited to other clients using the market interest rate and generate returns for you."
            imgSrc={lending}
          />
        </Col>
        <Col style={{ borderRight: "1px solid white" }}>
          <StyledCard
            title="Auto Credit Limit Assignment"
            text="As soon as you lend your deposit using our P2P Lending system, we assign you with a credit limit equal to what you lent, which means that you can continue to spend the money you have while your money is working for your and generating interest income."
            imgSrc={autoCredit}
          />
        </Col>
        <Col>
          <StyledCard
            title="Free International Transfers and Withdrawals"
            text="You can transfer money freely worldwide to other users who have a PAVE account. We use blockchain technology to enable you transfer money internationally which lets us do it totally free."
            imgSrc={freeTransfer}
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ borderRight: "1px solid white" }}>
          <StyledCard
            title="Market Interest Rate and Limit Orders"
            text="Our interest rates will be totally determined by demand and supply mechanism. If you don’t want to use auto-lending feature, you can always give Limit Orders and lend your money for the interest rate you choose."
            imgSrc={marketInterest}
          />
        </Col>
        <Col style={{ borderRight: "1px solid white" }}>
          <StyledCard
            title="No Fees"
            text="You will never pay credit card surcharge fees, transfer fees, and withdrawal fees. We prioritize you."
            imgSrc={noFees}
          />
        </Col>
        <Col>
          <StyledCard
            title="Identity Theft and Anti-Scam Protection"
            text="Using our own unique KYC system which uses DeSo Blockchain, we save your identity in blockchain once and for all, which prevents identity-theft and protect users from getting scammed."
            imgSrc={identityTheftProtection}
          />
        </Col>
      </Row>
    </Container>
  );
}
