import React from "react";

export default function FunfactSection() {
  const stats = [
    { icon: "icon-life-insurance", count: "15", suffix: "+", label: "Our Services", itemClass: "funfact__item--1", hasShape: true },
    { icon: "icon-family", count: "7000", suffix: "+", label: "Satisfied Customers", itemClass: "funfact__item--2", hasShape: true },
    { icon: "icon-protection", count: "5", suffix: "+", label: "Years Experience", itemClass: "funfact__item--3", hasShape: true },
    { icon: "icon-trophy1", count: "30", suffix: "+", label: "Team Members", itemClass: "funfact__item--4", hasShape: false },
  ];

  return (
    <section className="funfact funfact--home-4">
      <div className="container">
        <div className="funfact__inner">
          <div className="funfact__row row gutter-y-40">
            {stats.map((s, idx) => (
              <div key={idx} className="col-lg-3 col-sm-6">
                <div className={`funfact__item ${s.itemClass}`}>
                  <div className="funfact__icon-box">
                    <span className="funfact__icon">
                      <i className={s.icon}></i>
                    </span>
                  </div>
                  <div className="funfact__content">
                    <h3 className="funfact__count count-box">
                      <span className="count-text">{s.count}</span>
                      <span> {s.suffix}</span>
                    </h3>
                    <p className="funfact__text">{s.label}</p>
                  </div>
                  {s.hasShape && (
                    <img
                      src="/assets/images/shapes/funfact-shape-1.png"
                      alt="shape"
                      className="funfact__item__shape"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

