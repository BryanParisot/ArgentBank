import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/userAction";
import Error from "../Error/Error";

const Login = () => {
  const { loading, error, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  useEffect(() => {
    if (userInfo.status === 200) {
      return window.location.assign("/user");
    }
  }, [userInfo]);

  return (
    <div className="login">
      <Error>{error}</Error>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email-id"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password-id"
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* <p className={connect === false ? "show-error" : ""}>
          {connect === false ? "Incorrect email or password" : ""}
        </p> */}

        <button type="submit" className="sign-in-button" disabled={loading}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
