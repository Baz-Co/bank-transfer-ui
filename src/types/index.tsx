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