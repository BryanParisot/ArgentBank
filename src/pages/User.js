import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import NavigationNotConnect from "../components/Navigations/NavigationNotConnect";
import Profil from "../components/Forms/Profil";
import { useSelector } from "react-redux";
import Transaction from "../components/Transactions/Transaction";

const User = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const { userToken, userInfo } = useSelector((state) => state.user);

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

        {transaction.map((i) => (
          <Transaction
            key={i.id}
            checking={i.checking}
            prizeAvaible={i.prize}
            available={i.avaible}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default User;

const transaction = [
  {
    id: 1,
    checking: "Argent Bank Checking (x8349)",
    prize: "2,082.79",
    avaible: "Available Balance",
  },
  {
    id: 2,
    checking: "Argent Bank Savings (x6712)",
    prize: "$10,928.42",
    avaible: "Available Balance",
  },
  {
    id: 3,
    checking: "Argent Bank Credit Card (x8349)",
    prize: "$184.30",
    avaible: "Current Balance",
  },
];
