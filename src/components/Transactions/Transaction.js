import React from "react";
import PropTypes from "prop-types";

const Transaction = (props) => {
  return (
    <div>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{props.checking}</h3>
          <p className="account-amount">{props.prizeAvaible}</p>
          <p className="account-amount-description">{props.available}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>
  );
};

Transaction.propTypes = {
  checking: PropTypes.string,
  prizeAvaible: PropTypes.string,
  available: PropTypes.string,
};

export default Transaction;
