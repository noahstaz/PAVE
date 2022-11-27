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
  const [tipsBuy, setTipsBuy] = useState([]);
  const [tipsSell, setTipsSell] = useState([]);
  const [lending, setLending] = useState(0);
  const [creditLimit, setCreditLimit] = useState(0);
  const [balance, setBalance] = useState(8200);
  const sellRateRef = useRef();
  const sellAmountRef = useRef();
  const buyRateRef = useRef();
  const buyAmountRef = useRef();

  const username = "jack";

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
  const highestBuy = buyerList[0][2];
  const lowestSell = sellerList[0][2];

  const addAmountBuyerList = (price, amount, list) => {
    var isFound = false;
    for (var i = 0; i < list.length; i++) {
      if (list[i][2] === parseFloat(price)) {
        list[i][1] += parseInt(amount);
        isFound = true;
      }
    }
    if (!isFound) {
      list.push([username, amount, price]);
    }
    setBuyerList(list.slice().sort((a, b) => b[2] - a[2]));
  };
  const addAmountSellerList = (price, amount, list) => {
    var isFound = false;
    for (var i = 0; i < list.length; i++) {
      if (list[i][2] === parseFloat(price)) {
        list[i][1] += parseInt(amount);
        isFound = true;
      }
    }
    if (!isFound) {
      list.push([username, amount, price]);
    }
    setSellerList(list.slice().sort((a, b) => a[2] - b[2]));
  };

  const eatUpHighestBuy = (price, amount, list) => {
    amount = parseInt(amount);
    price = parseFloat(price);
    if (amount > list[0][1]) {
      addAmountSellerList(price, amount - list[0][1], sellerList);
      list.shift();
      setBuyerList(list);
    } else if (amount < list[0][1]) {
      var isFound = false;
      for (var i = 0; i < list.length; i++) {
        if (list[i][2] === parseFloat(price)) {
          list[i][1] -= parseInt(amount);
          isFound = true;
        }
      }
      if (!isFound) {
        list.push([username, amount, price]);
      }
      setBuyerList(list.slice().sort((a, b) => b[2] - a[2]));
    } else if (amount === list[0][1]) {
      list.shift();
      setBuyerList(list);
    }
  };

  const eatUpLowestSell = (price, amount, list) => {
    amount = parseInt(amount);
    price = parseFloat(price);
    if (amount > list[0][1]) {
      addAmountBuyerList(price, amount - list[0][1], buyerList);
      list.shift();
      setSellerList(list);
    } else if (amount < list[0][1]) {
      var isFound = false;
      for (var i = 0; i < list.length; i++) {
        if (list[i][2] === parseFloat(price)) {
          list[i][1] -= parseInt(amount);
          isFound = true;
        }
      }
      if (!isFound) {
        list.push([username, amount, price]);
      }
      setBuyerList(list.slice().sort((a, b) => a[2] - b[2]));
    } else if (amount === list[0][1]) {
      list.shift();
      setSellerList(list);
    }
  };

  const handleLendNew = () => {
    const newPrice = sellRateRef.current.value;
    const newAmount = sellAmountRef.current.value;
    const currentPrice = (sellerList[0][2] + buyerList[0][2]) / 2;
    if (parseInt(newAmount) > balance) return;
    if (newPrice > highestBuy) {
      addAmountSellerList(newPrice, newAmount, sellerList); // update CEprice if equal
    } else if (parseFloat(newPrice) === parseFloat(highestBuy)) {
      eatUpHighestBuy(newPrice, newAmount, buyerList); // update amount or eatup if 0
      setLending((prev) => prev + parseInt(newAmount));
      setBalance((prev) => prev - parseInt(newAmount));
    }
  };

  const handleBorrowNew = () => {
    const newPrice = parseFloat(buyRateRef.current.value);
    const newAmount = parseInt(buyAmountRef.current.value);
    const currentPrice = (sellerList[0][2] + buyerList[0][2]) / 2;
    if (newAmount > balance) return;
    if (newPrice < lowestSell) {
      addAmountBuyerList(newPrice, newAmount, buyerList); // update CEprice if equal
    } else if (parseFloat(newPrice) === parseFloat(lowestSell)) {
      eatUpLowestSell(newPrice, newAmount, sellerList); // update amount or eatup if 0
      setCreditLimit((prev) => prev + parseInt(newAmount));
    }
  };

  const handleTipsCalc = () => {
    if (!!buyRateRef.current.value && !!buyAmountRef.current.value) {
      const dailyRate = buyRateRef.current.value / 365;
      const dailyCharges =
        (buyRateRef.current.value / 100 / 365) * buyAmountRef.current.value;
      setTipsBuy([dailyRate, dailyCharges]);
    }
    if (!!sellRateRef.current.value && !!sellAmountRef.current.value) {
      const dailyRate = sellRateRef.current.value / 365;
      const dailyCharges =
        (sellRateRef.current.value / 100 / 365) * sellAmountRef.current.value;
      setTipsSell([dailyRate, dailyCharges]);
    }
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
        {createTable(sellerList.slice().reverse(), "red")}
        <Row
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.4)",
            borderTop: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          <Col style={{ textAlign: "left", fontSize: "18px", color: "white" }}>
            {((sellerList[0][2] + buyerList[0][2]) / 2).toFixed(2)} %
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
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.4)",
              padding: "15px",
              paddingBottom: "10px",
            }}
          >
            {" "}
            Limit | Market
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                borderRight: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              <input
                style={{ marginBottom: "20px", marginTop: "20px" }}
                type="text"
                placeholder="interest rate (%)"
                ref={sellRateRef}
                onChange={handleTipsCalc}
              />
              <input
                onChange={handleTipsCalc}
                type="text"
                placeholder="amount ($)"
                ref={sellAmountRef}
              />
              <p
                style={{
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingTop: "20px",
                }}
              >
                <b>Daily Int. Rate(%):</b>
                {tipsSell[0]?.toFixed(3) ?? ""}
              </p>
              <p
                style={{
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                <b>Daily Profit($):</b>
                {tipsSell[1]?.toFixed(3) ?? ""}
              </p>
              <div style={{ marginTop: "20px" }}>
                <button className="sell" onClick={handleLendNew}>
                  Lend
                </button>
              </div>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                onChange={handleTipsCalc}
                style={{ marginBottom: "20px", marginTop: "20px" }}
                type="text"
                placeholder="interest rate (%)"
                ref={buyRateRef}
              />
              <input
                type="text"
                placeholder="amount ($)"
                ref={buyAmountRef}
                onChange={handleTipsCalc}
              />
              <p
                style={{
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingTop: "20px",
                }}
              >
                <b>Daily Int. Rate(%):</b>
                {tipsBuy[0]?.toFixed(3) ?? ""}
              </p>
              <p
                style={{
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                <b>Daily Charge($):</b>
                {tipsBuy[1]?.toFixed(3) ?? ""}
              </p>
              <div style={{ marginTop: "20px" }}>
                <button className="buy" onClick={handleBorrowNew}>
                  Borrow
                </button>
              </div>
            </div>
          </div>
        </div>
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
          <Row>Balance: {balance}$</Row>
        </Row>
        <Row
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            borderBottom: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          <Row>Lending</Row>
          <Row>{lending}$</Row>
        </Row>{" "}
        <Row
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            borderBottom: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          <Row>Credit limit</Row>
          <Row>{creditLimit}$</Row>
        </Row>{" "}
        <Row
          style={{
            paddingTop: "15px",
          }}
        >
          Auto-loan: true
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

{
  /* <Row
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
                ref={sellRateRef}
              />
            </Row>
            <Row>
              <input type="text" placeholder="amount" ref={sellAmountRef} />
            </Row>
            <Row style={{ marginTop: "200px" }}>
              <button className="sell" onClick={handleLend}>
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
                ref={buyRateRef}
              />
            </Row>
            <Row>
              <input type="text" placeholder="amount" ref={buyAmountRef} />
            </Row>
            <Row style={{ marginTop: "200px" }}>
              <button className="buy" onClick={handleBorrow}>
                Borrow
              </button>
            </Row>
          </Col>
        </Row> */
}
