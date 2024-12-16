import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Contact Section Heading*/}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        {/* Icon Divider*/}
        <div className="divider-custom">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line" />
        </div>
        {/* Contact Section Form*/}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                  data-sb-can-submit="no"
                />
                <label htmlFor="name">Full name</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  data-sb-validations="required,email"
                  data-sb-can-submit="no"
                />
                <label htmlFor="email">Email address</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  An email is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  Email is not valid.
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  data-sb-validations="required"
                  data-sb-can-submit="no"
                />
                <label htmlFor="phone">Phone number</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="phone:required"
                >
                  A phone number is required.
                </div>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  placeholder="Enter your message here..."
                  style={{ height: "10rem" }}
                  data-sb-validations="required"
                  data-sb-can-submit="no"
                  defaultValue={""}
                />
                <label htmlFor="message">Message</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>

              <button
                className="btn btn-xl text-white"
                id="submitButton"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
