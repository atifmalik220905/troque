import React from "react";

export default function NeedContact() {
  return (
    <section className="need-contact">
      <div
        className="need-contact__bg"
        style={{ backgroundImage: "url(/assets/images/backgrounds/need-contact-bg.jpg)" }}
      ></div>
      <div className="container">
        <div className="row gutter-y-30 align-items-center">
          <div className="col-lg-6">
            <div className="need-contact__left">
              <h3 className="need-contact__title">
                If You Need To Contact Your <br />
                Advisor Company
              </h3>
              <ul className="need-contact__list list-unstyled">
                <li>
                  <span className="need-contact__list__icon">
                    <i className="icon-tick"></i>
                  </span>{" "}
                  Insurance team has deep expertise areas of digital.
                </li>
                <li>
                  <span className="need-contact__list__icon">
                    <i className="icon-tick"></i>
                  </span>{" "}
                  Safe your money dolore eu fugiat nulla occaecat.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="need-contact__right">
              <div className="need-contact__call">
                <div className="need-contact__call__inner">
                  <span className="need-contact__call__icon">
                    <i className="icon-phone-ringing"></i>
                  </span>
                  <div className="need-contact__call__content">
                    <h4 className="need-contact__call__title">Call if Any Requirement!</h4>
                    <a href="tel:+918000811331" className="need-contact__call__number">
                      +91 8000 811 331
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

