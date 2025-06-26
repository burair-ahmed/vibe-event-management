"use client"; // Ensures the component runs on the client side

import Link from "next/link";
import { useState } from "react";

export default function ServicesOne() {
  const [servicesContent, setServicesContent] = useState({
    sectionTagline: "event benefits",
    sectionTitle: "Why Choose Vibe for Your Next Event?",
    services: [
      {
        id: 1,
        title: "Flawless Execution",
        description:
          "From planning to the final applause, we manage every detail with precision so your event runs seamlessly.",
        icon: "icon-camera",
        link: "/flawless-execution",
      },
      {
        id: 2,
        title: "Creative Concepts",
        description:
          "We turn your vision into reality with innovative ideas, elegant styling, and personalized themes.",
        icon: "icon-skewer",
        link: "/creative-concepts",
      },
      {
        id: 3,
        title: "One-Stop Service",
        description:
          "Venue, decor, catering, entertainment — we bring every element together under one expert team.",
        icon: "icon-dinner-table",
        link: "/one-stop-service",
      },
    ],
  });

  return (
    <>
      {/* Services One Start */}
      <section className="services-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">{servicesContent.sectionTagline}</span>
            </div>
            <h2 className="section-title__title">{servicesContent.sectionTitle}</h2>
          </div>
          <div className="row">
            {servicesContent.services.map((service) => (
              <div
                key={service.id}
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className={service.icon}></span>
                  </div>
                  <h3 className="services-one__title">
                    <Link href={service.link}>{service.title}</Link>
                  </h3>
                  <p className="services-one__text">{service.description}</p>
                  <Link href={service.link} className="services-one__read-more">
                    Read More <span className="icon-arrow-right"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services One End */}
    </>
  );
}
