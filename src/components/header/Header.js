import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);

  function handleAuthLogin() {}
  function handleAuthLogout() {
    dispatch(logout(false));
  }

  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <ul>
        <li>
          {isLoggedIn ? (
            <Link to={"/auth"} onClick={handleAuthLogout}>
              Logout
            </Link>
          ) : (
            <Link to={"/auth"} onClick={handleAuthLogin}>
              Login
            </Link>
          )}
        </li>

        <li>
          <Link to={"/"}>Build Burger</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
