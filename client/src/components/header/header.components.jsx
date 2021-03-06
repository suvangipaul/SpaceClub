import React from "react";
import "./header.styles.css";
// import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
  return (
    <div className="navbar">
      {/* <div className="brand-logo">Space Club</div> */}
      <div className="nav_options">
        <ul>
          <li>
            <a href="/explore">Explore</a>
          </li>
          <li>
            <a href="/collectables">Collectables</a>
          </li>
          <li>
            <a href="/activities">Activities</a>
          </li>
          <li>
            <a href="/forum">Forum</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </div>
      <div className="signin_options">
        {!isAuthenticated && (
          <ul>
            <span className="gray">
              <li onClick={() => loginWithRedirect()}>
                <a className="gray" href="/">
                  Sign up
                </a>
              </li>
            </span>
            <li>
              <a onClick={() => loginWithRedirect()} href="/">Log in</a>
            </li>
          </ul>
        )}
        {isAuthenticated && (
          <ul>
            <span>
              <li onClick={() => logoutWithRedirect()}>
                Logout
              </li>
            </span>
            <li>
                <img className="user-image" src={user.picture} alt="" />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
