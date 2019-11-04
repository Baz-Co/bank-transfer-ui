import React from "react";
import AccountInfoModal from "../../views/AccountInfoModal";
import ContactUsForm from "../../views/ContactUsForm";

// export default function Profile() {
//   return (
//     <React.Fragment>
//       <h2>Profile</h2>

//     </React.Fragment>
//   )
// }

type Props = {};

// export const Profile: React.FC<Props> = () => {
//   return (
//     <React.Fragment>
//       <h2>Profile</h2>
//       <Modal isOpen={false}>
//         <div>
//           <div>I am a modal</div>
//           <form>
//             <input />
//             <button>tab navigation</button>
//             <button>stays</button>
//             <button>inside</button>
//             <button>the modal</button>
//           </form>
//         </div>
//       </Modal>
//     </React.Fragment>
//   );
// };

type State = {
  isOpen: boolean
  value: string | null
};
interface IAccountDetails {
  name: string
  accountNumber: number
  routingNumber: number
  balance: number
  description?: string
}

export class Profile extends React.Component<Props, State> {
  getAccounts = (): void => {
    fetch("https://fathomless-tundra-18251.herokuapp.com/accounts")
    .then(function(res){ return res.json(); })
    .then(function(data){ alert( JSON.stringify( data ) ) })
  }
  addAccount = (): void => {
    const data:IAccountDetails = 
    {name: "Test Account2", accountNumber: 12345, routingNumber: 67890, balance: 200};
    // const data2 = {"accountNumber": 12345, "routingNumber": 67890, "balance": 200}
    console.log('addAccount - data:', JSON.stringify(data))
    fetch("https://fathomless-tundra-18251.herokuapp.com/accounts",
    {
        method: "POST",
        mode: "cors",
        cache: 'no-cache',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data)
    })
    .then(function(res: any){ return res.json(); }) // TODO: no any type
    .then(function(data: object) { alert( JSON.stringify( data ) ) })
  }
  render() {
    return (
      <React.Fragment>
        <h2>Profile</h2>
        <AccountInfoModal />
        <ContactUsForm />
        <button onClick={this.getAccounts}>Get Accounts</button>
        <button onClick={this.addAccount}>Add Account</button>
      </React.Fragment>
    );
  }
}

export default Profile;
