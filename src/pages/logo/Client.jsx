import React from "react";
import Marquee from "react-fast-marquee";

function Client() {
  return (
    <div className="client">
      <div className="Client_content">
        <Marquee speed={70}>
          <img src="/asset/86-university.png" alt="logo-1" />
          <img src="/asset/cmg.png" alt="logo-2" />
          <img src="/asset/curana.png" alt="logo-3" />
          <img src="/asset/edge.png" alt="logo-4" />
          <img src="/asset/friendchised.png" alt="logo-5" />
          <img src="/asset/mari-works.png" alt="logo-6" />
          <img src="/asset/multidaya.png" alt="logo-7" />
          <img src="/asset/venteny.png" alt="logo-8" />
          <img src="/asset/vidico.png" alt="logo-9" />
          <img src="/asset/wappin.png" alt="logo-10" />
          <img src="/asset/webdrive.png" alt="logo-11" />
          <img src="/asset/provem.png" alt="logo-11" />
        </Marquee>
      </div>
    </div>
  );
}

export default Client;
