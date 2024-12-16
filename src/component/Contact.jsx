import React from 'react'

export default function Contact() {
  return (
<section className="contact-section" id="contact">
  <div className="container">
    {/* Contact Section Heading*/}
    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
    {/* Icon Divider*/}
    <div className="divider-custom">
      <div className="divider-custom-line" />
      <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>{/* <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
      <div className="divider-custom-line" />
    </div>
    {/* Contact Section Form*/}
    <div className="row justify-content-center">
      <div className="col-lg-8 col-xl-7">
     
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="form-floating mb-3">
            <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" data-sb-can-submit="no" />
            <label htmlFor="name">Full name</label>
            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" data-sb-can-submit="no" />
            <label htmlFor="email">Email address</label>
            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" data-sb-can-submit="no" />
            <label htmlFor="phone">Phone number</label>
            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required" data-sb-can-submit="no" defaultValue={""} />
            <label htmlFor="message">Message</label>
            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
          </div>
        
          
          <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</section>

         )
}
