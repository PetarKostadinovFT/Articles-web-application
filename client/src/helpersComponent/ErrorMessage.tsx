import React from "react";
import { Link } from "react-router-dom";

function ErrorMessage() {
  return (
    <div className="demo-inner-message">
      <div
        className="o-message o-message--alert o-message--error o-message--inner"
        data-o-message-close="true"
        data-o-component="o-message"
      >
        <div className="o-message__container">
          <div className="o-message__content">
            <p className="o-message__content-main">
              <span className="o-message__content-highlight">Oops.</span>
            </p>
            <h1 className="o-typography-heading-level-1">
              There are no articles at this time
            </h1>
            <p className="o-message__content-additional"></p>
            <div className="o-message__actions">
              <Link
                to="/articles/page/1"
                className="o-message__actions__secondary"
                target="_self"
              >
                Try again
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
