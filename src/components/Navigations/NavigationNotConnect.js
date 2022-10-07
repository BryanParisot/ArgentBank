import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectConnect, selectEmail, selectToken } from "../../redux/selector";
import { setConnect, setEmail, setToken } from "../../redux/features/user";

const NavigationNotConnect = (props) => {

  //REDUX
  const status = useSelector(selectConnect);
  const token = useSelector(selectToken);
  const connect = useSelector(selectConnect);
  const email = useSelector(selectEmail)
  const dispatch = useDispatch()



  const signOut = () => {
    localStorage.clear();
    dispatch(setConnect(false))
    dispatch(setToken(null))
    dispatch(setEmail(null))
  }


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
        {status ? (
          <div className="all-info">
            <div className="user-info">
              <div className="user">
                <FontAwesomeIcon className="userLogo" icon={faUser} />
              </div>
              <span>Loic</span>
            </div>
            <span onClick={signOut} className="button-sign-out">
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
