"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookEvent() {
  const [content, setContent] = useState({
    address: "Main Office: Mirpur 01, Dhaka, Bangladesh",
    timing: "Support Hours: 10 AM – 10 PM (Mon–Sat)",
    title: "Celebrate Your Special Day with Vibe",
    description:
      "From heartfelt weddings to lively traditional gatherings, our expert planners ensure every detail is flawless. Let us craft your unforgettable moments with elegance, joy, and love.",
    buttons: [
      { id: 1, text: "Plan Your Wedding", link: "/contact", class: "buy-ticket__btn-1" },
      { id: 2, text: "Talk to Our Team", link: "/contact", class: "buy-ticket__btn-2" },
    ],
    image: "/assets/images/resources/buy-ticket-img.jpg", // Make sure this is inside the /public folder
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
                      <span className="icon-pin"></span>
                    </div>
                    <div className="text">
                      <p>{content.address}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-clock"></span>
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
                  <img src={content.image} alt="Wedding Celebration" />
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
