"use client"; // Ensures the component runs on the client side

import { useState } from "react";
import Link from "next/link";

export default function BookEvent() {
  const [content, setContent] = useState({
    address: "Main Office: Mirpur 01, Dhaka, Bangladesh",
    timing: "Support Hours: 10 AM – 10 PM (Mon–Sat)",
    title: "Ready to Plan Your Perfect Event?",
    description:
      "Whether it’s a dreamy wedding, a stylish corporate event, or an intimate gathering — Vibe Event Management is here to bring your vision to life. Let’s make it unforgettable together.",
    buttons: [
      { id: 1, text: "Book Now", link: "/contact", class: "buy-ticket__btn-1" },
      { id: 2, text: "Get in Touch", link: "/contact", class: "buy-ticket__btn-2" },
    ],
    image: "/assets/images/resources/buy-ticket-img.jpg",
  });

  return (
    <>
      {/* Book Event Start */}
      <section className="buy-ticket">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="buy-ticket__left wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <ul className="buy-ticket__address list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-clock"></span>
                    </div>
                    <div className="text">
                      <p>{content.address}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="text">
                      <p>{content.timing}</p>
                    </div>
                  </li>
                </ul>
                <h3 className="buy-ticket__title">{content.title}</h3>
                <p className="buy-ticket__text">{content.description}</p>
                <div className="buy-ticket__btn-box">
                  {content.buttons.map((button) => (
                    <Link
                      key={button.id}
                      href={button.link}
                      className={`${button.class} thm-btn`}
                    >
                      {button.text}
                      <span className="icon-arrow-right"></span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="buy-ticket__right wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="buy-ticket__img">
                  <img src={content.image} alt="Event Booking" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Book Event End */}
    </>
  );
}
