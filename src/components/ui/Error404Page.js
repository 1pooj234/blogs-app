import { NavLink } from "react-router-dom";
import "./Error404Page.css";
const Error404Page = () => {
  return (
    <div className="centered">
      <b className="text404">Page Not Found</b>

      <NavLink className="nav__link" to="/blogs">
        Back
      </NavLink>
    </div>
  );
};

export default Error404Page;
