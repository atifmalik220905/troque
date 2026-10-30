import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/replica/PageHeader";
import { ORIGINAL_SERVICES } from "@/data/originalData";

interface Props {
  params: Promise<{
    slug: string;
    id: string;
  }>;
}

export async function generateStaticParams() {
  return ORIGINAL_SERVICES.map((srv) => ({
    slug: srv.slug,
    id: srv.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = ORIGINAL_SERVICES.find((s) => s.id === parseInt(id, 10));
  if (!service) return { title: "Service Not Found || Torque Auto Advisor" };
  return {
    title: `${service.title} - Our Services || Torque Auto Advisor`,
    description: service.shortDesc
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = ORIGINAL_SERVICES.find((s) => s.id === parseInt(id, 10));

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={service.title}
        parent={{ label: "Our Services", url: "/our-services" }}
      />

      <section className="service-details section-space-top section-space-bottom2">
        <div className="container">
          <div className="row gutter-y-40">
            {/* Left Sidebar */}
            <div className="col-xl-4 col-lg-5">
              <div className="insurance-sidebar">
                <div className="insurance-sidebar__single">
                  <h3 className="insurance-sidebar__title">Our Services</h3>
                  <ul className="list-unstyled insurance-sidebar__nav">
                    {ORIGINAL_SERVICES.map((s) => {
                      const isActive = s.id === service.id;
                      return (
                        <li key={s.id} className={isActive ? "active" : ""}>
                          <Link href={`/service-detail/${s.slug}/${s.id}`}>
                            <span className="insurance-sidebar__nav__icon">
                              <i className="far fa-check-circle"></i>
                            </span>{" "}
                            {s.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Thumbnail */}
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__thumbnail">
                <img
                  src={`/img/service_image/750x750${service.image}`}
                  alt={service.title}
                  title={service.title}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>

          {/* Service Details & Key Points HTML */}
          <div
            className="service-details__content"
            style={{ marginTop: "40px" }}
            dangerouslySetInnerHTML={{ __html: service.description }}
          />
        </div>
      </section>
    </>
  );
}

