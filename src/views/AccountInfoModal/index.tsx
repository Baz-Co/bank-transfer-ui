import React from "react";

import Modal from "../../components/Modal";
import {
  Form,
  required,
  maxLength
} from "../../components/Form";
import { Field } from "../../components/Field";

import './AccountInfoModal.css'

import { IFields } from "../../types";

type IProfileProps = {};

type IProfileState = {
  isOpen: boolean;
  value: string | null;
};

export class Profile extends React.Component<IProfileProps, IProfileState> {
  constructor(props: IProfileProps) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  readonly state: IProfileState = {
    isOpen: false,
    value: ""
  };

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  fields: IFields = {
    name: {
      id: "name",
      label: "Name",
      validation: { rule: required }
    },
    accountNumber: {
      id: "accountNumber",
      label: "Account Number",
      // validation: { rule: isEmail }
    },
    accountNumber2: {
      id: "accountNumber2",
      label: "Confirm Account Number",
      // validation: { rule: isEmail }
    },
    routingNumber: {
      id: "routingNumber",
      label: "Routing Number",
      // validation: { rule: required }
    }
  };

  render() {
    // const fields: IFields = {
    //   name: {
    //     id: "name",
    //     label: "Name",
    //     validation: { rule: required }
    //   },
    //   accountNumber: {
    //     id: "accountNumber",
    //     label: "Account Number",
    //     // validation: { rule: isEmail }
    //   },
    //   accountNumber2: {
    //     id: "accountNumber2",
    //     label: "Confirm Account Number",
    //     // validation: { rule: isEmail }
    //   },
    //   routingNumber: {
    //     id: "routingNumber",
    //     label: "Routing Number",
    //     // validation: { rule: required }
    //   }
    // };

    return (
      <React.Fragment>
        <button onClick={this.openModal}>open</button>
        <Modal isOpen={this.state.isOpen}>
          <div>
            <button className="AcctModal__CloseButton" onClick={this.closeModal}>X</button>
            <Form
              apiPath="hey"
              fields={this.fields}
              render={() => (
                <React.Fragment>
                  <div className="AcctModal__Form" role="alert">
                    Please enter the account information.
                  </div>
                  <Field {...this.fields.name} />
                  <Field {...this.fields.accountNumber} />
                  <Field {...this.fields.accountNumber2} />
                  <Field {...this.fields.routingNumber} />
                </React.Fragment>
              )}
            />
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Profile;
