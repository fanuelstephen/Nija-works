import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Navbar from "../home/Navbar";

function ContactPage({ toggleNav }) {
  return (
    <div className="contact">
      <div className="contact-page-heder">
        <div className="hero_header">
          <img src="/asset/hero_logo.png" alt="" />
          <HiMenuAlt3 className="icon" onClick={toggleNav} />
          <Navbar />
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-heading">
          <h5 className="contact-heading-tag">Let's connect</h5>
          <h5 className="contant-heading-main">
            we are read to hear your big idea
          </h5>
        </div>
        <form className="form-contact">
          <div className="form-contact-wrapper">
            <div className="contact-form-top">
              <ul className="contact-checkbox checkbox">
                <h5 className="contact-chekbox-heading">Choose Your need</h5>
                <div className="contact-checkbox-wrapper">
                  <h5 className="contact-heading-tag">UI/UX Design</h5>
                  <h5 className="contact-heading-tag">Illustration</h5>
                  <h5 className="contact-heading-tag">Web Development</h5>
                  <h5 className="contact-heading-tag">Apps Development</h5>
                </div>
              </ul>
              <div className="contact-radio">
                <h3 className="contact-radio-heading">Project Budget(USD)</h3>
                <ul className="contact-radio-wrapper">
                  <h5 className="contact-heading-tag">Under $1K</h5>
                  <h5 className="contact-heading-tag">$1K-$5K</h5>
                  <h5 className="contact-heading-tag">$5K-105K</h5>
                  <h5 className="contact-heading-tag">More than $10K</h5>
                </ul>
              </div>
              <div className="contat-upload">
                <div className="contact-upload-wrapper">
                  <p className="contact-upload-desc">Add Attachment</p>
                </div>
              </div>
            </div>
            <div className="contact-form-input">
              <label htmlFor="name">name</label>
              <input type="text" name="name" />

              <label htmlFor="name">Your Email</label>
              <input type="text" name="Email" />

              <label htmlFor="name">Tell Us About Your Project</label>
              <input type="text" name="Email" />
            </div>
          </div>
        </form>
      </div>
      <div className="contact-cta">
        <button className="contact-cta-submit">Submit</button>
      </div>
      <div className="copyright">
        ©Nija Works Studio 2022 All Rights Reserved
      </div>
    </div>
  );
}

export default ContactPage;
