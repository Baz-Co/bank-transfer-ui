import * as React from "react";

import { Dropdown } from "../Dropdown";
import { Label } from "../Label";
import { Input } from "../Input";
import { IFormContext, FormContext } from "../Form";

import "./Field.css";

import { IFieldProps, IErrors } from "../../types";

export const Field: React.FC<IFieldProps> = ({
  id,
  label,
  editor,
  options,
  value
}) => {
  const getError = (errors: IErrors): string => (errors ? errors[id] : "");

  const getEditorStyle = (errors: IErrors): any =>
    getError(errors) ? { borderColor: "red" } : {};

  return (
    <FormContext.Consumer>
      {(context: IFormContext) => (
        <div className="form-group">
          {label && <Label htmlFor={id}>{label}</Label>}

          {editor!.toLowerCase() === "input" && (
            <Input
              id={id}
              type="text"
              value={value}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                context.setValues({ [id]: e.currentTarget.value })
              }
              // onBlur={() => console.log('blurred')}
              onBlur={() => context.validate(id)}
              className="form-control"
              style={getEditorStyle(context.errors)}
            />
          )}

          {editor!.toLowerCase() === "textarea" && (
            <textarea
              id={id}
              value={value}
              onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                context.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => context.validate(id)}
              className="form-control"
              style={getEditorStyle(context.errors)}
            />
          )}

          {editor!.toLowerCase() === "dropdown" && (
            <Dropdown
              onChange={item => context.setValues({ [id]: item })}
              items={options && options.filter(account => account.name)}
              onBlur={() => context.validate(id)}
            />
          )}

          {editor!.toLowerCase() === "number" && (
            <input
              title="Enter a financial value (ex: 200, 123.45)"
              type="number"
              step=".01"
              pattern="/\D[^\.]/g"
              id="transfer-amount"
              placeholder="Enter Transfer Amount"
              autoComplete="off"
              className={`width100pct`}
              style={{ marginBottom: '2px'}}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                context.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => context.validate(id)}
            />
          )}

          {getError(context.errors) && (
            <div style={{ color: "red", fontSize: "80%" }}>
              {getError(context.errors)}
            </div>
          )}
        </div>
      )}
    </FormContext.Consumer>
  );
};
Field.defaultProps = {
  editor: "input"
};
