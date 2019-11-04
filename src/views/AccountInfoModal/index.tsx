import React from "react";
import Modal from "../../components/Modal";
import { Form, IFields, required, isEmail, maxLength } from "../../components/Form";
import { Field } from "../../components/Field";

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
  isOpen: boolean;
  value: string | null;
};

export class Profile extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  readonly state: State = {
    isOpen: false,
    value: ""
  };

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  // handleChange(event: KeyboardEvent) {
  //   this.setState({value: event.target.value });
  // }

  // handleSubmit(event: MouseEvent | null) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    const fields: IFields = {
      name: {
        id: "name",
        label: "Name"
      },
      email: {
        id: "email",
        label: "Email"
      },
      reason: {
        id: "reason",
        label: "Reason",
        editor: "dropdown",
        options: ["", "Marketing", "Support", "Feedback", "Jobs"]
      },
      notes: {
        id: "notes",
        label: "Notes",
        editor: "multilinetextbox"
      }
    };

    return (
      <React.Fragment>
        <button onClick={this.openModal}>open</button>
        <Modal isOpen={this.state.isOpen}>
          <div>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
            <Form
              action="hey"
              fields={fields}
              render={() => (
                <React.Fragment>
                  <div className="alert alert-info" role="alert">
                    Enter the information below and we'll get back to you as
                    soon as we can.
                  </div>
                  <Field {...fields.name} />
                  <Field {...fields.email} />
                  <Field {...fields.reason} />
                  <Field {...fields.notes} />
                </React.Fragment>
              )}
            />
            {/* <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form> */}
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Profile;
