import { NavLink } from "react-router-dom";
import "./NavBtn.css";
const NavBtn = (props) => {
  return (
    <NavLink to="/blogs/welcome">
      <div onClick={props.click} className="box1">
        <div className="b1">{props.label}</div>
        <div className="b2">{props.label}</div>
      </div>
    </NavLink>
  );
};
export default NavBtn;
