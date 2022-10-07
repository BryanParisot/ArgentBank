import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/userAction";

const Login = () => {
  const { userInfo, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/user");
    }
  }, [navigate, userInfo]);
  return (
    <div className="login">
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
