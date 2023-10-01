import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../utils/logoutUtils";
import { useAuth } from "../context/userContext";
import { toast } from "react-hot-toast";
import { useArticle } from "../context/ArticlesContext";

function Header(): JSX.Element {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const { currPage } = useArticle();

  const logoutHandler = async (): Promise<void> => {
    const success: boolean = await logout(setIsAuthenticated);
    if (success) {
      toast.success("Logout successfully");
      navigate("/home");
    } else {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <header
      id="site-navigation"
      className="o-header o-header--simple"
      data-o-component="o-header"
      data-o-header--no-js="true"
      tabIndex={-1}
    >
      <div className="o-header__row o-header__top">
        <div className="o-header__container">
          <div className="o-header__top-wrapper">
            <div className="o-header__top-column o-header__top-column--center">
              <Link
                className="o-header__top-logo"
                to="/"
                title="Go to Financial Times homepage"
              >
                <span className="o-header__visually-hidden">
                  Financial Times
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav
        id="o-header-nav-desktop"
        className="o-header__row o-header__nav o-header__nav--desktop"
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="o-header__container">
          <ul className="o-header__nav-list o-header__nav-list--right">
            <li className="o-header__nav-item">
              <Link
                className="o-header__nav-link"
                to={`/articles/page/${currPage}`}
              >
                Home
              </Link>
            </li>
            <li className="o-header__nav-item">
              <Link className="o-header__nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="o-header__nav-item">
              <Link className="o-header__nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
