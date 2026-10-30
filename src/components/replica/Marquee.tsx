import React from "react";

export default function Marquee() {
  const items = [
    { text: "HSRP RTO Number Plate", stroke: false },
    { text: "Vehicle Name Transfer", stroke: true },
    { text: "Driving License", stroke: false },
    { text: "Parsing", stroke: true },
    { text: "Fitness", stroke: false },
    { text: "Permit", stroke: true },
    { text: "CNG Cylinder Re-Testing", stroke: false },
    { text: "HP Loan Cancel", stroke: true },
    { text: "Third Party Full Insurance", stroke: false },
    { text: "P.U.C.", stroke: true },
  ];

  return (
    <section className="slide-one slide-one--home-4" style={{ overflow: "hidden" }}>
      <div
        className="slide-one__slide"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {items.concat(items).map((item, idx) => (
          <React.Fragment key={idx}>
            <h3 className={`slide-one__text ${item.stroke ? "slide-one__text--stroke" : ""}`}>
              {item.text}
            </h3>
            <span className="slide-one__text">/</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

