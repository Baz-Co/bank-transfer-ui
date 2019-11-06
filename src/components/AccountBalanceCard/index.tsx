import React from "react";
import "./Card.css";
interface IProps {
  title?: string;
  balance?: number | null;
}

export const AccountBalanceCard: React.FC<IProps> = ({ title, balance }) => {
  let cardBalance = null;
  if(balance || balance === 0) {
    cardBalance = balance
  } else {
    cardBalance = "--"
  }
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{cardBalance}</p>
    </div>
  );
};

export default AccountBalanceCard;
