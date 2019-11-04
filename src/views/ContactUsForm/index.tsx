import * as React from "react";
import { Form, required, maxLength } from "../../components/Form";
import { Field } from "../../components/Field";
import { IFields } from "../../types";


export const ContactUsForm: React.SFC = () => {
  const fields: IFields = {
    name: {
      id: "name",
      label: "Name",
      validation: { rule: required }
    },
    email: {
      id: "email",
      label: "Email"
    },
    // reason: {
    //   id: "reason",
    //   label: "Reason",
    //   editor: "dropdown",
    //   options: ["", "Marketing", "Support", "Feedback", "Jobs"],
    //   validation: { rule: required }
    // },
    // notes: {
    //   id: "notes",
    //   label: "Notes",
    //   editor: "textarea",
    //   validation: { rule: maxLength, args: 1000 }
    // }
  };
  return (
    <Form
      apiPath="http://localhost:4351/api/contactus"
      fields={fields}
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Enter the information below and we'll get back to you as soon as we
            can.
          </div>
          <Field {...fields.name} />
          <Field {...fields.email} />
          <Field {...fields.reason} />
          <Field {...fields.notes} />
        </React.Fragment>
      )}
    />
  );
};

export default ContactUsForm