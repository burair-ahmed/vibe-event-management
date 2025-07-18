import Link from 'next/link';

export default function Footer1() {
  return (
    <>
      {/* Site Footer Start */}
      <footer className="site-footer">
        <div className="site-footer__shape-1 float-bob-y">
          <img src="/assets/images/shapes/site-footer-shape-1.png" alt="" />
        </div>

        {/* <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
            </div>
          </div>
        </div> */}

        <div className="site-footer__middle">
          <div className="container">
            <div className="site-footer__middle-inner">
              <div className="row">
                {/* Column: Logo & Social Icons */}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                  <div className="footer-widget__column footer-widget__logo-social">
                    <div className="footer-widget__logo">
                      <Link href="/">
                        <img src="/assets/images/resources/site-footer-logo-1.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="footer-widget__social mt-4">
                      {/* <Link href="#"><i className="icon-facebook"></i></Link>
                      <Link href="#"><i className="icon-fi"></i></Link>
                      <Link href="#"><i className="icon-instagram"></i></Link>
                      <Link href="#"><i className="icon-pinterest"></i></Link> */}
                              <div className="site-footer__social">
                                <Link href="#"><i className="icon-facebook"></i></Link>
                                <Link href="#"><i className="icon-fi"></i></Link>
                                <Link href="#"><i className="icon-instagram"></i></Link>
                                <Link href="#"><i className="icon-pinterest"></i></Link>
                            </div>
                    </div>
                  </div>
                </div>

                {/* Column: Quick Links */}
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="footer-widget__column footer-widget__link">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Quick links</h3>
                    </div>
                    <ul className="footer-widget__link-list list-unstyled">
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/services">Service</Link></li>
                      <li><Link href="/contact">Online Ticket</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Column: Our Company */}
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="footer-widget__column footer-widget__our-company">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Our Company</h3>
                    </div>
                  <ul className="footer-widget__link-list list-unstyled">
  <li><Link href="/services#catering">Catering</Link></li>
  <li><Link href="/services#venue">Venue</Link></li>
  <li><Link href="/services#decor">Decor</Link></li>
  <li><Link href="/services#invitations">Invitation Card</Link></li>
  <li><Link href="/services#entertainment">Singers & Qawals</Link></li>
  <li><Link href="/services#transport">Rent a Car</Link></li>
  <li><Link href="/services#photography">Photography</Link></li>
</ul>

                  </div>
                </div>

                {/* Column: Contact Info */}
                <div className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                  <div className="footer-widget__column footer-widget__contact">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Contact</h3>
                    </div>
                    <div className="footer-widget__contact-inner">
                      <ul className="footer-widget__contact-list list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-envelop"></span>
                          </div>
                          <div className="text">
                            <p><a href="mailto:info@vibeeventmanagement.com">info@vibeeventmanagement.com</a></p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>Office 1/2 Mezzanine Floor Osif Arcade,<br/>Block 15
                      Gulshan-e-Iqbal, Karachi</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-call"></span>
                          </div>
                          <div className="text">
                            <p><a href="tel:0323-7652515  ">0323-7652515</a></p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">© Vibe Event Management 2025 | All Rights Reserved</p>
              <ul className="list-unstyled site-footer__bottom-menu">
                <li><Link href="/about">Terms & Condition</Link></li>
                <li><Link href="/about">Privacy Policy</Link></li>
                <li><Link href="/about">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Site Footer End */}
    </>
  );
}
