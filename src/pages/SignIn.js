import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer/Footer";
import NavigationNotConnect from "../components/Navigations/NavigationNotConnect";
import Login from "../components/Forms/Login";

const SignIn = () => {
  return (
    <div>
      <NavigationNotConnect img="../pictures/argentBankLogo.png" />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <FontAwesomeIcon icon={faUserCircle} />
          <Login />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
