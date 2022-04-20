import React from "react";
import { auth, provider} from '../fireconfige';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const Googlesignin = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };


  return (
    <div className="google-text">
      <p>Google login/Signup </p>
      <button className="google-btn" onClick={Googlesignin}>
        Sign in
      </button>
    </div>
  );
}

export default Login;