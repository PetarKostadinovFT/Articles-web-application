function Footer(): JSX.Element {
  return (
    <div className="o-top-banner o-top-banner--professional-inverse">
      <div className="o-top-banner__container">
        <div className="o-top-banner__content">
          <h2 className="o-top-banner__heading">
            You can now access All news for FREE
          </h2>
          <p className="o-top-banner__copy">
            Only available with your FT Registration
          </p>
        </div>
        <div className="o-top-banner__actions">
          <a href="/register" className="o-top-banner__button">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
