import React, { useRef, useState, useEffect } from "react";
import NavBar from "../../common/navbar";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import crossV2 from "../../../functions/cross-v2";
import "./style.css";

var marketPricing = require("market-pricing");

const OrderRow = ({ data, highlight, color }) => {
  const [price, amount] = data;
  return (
    <Row style={highlight ? { backgroundColor: "green" } : {}}>
      <Col style={{ textAlign: "left", color: { color } }}>{price}</Col>
      <Col>{amount}</Col>
    </Row>
  );
};

// const mockData = {
//   1.7: 123,
//   1.6: 123,
//   1.5: 123,
//   1.4: 123,
//   1.3: 123,
//   1.2: 123,
//   1.1: 123,
//   1.0: 123,
// };

const mockData = {
  5.7: 0,
  5.6: 1,
  5.5: 0,
  5.4: 0,
  5.3: 1,
  5.2: 0,
  5.1: 0,
};

const Main = () => {
  const [data, setData] = useState(mockData);
  const [sellerList, setSellerList] = useState([
    ["bob1", 100, 5.4],
    ["fred2", 100, 5.5],
    ["bob3", 213, 5.6],
    ["fred4", 783, 5.7],
    ["bob5", 1283, 5.8],
    ["fred6", 2, 5.9],
    ["bob7", 20, 6.0],
    ["bob8", 90, 6.1],
  ]);
  const [buyerList, setBuyerList] = useState([
    ["fred1", 103, 5.3],
    ["fred2", 25, 5.2],
    ["fred3", 10, 5.1],
    ["fred4", 23, 5.0],
    ["fred5", 124, 4.9],
    ["fred6", 324, 4.8],
    ["fred7", 581, 4.7],
    ["fred8", 10, 4.6],
  ]);
  const [CErate, setCErate] = useState(
    (buyerList[0][2] + sellerList[0][2]) / 2
  );
  const userRef = useRef();
  const rateRef = useRef();
  const amountRef = useRef();
  const typeRef = useRef();

  useEffect(() => {
    const { CEprice, newBuyerList, newSellerList, lendDone, borrowDone } =
      crossV2(buyerList, sellerList, 2, 1, 2, 1) || {};

    if (!!CEprice && !!newBuyerList && !!newSellerList) {
      if (CErate !== CEprice) setCErate(CEprice);
      if (newBuyerList !== buyerList) setBuyerList(newBuyerList);
      if (sellerList !== newSellerList) setSellerList(newSellerList);
    }
  }, []);

  const createTable = (data, color) => (
    <>
      {data.map((key, idx) => {
        return <OrderRow data={[key[2], key[1]]} color={color} />;
      })}
    </>
  );
  // buyer = borrow, seller = lender

  const handleUpdate = () => {
    const newPrice = rateRef.current.value;
    const newAmount = amountRef.current.value;
    if (typeRef.current.value === "buy") {
      var newBuyerList1 = [
        ...buyerList,
        [userRef.current.value, parseFloat(newAmount), parseFloat(newPrice)],
      ];
      newBuyerList1.sort((a, b) => b[2] - a[2]);
      console.log("newSellerlist", sellerList);
      console.log("newBuyerlist", newBuyerList1);
      const res = crossV2(newBuyerList1, sellerList, 2, 1, 2, 1);
      const { CEprice, newBuyerList, newSellerList, lendDone, borrowDone } =
        res || {};
      if (!!CEprice && !!newBuyerList && !!newSellerList) {
        if (CErate !== CEprice) setCErate(CEprice);
        if (newBuyerList !== buyerList) setBuyerList(newBuyerList);
        if (sellerList !== newSellerList) setSellerList(newSellerList);
      } else {
        setBuyerList(newBuyerList1);
      }
    } else if (typeRef.current.value === "sell") {
      var newSellerList1 = [
        ...sellerList,
        [userRef.current.value, parseFloat(newAmount), parseFloat(newPrice)],
      ];
      newSellerList1.sort((a, b) => b[2] - a[2]);
      console.log("newSellerlist", newSellerList1);
      console.log("newBuyerlist", buyerList);
      const { CEprice, newBuyerList, newSellerList, lendDone, borrowDone } =
        crossV2(buyerList, newSellerList1, 2, 1, 2, 1) || {};
      if (!!CEprice && !!newBuyerList && !!newSellerList) {
        if (CErate !== CEprice) setCErate(CEprice);
        if (newBuyerList !== buyerList) setBuyerList(newBuyerList);
        if (sellerList !== newSellerList) setSellerList(newSellerList);
      } else {
        setSellerList(newSellerList1);
      }
    }

    // const { CEprice, newBuyerList, newSellerList, lendDone, borrowDone } =
    //   crossV2(buyerList, sellerList, 2, 1, 2, 1);
    // setCEprice(CEprice);
    // setBuyerList(newBuyerList);
    // setSellerList(newSellerList);
    // console.log(CEprice, newBuyerList, newSellerList, lendDone, borrowDone);
  };

  return (
    <React.Fragment>
      <NavBar main profile={{ name: "John Doe" }} />
      <Container
        style={{
          marginTop: "70px",
          position: "fixed",
          textAlign: "right",
          // height: "100vh",
          paddingBottom: "20px",
          width: "20%",
          alignSelf: "start",
          marginLeft: 0,
          fontSize: "12px",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          borderRadius: "0 20px 20px 0",
          backgroundColor: "#161a1e",
          color: "white",
          fontFamily: "Araboto",
          fontWeight: "bold",
          height: "80%",
        }}
      >
        <Row
          style={{
            fontSize: "10px",
            marginBottom: "20px",
            borderBottom: "1px solid rgba(255,255,255,0.4)",
            textAlign: "center",
          }}
        >
          <Col>Int. Rate (%)</Col>
          <Col>Amount ($)</Col>
        </Row>
        {createTable(sellerList.reverse(), "red")}
        <Row
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.4)",
            borderTop: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          <Col style={{ textAlign: "left", fontSize: "18px", color: "white" }}>
            {CErate} %
          </Col>
        </Row>
        {createTable(buyerList)}
      </Container>
      <Container
        style={{
          position: "fixed",
          margin: "auto",
          width: "50%",
          top: "70px",
          left: "25%",
          backgroundColor: "#161a1e",
          borderRadius: "20px",
          height: "80%",
          color: "white",
          padding: "20px",
        }}
      >
        <Row
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.4)",
            paddingBottom: "10px",
          }}
        >
          Limit | Market
        </Row>
        <Row
          style={{
            width: "96%",
            position: "absolute",
            bottom: 0,
            height: "68%",
            left: "24px",
            paddingRight: "10px",
          }}
        >
          <Col style={{ padding: 0 }}>
            <Row>
              <input
                style={{ width: "150px", marginRight: "20px" }}
                type="text"
                placeholder="interest rate"
                ref={rateRef}
              />
            </Row>
            <Row>
              <input type="text" placeholder="amount" ref={amountRef} />
            </Row>
            <Row style={{ marginTop: "200px" }}>
              <button className="sell" onClick={handleUpdate}>
                Lend
              </button>
            </Row>
          </Col>
          <Col style={{ padding: 0 }}>
            <Row>
              <input
                style={{ width: "150px", marginLeft: "20px" }}
                type="text"
                placeholder="interest rate"
                ref={rateRef}
              />
            </Row>
            <Row>
              <input type="text" placeholder="amount" ref={amountRef} />
            </Row>
            <Row style={{ marginTop: "200px" }}>
              <button className="buy" onClick={handleUpdate}>
                Borrow
              </button>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          position: "fixed",
          width: "20%",
          top: "70px",
          right: "0",
          backgroundColor: "#161a1e",
          color: "white",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          borderRadius: "20px 0 0 20px",
          padding: "25px",
          height: "80%",
        }}
      >
        <Row
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.4)",
            paddingBottom: "15px",
          }}
        >
          My Wallet
        </Row>
        <Row
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            borderBottom: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          <Row>2086$ arrowUpIcon</Row>
          <Row>+86$ interest earned last month</Row>
        </Row>
        <Row
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            borderBottom: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          <Row>Lending</Row>
          <Row>2000$</Row>
        </Row>{" "}
        <Row
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            borderBottom: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          <Row>Credit limit</Row>
          <Row>2000$</Row>
        </Row>{" "}
        <Row
          style={{
            paddingTop: "15px",
          }}
        >
          Auto-loan CheckMark
        </Row>
      </Container>

      {/* username
      <input type="text" ref={userRef} />
      rate
      <input type="text" ref={rateRef} />
      amount
      <input type="text" ref={amountRef} />
      sell/buy
      <input type="text" ref={typeRef} />
      <button onClick={handleUpdate}>update</button> */}
    </React.Fragment>
  );
};

export default Main;

// const buyOrders = [];
//   const sellOrders = [];
//   const buyPrices = [];
//   const sellPrices = [];
//   buyerList.forEach((val) => {
//     buyOrders.push([val[1], val[2]]);
//     buyPrices.push(val[2]);
//   });
//   console.log(buyOrders);
//   sellerList.forEach((val) => {
//     sellOrders.push([val[1], val[2]]);
//     sellPrices.push(val[2]);
//   });
//   const lowestBuy = Math.min(...buyPrices);
//   const highestSell = Math.max(...sellPrices);

//   const priceRange = marketPricing.walrasianCEPriceRange(
//     lowestBuy,
//     highestSell,
//     0.01,
//     marketPricing.demandFromQueue(buyOrders, 1, 0),
//     marketPricing.supplyFromQueue(sellOrders, 1, 0)
//   );
//   console.log("price range", priceRange);
//   console.log("lowestBuy, highestSell ", lowestBuy, highestSell);
