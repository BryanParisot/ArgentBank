import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { setConnect, setEmail, setToken } from "../../redux/features/user";
import { selectConnect, selectToken } from "../../redux/selector";

const Login = () => {
  const token = useSelector(selectToken);
  const connect = useSelector(selectConnect);
  const dispatch = useDispatch();

  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });

  const [formIsSubmited, setFormIsSubmited] = useState(false);

  const handleInputChange = (event) => {
    const inputName = event.target.name;

    setUserInputs({
      ...userInputs,
      [inputName]: event.target.value,
    });
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();

    setFormIsSubmited(true);
  };

  useEffect(() => {
    if (formIsSubmited) {
      const url = "http://localhost:3001/api/v1/user/login";

      const loginPayload = {
        email: userInputs.email,
        password: userInputs.password,
      };

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(loginPayload),
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send POST request:
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((json) => {
          dispatch(setEmail(userInputs.email));
          dispatch(setToken(json.body.token));
          dispatch(setConnect(true));

          console.log("/user/login response to POST:", json);
        })
        .catch((error) => {
          dispatch(setConnect(false));

          setUserInputs({
            ...userInputs,
          });

          console.error(
            `An error has occured while posting to /user/login: ${error}`
          );
        });

      setFormIsSubmited(false);
    }
  }, [dispatch, userInputs, formIsSubmited, token]);

  if (token) {
    return (localStorage.setItem("Token", token),  <Redirect to="/user" />)
  }
  return (
    <div className="login">
      <h1>Sign In</h1>
      <form onSubmit={handleLoginFormSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input
            type="email"
            name="email"
            id="email-id"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password-id"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <p className={connect === false ? "show-error" : ""}>
          {connect === false ? "Incorrect email or password" : ""}
        </p>

        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
