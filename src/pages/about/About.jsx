import React from "react";
import Client from "../logo/Client";
function About() {
  return (
    <section name="about" className="about_container">
      <Client />
      <di v className="about-content">
        <div className="about-title">
          <h3>About Us</h3>
        </div>
        <div className="about-description">
          <p>
            <span className="About_descripton-brand">Nija Works </span>is a
            creative design and development studio based in Yogyakarta,
            Indonesia. Throughout the year we have collaborated with local and
            international clients. We help them actualize their idea with
            outstanding design solutions and implement it into digital products
            such as web or apps.
          </p>
        </div>
      </di>
    </section>
  );
}

export default About;
