"use client";
import React from "react";
import Link from "next/link";
import CountUp from "react-countup";
import Layout from "@/components/layout/Layout";
import BrandSlider1 from "@/components/slider/BrandSlider1";
import EventOne from "@/components/common/EventOne";

const points = [
  {
    icon: "icon-air-horn",
    heading: "Talented Artists",
    description:
      "Experience performances from renowned artists and entertainers who turn every moment into magic.",
  },
  {
    icon: "icon-party-blower",
    heading: "Expert Planning",
    description:
      "Let our seasoned planners craft events that reflect your vision — from corporate functions to fairy-tale weddings.",
  },
];

export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="About Us">
        <div>
          <EventOne
            tagline="About Vibe Events"
            title="Creating Unforgettable Moments Together"
            buttonText="Join the Celebration"
            points={points}
            imageUrl="/assets/images/resources/event-one-img-1.jpg"
          />

          {/* Sliding Text Start */}
          <section className="sliding-text-one">
            <div className="sliding-text-one__wrap">
              <ul className="sliding-text__list marquee_mode">
                <li><h2 data-hover="Crafted Experiences" className="sliding-text__title">Crafted Experiences<img src="/assets/images/icon/star-icon.png" alt="Star Icon" /></h2></li>
                <li><h2 data-hover="Celebrate Life" className="sliding-text__title">Celebrate Life<img src="/assets/images/icon/star-icon.png" alt="Star Icon" /></h2></li>
                <li><h2 data-hover="Crafted Experiences" className="sliding-text__title">Crafted Experiences<img src="/assets/images/icon/star-icon.png" alt="Star Icon" /></h2></li>
                <li><h2 data-hover="Celebrate Life" className="sliding-text__title">Celebrate Life<img src="/assets/images/icon/star-icon.png" alt="Star Icon" /></h2></li>
                <li><h2 data-hover="Crafted Experiences" className="sliding-text__title">Crafted Experiences<img src="/assets/images/icon/star-icon.png" alt="Star Icon" /></h2></li>
                <li><h2 data-hover="Celebrate Life" className="sliding-text__title">Celebrate Life<img src="/assets/images/icon/star-icon.png" alt="Star Icon" /></h2></li>
              </ul>
            </div>
          </section>
          {/* Sliding Text End */}

          {/* Engagement Section Start */}
          <section className="buy-ticket">
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="buy-ticket__left wow fadeInLeft" data-wow-delay="100ms">
                    <ul className="buy-ticket__address list-unstyled">
                      <li><div className="icon"><span className="icon-clock"></span></div><div className="text"><p>Monday to Sunday</p></div></li>
                      <li><div className="icon"><span className="icon-pin"></span></div><div className="text"><p>Gulberg, Lahore, Pakistan</p></div></li>
                    </ul>
                    <h3 className="buy-ticket__title">Let’s Create the Vibe Together</h3>
                    <p className="buy-ticket__text">
                      Whether it’s a dreamy wedding or a high-profile corporate affair, we bring your vision to life with elegance and flair.
                    </p>
                    <div className="buy-ticket__btn-box">
                      <a href="/contact" className="buy-ticket__btn-1 thm-btn">
                        Start Planning <span className="icon-arrow-right"></span>
                      </a>
                      <a href="/services" className="buy-ticket__btn-2 thm-btn">
                        Explore Services <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="buy-ticket__right wow fadeInRight" data-wow-delay="300ms">
                    <div className="buy-ticket__img">
                      <img src="/assets/images/resources/buy-ticket-img.jpg" alt="Vibe Experience" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Engagement Section End */}

          {/* Brand Logos */}
          <section className="brand-one">
            <div className="container">
              <BrandSlider1 />
            </div>
          </section>

          {/* Event Direction Start */}
          <section className="event-direction event-direction-two">
            <div className="container">
              <div className="event-direction__inner">
                <div className="row">
                  <div className="col-xl-7 wow fadeInLeft" data-wow-delay="100ms">
                    <div className="event-direction__left">
                      <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                          <span className="section-title__tagline">Our Expertise</span>
                        </div>
                        <h2 className="section-title__title">
                          Designing Moments <br /> That Matter Most
                        </h2>
                      </div>
                      <p className="event-direction__text">
                        From intricate décor and gourmet catering to world-class entertainment — we perfect every detail to give you a stress-free celebration.
                      </p>
                      <div className="event-direction__call">
                        <div className="event-direction__call-icon">
                          <img src="/assets/images/icon/event-direction-chat-icon.png" alt="" />
                        </div>
                        <div className="event-direction__call-content">
                          <p>Call Us</p>
                          <h4><a href="tel:3075550133">(307) 555-0133</a></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 wow fadeInRight" data-wow-delay="300ms">
                    <div className="event-direction__right">
                      <ul className="event-direction__counter list-unstyled">
                        <li>
                          <div className="event-direction__counter-single">
                            <div className="event-direction__counter-box">
                              <h3 className="odometer"><CountUp start={0} end={100} duration={2} /></h3>
                              <span className="event-direction__counter-plus">+</span>
                            </div>
                            <p className="event-direction__counter-text">Events Managed</p>
                          </div>
                        </li>
                        <li>
                          <div className="event-direction__counter-single">
                            <div className="event-direction__counter-box">
                              <h3 className="odometer"><CountUp start={0} end={300} duration={2} /></h3>
                              <span className="event-direction__counter-plus">+</span>
                            </div>
                            <p className="event-direction__counter-text">Happy Clients</p>
                          </div>
                        </li>
                        <li>
                          <div className="event-direction__counter-single">
                            <div className="event-direction__counter-box">
                              <h3 className="odometer"><CountUp start={0} end={20} duration={2} /></h3>
                              <span className="event-direction__counter-plus">+</span>
                            </div>
                            <p className="event-direction__counter-text">Wedding Themes</p>
                          </div>
                        </li>
                        <li>
                          <div className="event-direction__counter-single">
                            <div className="event-direction__counter-box">
                              <h3 className="odometer"><CountUp start={0} end={50} duration={2} /></h3>
                              <span className="event-direction__counter-plus">+</span>
                            </div>
                            <p className="event-direction__counter-text">Corporate Events</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Event Direction End */}

          {/* CTA One Start */}
          <section className="cta-one">
            <div className="container">
              <div className="cta-one__inner">
                <h3 className="cta-one__title">
                  Stay Inspired & Updated <br /> Join Our Newsletter
                </h3>
                <form className="cta-one__form mc-form" data-url="MC_FORM_URL" noValidate>
                  <div className="cta-one__form-input-box">
                    <input type="email" placeholder="Enter your email" name="EMAIL" />
                    <button type="submit" className="cta-one__btn">
                      <span className="icon-paper-plan"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* CTA One End */}
        </div>
      </Layout>
    </>
  );
}
