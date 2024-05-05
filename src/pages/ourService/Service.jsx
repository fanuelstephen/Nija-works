import React from "react";
import serviceData from "../../components/data";
import Card from "../Card";

function Service() {
  return (
    <section className="service">
      <div className="service-content">
        <div className="service-heading">
          <span>Our serive</span>
          <h3>See What We Can Do For You</h3>
        </div>
        <div className="service-cards">
          {serviceData.map((data, i) => (
            <Card dataServive={data} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
