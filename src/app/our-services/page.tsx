import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/replica/PageHeader";
import { ORIGINAL_SERVICES } from "@/data/originalData";

export const metadata: Metadata = {
  title: "Our Services || Torque Auto Advisor",
  description:
    "Comprehensive vehicle and RTO services in Morbi, Gujarat: Vehicle Insurance, Passing, Fitness Certificate, Permit, P.U.C., Vehicle Name Transfer, HSRP RTO Number Plate, CNG Cylinder Re-Testing, Driving License."
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Services" />

      <section className="services-page services-page--four section-space-top section-space-bottom2">
        <div className="container">
          <div className="row gutter-y-30">
            {ORIGINAL_SERVICES.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="service-card-four">
                  <div
                    className="service-card-four__bg"
                    style={{ backgroundImage: "url(/assets/images/shapes/service-card-shape-1-1.png)" }}
                  ></div>
                  <div className="service-card-four__content">
                    <div className="service-card-four__top">
                      <div className="service-card-four__icon-box">
                        <span className="service-card-four__icon">
                          <i className="icon-car-insurance"></i>
                        </span>
                      </div>
                      <h3 className="service-card-four__title">
                        <Link href={`/service-detail/${service.slug}/${service.id}`}>
                          {service.title}
                        </Link>
                      </h3>
                    </div>
                    <p className="service-card-four__text">{service.shortDesc}</p>
                    <Link
                      href={`/service-detail/${service.slug}/${service.id}`}
                      className="service-card-four__link"
                    >
                      See More{" "}
                      <span className="work-planning-two__card__link__icon">
                        <i className="fas fa-plus"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="service-card-four__image">
                    <div
                      className="service-card-four__image__inner"
                      style={{
                        backgroundImage: `url(/img/service_image/750x750${service.image})`
                      }}
                    ></div>
                  </div>
                  <div className="service-card-four__shape service-card-four__shape--one"></div>
                  <div className="service-card-four__shape service-card-four__shape--two"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

