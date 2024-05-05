import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__tag">Our portfolio</div>
      <h3 className="portfolio__heading">Our Professional Project</h3>
      <div className="porfolio__card-container">
        <div className="portfolio__card-photo">
          <img src="asset/project-edge.png" alt="" />
        </div>
        <h3 className="portfolio__card--title">Wappin</h3>
        <p className="portfolio__card--desc">
          Wappin, by Mariworks Solution, offers digital communication solutions
          via the WhatsApp Business Platform for marketing, sales, automation,
          and customer service.
        </p>
        <div className="portfolio__card--tag">
          <span className="portfolio__card--tagline">UI/UX Design</span>
          <span className="portfolio__card--tagline">Web Development</span>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
