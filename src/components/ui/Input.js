import React, { forwardRef } from "react";
import "./Input.css";
const Input = React.forwardRef((props, ref) => {
  const inputEl =
    props.element === "signup" ? (
      <>
        <input
          className="form__input__user"
          {...props.input}
          required=""
          ref={ref}
        />
        <label className="form__label__user">{props.label}</label>
      </>
    ) : (
      <>
        <input className="form__input" {...props.input} required="" ref={ref} />
        <label className="form__label">{props.label}</label>
      </>
    );
  return <>{inputEl}</>;
});

export default Input;
