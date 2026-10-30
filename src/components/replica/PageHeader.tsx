import React from "react";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  parent?: {
    label: string;
    url: string;
  };
}

export default function PageHeader({ title, parent }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.png)" }}
      ></div>
      <div className="container">
        <div className="page-header__content">
          <h2 className="page-header__title">{title}</h2>
          <ul className="insuba-breadcrumb list-unstyled">
            <li>
              <Link href="/">Home</Link>
            </li>
            {parent && (
              <li>
                <Link href={parent.url}>{parent.label}</Link>
              </li>
            )}
            <li>
              <span>{title}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

