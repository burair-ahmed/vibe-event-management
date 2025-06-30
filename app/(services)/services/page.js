import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  const servicesData = [
    {
      id: 1,
      title: "Catering",
      description:
        "Delight your guests with exquisite culinary experiences crafted by top-tier chefs and tailored menus.",
      link: "event-prodigy",
      icon: "icon-camera",
      wowDelay: "100ms",
    },
    {
      id: 2,
      title: "Venue",
      description:
        "From luxurious ballrooms to scenic outdoor settings, we help you secure the perfect backdrop for your event.",
      link: "stellar-events-co",
      icon: "icon-skewer",
      wowDelay: "200ms",
    },
    {
      id: 3,
      title: "Decor",
      description:
        "Transform your space with elegant and personalized décor themes that reflect your unique style.",
      // link: "elite-event-management",
      icon: "icon-dinner-table",
      wowDelay: "300ms",
    },
    {
      id: 4,
      title: "Invitation Card",
      description:
        "Make a lasting first impression with beautifully designed invitation cards that capture the event’s spirit.",
      // link: "infinite-occasions",
      icon: "icon-cake",
      wowDelay: "400ms",
    },
    {
      id: 5,
      title: "Singers or Qawal",
      description:
        "Set the mood with live performances from talented singers or traditional qawals to elevate your event.",
      link: "dream-event-planners",
      icon: "icon-dental-specialists",
      wowDelay: "500ms",
    },
    {
      id: 6,
      title: "Rent a Car",
      description:
        "Provide your guests or VIPs with luxury transport services for smooth and stylish travel to your venue.",
      link: "event-prodigy",
      icon: "icon-modern-cos",
      wowDelay: "600ms",
    },
    {
      id: 7,
      title: "Photographer",
      description:
        "Capture every moment with professional photography that turns your memories into timeless keepsakes.",
      link: "event-prodigy",
      icon: "icon-modern-cos",
      wowDelay: "600ms",
    },
  ];

  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Services">
        <div>
          {/* Services Page Start */}
          <section className="services-page">
            <div className="container">
              <div className="row">
                {servicesData.map((service) => (
                  <div
                    key={service.id}
                    className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
                    data-wow-delay={service.wowDelay}
                  >
                    <div className="services-one__single">
                      <div className="services-one__icon">
                        <span className={service.icon}></span>
                      </div>
                      <h3 className="services-one__title">
                      {service.title}
                      </h3>
                      <p className="services-one__text">
                        {service.description}
                      </p>
                      {/* <Link
                        href={service.link}
                        className="services-one__read-more"
                      >
                        Read More <span className="icon-arrow-right"></span>
                      </Link> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Services Page End */}

          {/* CTA One Start */}
          <section className="cta-one">
            <div className="container">
              <div className="cta-one__inner">
                <h3 className="cta-one__title">
                  Get Latest Updates Subscribe <br /> to Our Newsletter
                </h3>
                <form
                  className="cta-one__form mc-form"
                  data-url="MC_FORM_URL"
                  noValidate
                >
                  <div className="cta-one__form-input-box">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="EMAIL"
                    />
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
