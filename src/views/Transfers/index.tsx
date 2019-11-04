import React, { Component } from "react";

import { Form, required } from "../../components/Form";
import { Field } from "../../components/Field";

import "./Transfers.css";

import { IAccounts, IFields } from "../../types";

type ITransfersProps = {};

type ITransfersState = {
  accounts: IAccounts[];
  externalAccounts: IAccounts[];
  selectedTransfererAccount: IAccounts | null;
  selectedTransfereeAccount: IAccounts | null;
  amount: string;
};

export class Transfers extends Component<ITransfersProps, ITransfersState> {
  readonly state: ITransfersState = {
    accounts: [],
    externalAccounts: [],
    selectedTransfererAccount: null,
    selectedTransfereeAccount: null,
    amount: ""
  };

  componentDidMount() {
    fetch("https://fathomless-tundra-18251.herokuapp.com/accounts")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ accounts: data });
      });

    fetch("https://fathomless-tundra-18251.herokuapp.com/ext_accounts")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ externalAccounts: data });
      });
  }

  onTransfererChange = (item: IAccounts) => {
    this.setState({
      selectedTransfererAccount: item
    });
  };

  onTransfereeChange = (item: IAccounts) => {
    this.setState({
      selectedTransfereeAccount: item
    });
  };

  onAmountChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      amount:
        e &&
        e.currentTarget &&
        e.currentTarget.value &&
        e.currentTarget.value.replace("/^d+(.d{0,2})?$//", "")
    });
  };

  render() {
    const { accounts, externalAccounts, amount } = this.state;

    const fields: IFields = {
      selectedTransfererAccount: {
        id: "transfererAccount",
        label: "Account sending Funds",
        editor: "dropdown",
        options: accounts,
        validation: { rule: required }
      },
      amount: {
        id: "amount",
        label: "Amount",
        editor: "number",
        validation: { rule: required }
      },
      selectedTransfereeAccount: {
        id: "transfereeAccount",
        label: "Account to Receive Funds",
        editor: "dropdown",
        options: [...accounts, ...externalAccounts],
        validation: { rule: required }
      }
    };

    return (
      <div style={{width: '400px', margin: '0 auto'}}>
        <h2>Transfers</h2>
        <Form
          apiPath="hey"
          fields={fields}
          render={() => (
            <React.Fragment>
              <small>
                1. Select a Bank Inc. account you would like to transfer money out of.
                <br />
                2. Enter the desired amount to transfer.
                <br />
                3. Select any internal or external account to transfer money to.
                <br />
                <strong>Note:</strong> Additional accounts can be added on the Accounts page.
              </small>
              <br />
              <br />
              <Field {...fields.selectedTransfererAccount} />
              <Field {...fields.amount} />
              <Field {...fields.selectedTransfereeAccount} />
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default Transfers;
