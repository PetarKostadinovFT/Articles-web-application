import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="o-layout" data-o-component="o-layout">
      <div className="o-layout__header"></div>
      <div className="o-layout__main ">
        <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
            <h1 className="display-1">404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for doesn't exist.</p>

            <span className="o-forms-title__prompt">
              <Link to="/articles/page/1" className="o-typography-link">
                Go Back to Home
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
