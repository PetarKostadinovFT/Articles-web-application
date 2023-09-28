function Footer(): JSX.Element {
 

  return (
<footer
  className="o-footer o-footer--theme-light"
  data-o-component="o-footer"
  data-o-footer--no-js=""
>
  <div className="o-footer__container">
    <h2 className="o-footer-visually-hidden">Useful links</h2>
    <div>
      <ul className="o-footer__legal-links">
        <li>
          <a href="https://help.ft.com/help/legal-privacy/terms-conditions/">
            Terms &amp; Conditions
          </a>
        </li>
        <li>
          <a href="https://help.ft.com/help/legal-privacy/privacy/">Privacy</a>
        </li>
        <li>
          <a href="https://help.ft.com/help/legal-privacy/cookies/">Cookies</a>
        </li>
        <li>
          <a href="https://help.ft.com/help/legal-privacy/copyright/copyright-policy/">
            Copyright
          </a>
        </li>
        <li>
          <a href="https://help.ft.com/legal-privacy/copyright-policy/">
            Slavery Statement &amp; Policies
          </a>
        </li>
      </ul>
    </div>
    <div className="o-footer__copyright">
      <small>
        Markets data delayed by at least 15 minutes. © THE FINANCIAL TIMES LTD
        2021.
        <abbr title="Financial Times" aria-label="F T">
          FT
        </abbr>{" "}
        and ‘Financial Times’ are trademarks of The Financial Times Ltd.
        <br />
        The Financial Times and its journalism are subject to a self-regulation
        regime under the
        <a
          href="http://aboutus.ft.com/en-gb/ft-editorial-code/"
          aria-label="F T Editorial Code of Practice"
        >
          FT Editorial Code of Practice
        </a>
        .
      </small>
    </div>
  </div>
  <div className="o-footer__brand">
    <div className="o-footer__container">
      <div className="o-footer__brand-logo" />
    </div>
  </div>
</footer>



  );
}

export default Footer;
