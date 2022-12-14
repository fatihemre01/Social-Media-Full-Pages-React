import Topbar from "../../components/topbar/Topbar";
import "./login.css";

export default function Login() {
  return (
    <>
      <Topbar />
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h4 className="loginLogo">FatihSocial</h4>
            <span className="loginDesc">
              Connect with your friends around the world
            </span>
          </div>

          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>

              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
