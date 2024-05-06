import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="porfolio__container">
        <div className="portfolio__tag">Our portfolio</div>
        <h3 className="portfolio__heading">Our Professional Project</h3>
        <div className="containers">
          <div className="porfolio__card-container">
            <div className="portfolio__card-photo">
              <img src="asset/project-edge.png" alt="" />
            </div>
            <h3 className="portfolio__card--title">Wappin</h3>
            <p className="portfolio__card--desc">
              Wappin, by Mariworks Solution, offers digital communication
              solutions via the WhatsApp Business Platform for marketing, sales,
              automation, and customer service.
            </p>
            <div className="portfolio__card--tag">
              <span className="portfolio__card--tagline">UI/UX Design</span>
              <span className="portfolio__card--tagline">Web Development</span>
            </div>
          </div>
          {/* container 2 */}

          <div className="porfolio__card-container">
            <div className="portfolio__card-photo">
              <img src="asset/project-friendchised.png" alt="" />
            </div>
            <h3 className="portfolio__card--title">Edge Landing Page</h3>
            <p className="portfolio__card--desc">
              Edge streamlines banking, accounting, and inventory management for
              businesses, with a special focus on catering to sellers' needs.
            </p>
            <div className="portfolio__card--tag">
              <span className="portfolio__card--tagline">UI/UX Design</span>
            </div>
          </div>

          {/* container 3 */}
          <div className="porfolio__card-container">
            <div className="portfolio__card-photo">
              <img src="asset/project-nija-branding.png" alt="" />
            </div>
            <h3 className="portfolio__card--title">POS UI KIT Dashboard</h3>
            <p className="portfolio__card--desc">
              One of the UI kits from Nija Works. It's an ideal solution for
              your POS app needs, with a clean and efficient design that
              expedites the development of your POS software.
            </p>
            <div className="portfolio__card--tag">
              <span className="portfolio__card--tagline">UI/UX Design</span>
              <span className="portfolio__card--tagline">Web Development</span>
            </div>
          </div>

          {/* container 4 */}
          <div className="porfolio__card-container">
            <div className="portfolio__card-photo">
              <img src="asset/project-pocket-pal.png" alt="" />
            </div>
            <h3 className="portfolio__card--title">Friendchised</h3>
            <p className="portfolio__card--desc">
              A web-based franchise marketplace for franchise business owners
              and seekers. This website streamlines business searches and
              enables direct transactions on the platform.
            </p>
            <div className="portfolio__card--tag">
              <span className="portfolio__card--tagline">UI/UX Design</span>
              <span className="portfolio__card--tagline">Web Development</span>
            </div>
          </div>

          {/* container 5 */}
          <div className="porfolio__card-container">
            <div className="portfolio__card-photo">
              <img src="asset/project-pos-uikit.png" alt="" />
            </div>
            <h3 className="portfolio__card--title">Pocket Pal Illustration</h3>
            <p className="portfolio__card--desc">
              In PocketPal, Nija Works' UI Kit, custom illustrations enhance
              user experience, simplifying onboarding, success, and empty states
              in the e-wallet app.
            </p>
            <div className="portfolio__card--tag">
              <span className="portfolio__card--tagline">Illustration</span>
            </div>
          </div>

          {/* container 6 */}
          <div className="porfolio__card-container">
            <div className="portfolio__card-photo">
              <img src="asset/project-wappin.png" alt="" />
            </div>
            <h3 className="portfolio__card--title">Nija Branding</h3>
            <p className="portfolio__card--desc">
              Nija Works, a Yogyakarta design studio, presents our website
              showcasing services and portfolio, crafted with logo design,
              information architecture, and web development.
            </p>
            <div className="portfolio__card--tag">
              <span className="portfolio__card--tagline">Logo Design</span>
              <span className="portfolio__card--tagline">UI/UX Design</span>
              <span className="portfolio__card--tagline">
                Brading Guideline
              </span>
              <span className="portfolio__card--tagline">Web Development</span>
            </div>
          </div>

          <div className="portfolio__cta">
            <a href="/porfolio" className="portfolio__cta--button">
              <span className="porfolio_tex">More Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
