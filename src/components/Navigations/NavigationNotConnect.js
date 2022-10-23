import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getUserDetails } from "../../redux/userAction";
import { useEffect } from "react";
import { logout } from "../../redux/features/user";

const NavigationNotConnect = (props) => {
  const { userToken, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

   useEffect(() => {
     if (userToken) {
      dispatch(getUserDetails());
     }
   }, [userToken, dispatch]);

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="./">
        <img
          className="main-nav-logo-image"
          src={props.img}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {userToken ? (
          <div className="all-info">
            <div className="user-info">
              <div className="user">
                <FontAwesomeIcon className="userLogo" icon={faUser} />
              </div>
              <span>{userInfo?.body?.firstName}</span>
            </div>
            <span
              onClick={() => dispatch(logout())}
              className="button-sign-out"
            >
              {" "}
              Sign out
              <FontAwesomeIcon className="sign-out" icon={faSignOut} />
            </span>
          </div>
        ) : (
          <Link className="main-nav-item" to="./sign-in">
            <FontAwesomeIcon className="connect-user" icon={faCircleUser} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavigationNotConnect;
