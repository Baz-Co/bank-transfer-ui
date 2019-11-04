export interface IAccounts {
  _id?: string
  name: string
  accountNumber: number
  routingNumber: number
  balance: number
  createDate?: string
}

export interface ITransactions {
  _id?: string
  date: string
  description: string
  type: string
  amount: number
  balance: number
}

export interface IValues {
  /* Key value pairs for all the field values with key being the field name */
  [key: string]: any;
}
type Editor = "input" | "textarea" | "dropdown" | "number";
interface IValidation {
  rule: (values: IValues, fieldName: string, args: any) => string;
  args?: any;
}
export interface IFieldProps {
  id: string;
  label?: string;
  editor?: Editor;
  options?: IAccounts[];
  value?: any;
  validation?: IValidation;
}
export interface IFields {
  [key: string]: IFieldProps;
}
export interface IErrors {
  /* The validation error messages for each field (key is the field name */
  [key: string]: string;
}
