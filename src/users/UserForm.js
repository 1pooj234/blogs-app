import { useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthCtx } from "../context/AuthContext";
import "./UserForm.css";
import Button from "../components/ui/Button";
import Loading from "../components/ui/Loading";
import Input from "../components/ui/Input";
import {
  passwordInputValidity,
  emailInputValidity,
} from "../validatorFuncs/validators";

const UserForm = () => {
  const [loading, setLoading] = useState(null);
  const [loginMode, setLoginMode] = useState(true);
  const [formIsValid, setFormIsValid] = useState({
    email: true,
    password: true,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const ctx = useContext(AuthCtx);
  const emailRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const sendRequest = async (email, password) => {
    let url = loginMode
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA33bNdjN0W5qTsGojnXpgV7q-0OopYPqc"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA33bNdjN0W5qTsGojnXpgV7q-0OopYPqc";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, returnSecureToken: false }),
      });

      const data = await response.json();
      // console.log(data.error.message);
      ctx.login(data.idToken);
      if (!response.ok) {
        throw new Error(data.error.message.split("_").join(" ").toLowerCase());
      }
      navigate("/blogs");
    } catch (error) {
      setError(error + "");
    }
  };
  let errText;
  if (error) {
    errText = error.slice(6);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const emailIsValid = emailInputValidity(email);
    const passwordIsValid = passwordInputValidity(password);
    const userName = email.trim().slice(0, 2);
    const isValid = emailIsValid && passwordIsValid;
    setFormIsValid({
      email: emailIsValid,
      password: passwordIsValid,
    });
    if (isValid) {
      localStorage.setItem("user", userName);
      sendRequest(email, password);
    }
  };
  const switchToSignup = () => {
    setLoginMode((prev) => !prev);
  };
  if (loading) {
    return (
      <div className="centered">
        <Loading />
      </div>
    );
  }
  return (
    <section className="form__section">
      <>{error && <p className="invalid__error">{errText}</p>}</>
      <div className="form__box">
        <form onSubmit={submitHandler}>
          <h3 className="heading">{loginMode ? "Sign in" : "Sign up"}</h3>
          <div className="input__holder__email">
            <Input
              element="signup"
              ref={emailRef}
              input={{ placeholder: "Email", id: "email", type: "text" }}
              label="Email"
            />
            {!formIsValid.email && (
              <p className="error__text">enter a valid email</p>
            )}
          </div>
          <div>
            <Input
              element="signup"
              ref={passwordRef}
              input={{
                placeholder: "password",
                id: "password",
                type: "password",
              }}
              label="Password"
            />
            {!formIsValid.password && (
              <p className="error__text">enter a password of length 7</p>
            )}
          </div>
          <Button className="submit_btn" label="Send" />
        </form>
        <Button
          className="switch_btn"
          label={`${loginMode ? "Switch to Sign up" : "Switch to Sign in"}`}
          click={switchToSignup}
        />
      </div>
    </section>
  );
};
export default UserForm;
