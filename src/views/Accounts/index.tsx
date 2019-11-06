import React, { Component } from 'react';

import { Dropdown } from "../../components/Dropdown";
import { Table } from "../../components/Table";
import { AccountBalanceCard } from "../../components/AccountBalanceCard";

import "./Accounts.css"

import { IAccounts, ITransactions } from "../../types";

import { columnDefinitions } from "./columnDefinitions";

interface IProps {}
interface IState {
  accounts: IAccounts[]
  availableBalance: number | null
  presentBalance: number | null
  selectedAccount: IAccounts | null
  transactions: ITransactions[]
};

export class Accounts extends Component<IProps, IState> {
  readonly state: IState = {
    accounts: [],
    selectedAccount: null,
    availableBalance: null,
    presentBalance: null,
    transactions: []
  }

  componentDidMount() {
    fetch("https://fathomless-tundra-18251.herokuapp.com/accounts")
    .then((res) => { return res.json() })
    .then((data) => { this.setState({ accounts: data }) })
  }

  render() {
    const { accounts, availableBalance, presentBalance, transactions } = this.state;
    const onChange = (item: IAccounts) => {
      this.setState({
        selectedAccount: item,
        availableBalance: null,
        presentBalance: null
      }, () => {
        fetch("https://fathomless-tundra-18251.herokuapp.com/transactions")
        .then((res) => { return res.json() })
        .then((data) => { 
          if(this.state.selectedAccount) {
            const { balance, available } = (this.state as any).selectedAccount;
            const filteredTransactions = (data as ITransactions[]).filter((transaction: ITransactions) => {
              return transaction.account === (this.state as any).selectedAccount.accountNumber
            })
            this.setState({ 
              availableBalance: available, 
              presentBalance: balance, 
              transactions: filteredTransactions
            }) 
          }
        })
      })
    }
    return (
      <div>
        <h2>Accounts</h2>
          <Dropdown
            onChange={onChange}
            items={accounts.filter(account => account.name)}
          />
        <div className="Account__Balances">
          <AccountBalanceCard title='Available Balance' balance={availableBalance} />
          <AccountBalanceCard title='Present Balance' balance={presentBalance}/>
        </div>
        <Table
          columns={columnDefinitions}
          data={transactions}
        />
      </div>
      )
  }
}

export default Accounts
