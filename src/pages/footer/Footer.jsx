import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer__large">
        <div className="footer__brand">
          <div className="footer__brand--logo">
            <img src="/asset/nav_logo.png" alt="" />
          </div>
          <div className="footer__brand--maps">
            <a href="/" className="footer__brand--maps--link">
              Jl. Sorogenen No.35, Umbulharjo, Yogyakarta, 55162, Indonesia
            </a>
          </div>
        </div>
        <div className="footer__navigation">
          <div className="footer__menu">
            <h5 className="footer__menu--heading">Say Hello</h5>
            <nav className="footer__menu--wrapper">
              <a href="/" className="footer__menu--link">
                hello@nijaworks.com
              </a>
              <a href="/" className="footer__menu--link footer__menu--phone">
                +62 8122-7182-500
              </a>
            </nav>
          </div>

          <div className="footer__social">
            <h5 className="footer__social--heading">Social Links</h5>
            <div className="footer_social_group">
              <a href="/" className="footer__social--link">
                Instragram
              </a>
              <a href="/" className="footer__social--link">
                Dribble
              </a>

              <a href="/" className="footer__social--link">
                Behance
              </a>
              <a href="/" className="footer__social--link">
                Linkedinn
              </a>
            </div>
          </div>
        </div>
      </div>

      <button className="footer__cta group">
        <div className="cta__container">
          <h3 className="footer__cta--heading">
            Interested In Realizing Your Idea?
          </h3>
          <div className="footer__cta--grid">
            <div className="footer__cta--button">Collaborate With Us</div>
            <div className="footer__cta--arrow">&rarr;</div>
          </div>
        </div>
      </button>

      <div className="footer__copyright">
        <span className="footer__copyright--text">
          © Nija Works Studio 2022 All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
