"use client";

import { useState } from "react";
import Link from "next/link";

export default function EventOne() {
  const [eventContent, setEventContent] = useState({
    sectionTagline: "Corporate Gatherings",
    sectionTitle: "Celebrate Success with Memorable Office Events",
    buttonText: "Plan Your Event",
    buttonLink: "/contact",
    points: [
      {
        id: 1,
        iconClass: "icon-briefcase", // You can customize this icon based on your icon pack
        title: "Office Celebrations",
        description:
          "From employee birthdays to milestone achievements, we help you celebrate joyfully within the workplace.",
        link: "/corporate-events",
      },
      {
        id: 2,
        iconClass: "icon-users", // Adjust icon as needed
        title: "Team Building Events",
        description:
          "Boost morale and strengthen collaboration with professionally planned corporate retreats and activities.",
        link: "/corporate-events",
      },
    ],
    eventImage: "/assets/images/resources/event-one-img-1.jpg", // Make sure the image is in the /public folder
  });

  return (
    <>
      {/* Corporate Event Section Start */}
      <section className="event-one">
        <div className="container">
          <div
            className="event-one__inner wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="event-one__top">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    {eventContent.sectionTagline}
                  </span>
                </div>
                <h2 className="section-title__title">
                  {eventContent.sectionTitle}
                </h2>
              </div>
              <div className="event-one__btn-box">
                <Link
                  href={eventContent.buttonLink}
                  className="event-one__btn thm-btn"
                >
                  {eventContent.buttonText}
                  <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

            <ul className="list-unstyled event-one__points">
              {eventContent.points.map((point) => (
                <li key={point.id}>
                  <div className="icon">
                    <span className={point.iconClass}></span>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href={point.link}>{point.title}</Link>
                    </h4>
                    <p>{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="event-one__img-box">
              <img src={eventContent.eventImage} alt="Corporate Event" />
            </div>
          </div>
        </div>
      </section>
      {/* Corporate Event Section End */}
    </>
  );
}
