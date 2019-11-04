import React from "react";
import AccountInfoModal from "../../views/AccountInfoModal";

interface IProps {};

interface IState {
  isOpen: boolean
  value: string | null
};

export class Profile extends React.Component<IProps, IState> {
  // getAccounts = (): void => {
  //   fetch("https://fathomless-tundra-18251.herokuapp.com/accounts")
  //   .then(function(res){ return res.json(); })
  //   .then(function(data){ alert( JSON.stringify( data ) ) })
  // }
  // addAccount = (): void => {
  //   const data:IAccountDetails = 
  //   {name: "Test Account2", accountNumber: 12345, routingNumber: 67890, balance: 200};
  //   console.log('addAccount - data:', JSON.stringify(data))
  //   fetch("https://fathomless-tundra-18251.herokuapp.com/accounts",
  //   {
  //       method: "POST",
  //       mode: "cors",
  //       cache: 'no-cache',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       redirect: 'follow',
  //       referrer: 'no-referrer',
  //       body: JSON.stringify(data)
  //   })
  //   .then(function(res: any){ return res.json(); })
  //   .then(function(data: object) { alert( JSON.stringify( data ) ) })
  // }

  render() {
    return (
      <React.Fragment>
        <h2>Profile</h2>
        <AccountInfoModal />
      </React.Fragment>
    );
  }
}

export default Profile;
