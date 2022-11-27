import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import MoneyDetails from './moneyDetails/moneyDetails'
import { Button } from 'antd';
import Example4 from './moneyDetails/modal copy 3';
import NavBar from '../../common/navbar';
import { Navbar } from 'react-bootstrap';
import getMoneyDetails from '../../../routes/api/moneyDetail';

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedTransactionList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionsList: updatedTransactionList,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }
  setBalance(b){
    const item =localStorage.getItem('balance');
    if (item){
    }
    else{
      localStorage.setItem("balance",0);
    }
  }
  getBalance(){
    return localStorage.getItem("balance");
  }
  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const balanceAmount = getMoneyDetails()[1].balance;
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    this.setBalance()
    console.log(this.getBalance())
    return (

      <div className="app-container">
        <NavBar />
        <div className="responsive-container">
          <div className="header-container">
            <h1 className="header-content">
              Welcome to your wallet
            </h1>
          </div>
          <MoneyDetails
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="temp">
          <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-img"
        />
        <div>
          <p className="details-money" testid="balanceAmount">
            <Example4></Example4>
          </p>
        </div>
      </div>
          <div className="transaction-details">
            <div className="history-transactions">
              <h1 className="transaction-header">Transaction history</h1>
              <div className="transactions-table-container">
                <ul className="transactions-table">
                  <li className="table-header-title">
                    <p className="table-header-cell-title">Title</p>
                    <p className="table-header-cell-title">Amount</p>
                    <p className="table-header-cell-title">Type</p>
                  </li>
                  <li className="table-header">
                    <p className="table-header-cell">ToFTX</p>
                    <p className="table-header-cell">1000.10$</p>
                    <p className="table-header-cell">Instant</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager