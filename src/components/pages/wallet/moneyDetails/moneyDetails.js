import './index.css'
import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Example from './modal';
import Example2 from './modal copy';
import Example3 from './modal copy 2';
import { left } from '@popperjs/core';
import Example4 from './modal copy 3';
const MoneyDetails = props => {
  const [balanceAmount, setBalanceAmount] = useState(0);
  useEffect(()=>{
    setBalanceAmount(getBalance);
  }, [])
  function getBalance(){
    return localStorage.getItem("balance");
  }
  const {incomeAmount, expensesAmount} = props
  const handleDeposit = () =>{

  }
  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money" testid="balanceAmount">
            ${balanceAmount}
          </p>
          <Example > </Example>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-img"
        />
        <div>
          <p className="details-text">Credit limit</p>
          <p className="details-money" testid="incomeAmount">
            ${incomeAmount}
          </p>
          <Example2> </Example2>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-img"
        />
                <div>
          <p className="details-text">Transfer</p>
          <Example3> </Example3>
        </div>
        
        <span>
    
        </span>
      </div>
    </div>
  )
}

export default MoneyDetails