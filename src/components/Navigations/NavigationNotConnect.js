import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavigationNotConnect = (props) => {
  return (
    <nav class="main-nav">
      <Link class="main-nav-logo" to="./">
        <img
          class="main-nav-logo-image"
          src={props.img}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" to="./sign-in">
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default NavigationNotConnect;
