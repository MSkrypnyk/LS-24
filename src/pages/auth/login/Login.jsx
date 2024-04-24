import { Link } from "react-router-dom";
import { LogoIcon } from "../../../shared/icons/Logo/LogoIcon";
import { Button } from "../../../shared/ui/Button/Button";
import "./Login.scss";
export const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <Link to="/">
          <LogoIcon />
        </Link>
        <p className="enjoy">Enjoy the newest movies</p>
        <Link className="login-btn" to="/">
          Log in
        </Link>
        <div className="sign">
          No account?{" "}
          <span>
            <Link to="/">Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
