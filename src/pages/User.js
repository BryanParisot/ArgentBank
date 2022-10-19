import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import NavigationNotConnect from "../components/Navigations/NavigationNotConnect";
import Profil from "../components/Forms/Profil";
import { useSelector } from "react-redux";

const User = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const { userToken, userInfo } = useSelector(
    (state) => state.user
  );

  if (!userToken) {
    window.location.href = "/sign-in";
  }

  // if (suceesModified) {
  //   setDisplayForm(true);
  // }

  return (
    <div>
      <NavigationNotConnect img="../pictures/argentBankLogo.png" />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            <span>{userInfo?.body?.firstName}</span>{" "}
            <span>{userInfo?.body?.lastName}</span>
          </h1>
          {displayForm ? (
            <Profil
              result={setDisplayForm}
              firstname={userInfo?.body?.firstName}
              lastName={userInfo?.body?.lastName}
            />
          ) : (
            <button
              onClick={() => setDisplayForm(true)}
              className="edit-button"
            >
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default User;
