import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import "./Navbar.css";
import NavBtn from "./NavBtn";
import SideDrawer from "../sideDrawer/sideDrawer";
import BackDrop from "../sideDrawer/BackDrop";
import { AuthCtx } from "../../context/AuthContext";
import MenuButton from "./MenuButton";
const NavBar = (props) => {
  const ctx = useContext(AuthCtx);
  const [showSideDrawer, setShowsideDrawer] = useState(false);
  const openSideDrawer = () => {
    setShowsideDrawer((prev) => !prev);
  };
  const closeSideDrawer = () => {
    setShowsideDrawer(false);
  };
  return (
    <Fragment>
      <nav className="nav__bar">
        <div>
          <NavLink to="/blogs">
            <img id="logo" />
          </NavLink>
        </div>
        <div className="navlinks__button">
          <div className="nav__links__section mobile__view">
            <NavLink className="navbar__links" to="/blogs">
              <div className="link__box">
                Blogs
                <div className="move__hover"></div>
              </div>
            </NavLink>
            {ctx.isLoggedIn && (
              <NavLink className="navbar__links" to="/blogs/nblog">
                <div className="link__box">
                  New Blog
                  <div className="move__hover"></div>
                </div>
              </NavLink>
            )}
          </div>
        </div>
        {showSideDrawer && <BackDrop onClose={closeSideDrawer} />}

        <SideDrawer show={showSideDrawer}>
          <div className="link__mobile">
            <NavLink
              onClick={closeSideDrawer}
              className="navbar__links"
              to="/blogs"
            >
              Blogs
            </NavLink>
          </div>
          {ctx.isLoggedIn && (
            <div className="link__mobile">
              <NavLink
                onClick={closeSideDrawer}
                className="navbar__links"
                to="/blogs/nblog"
              >
                New Blog
              </NavLink>
            </div>
          )}
        </SideDrawer>

        <div className="button__section">
          {!ctx.isLoggedIn && <NavBtn label="Sign Up" />}
          {ctx.isLoggedIn && <NavBtn click={ctx.logout} label="Log out" />}
        </div>
        <MenuButton click={openSideDrawer} />
      </nav>
      <section>{props.children}</section>
    </Fragment>
  );
};

export default NavBar;
