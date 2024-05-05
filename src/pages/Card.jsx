import React from "react";

function Card({ dataServive }) {
  return (
    <div>
      <div className="card">
        <img src={dataServive.img} alt="" />
        <h5>{dataServive.title}</h5>
        <p>{dataServive.desc}</p>
      </div>
    </div>
  );
}

export default Card;
