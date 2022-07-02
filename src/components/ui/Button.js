import "./Button.css";

const Button = (props) => {
  return (
    <button
      disabled={props.isdisabled}
      onClick={props.click}
      className={props.className}
    >
      {props.isdisabled ? "login/signup to comment" : props.label}
    </button>
  );
};

export default Button;
