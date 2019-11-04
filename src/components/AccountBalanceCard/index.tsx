import React from "react";
import "./Card.css";
interface IProps {
  title?: string;
  balance?: number | null;
}

export const AccountBalanceCard: React.FC<IProps> = ({ title, balance }) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{balance || "--"}</p>
    </div>
  );
};

export default AccountBalanceCard;
