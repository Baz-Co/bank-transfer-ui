import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
// import BankLogo from "../../images/001-fintech.svg"; // TODO: Add back images
// import ProfileIcon from "../../images/003-user.svg";

export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <div className="Logo__Container">
            {/* <NavLink to="/">
              <img src={BankLogo} className="App-logo" alt="logo" />
            </NavLink> */}
            Bank Inc.
          </div>
          <NavLink to="/profile">
            {/* <img src={ProfileIcon} className="App-logo" alt="logo" /> */}
            Hi Warren
          </NavLink>
        </header>
        <div>
          <nav>
                <NavLink className="NavLink" activeClassName="NavLink--active" to="/accounts">Accounts</NavLink>
                <NavLink className="NavLink" activeClassName="NavLink--active" to="/transfers">Transfers</NavLink>
          </nav>
        </div>
      </React.Fragment>

    );
  }
}

export default Header;
