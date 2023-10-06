import React from "react";
import { Link } from "react-router-dom";

function Loading() {
  return (
    <>
      <div className="o-loading o-loading--dark o-loading--large"></div>
      <br className="demo-break" />
      <br className="demo-break" />
      <br className="demo-break" />
      <br className="demo-break" />
      <div className="o-message__actions">
        <Link
          to="/articles/page/1"
          className="o-message__actions__secondary"
          target="_self"
        >
          Try again
        </Link>
      </div>
    </>
  );
}

export default Loading;
