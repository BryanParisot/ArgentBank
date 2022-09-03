import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Footer from "../components/Footer/Footer";
import NavigationNotConnect from "../components/Navigations/NavigationNotConnect";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <NavigationNotConnect img="../pictures/argentBankLogo.png" />
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <FontAwesomeIcon icon={faUserCircle} />
          <h1>Sign In</h1>
          <form>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            {/* PLACEHOLDER DUE TO STATIC SITE  */}
            <Link to="./user" class="sign-in-button">
              Sign In
            </Link>
            {/* SHOULD BE THE BUTTON BELOW  */}
            {/* <button class="sign-in-button">Sign In</button>  */}
            {/*  */}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
