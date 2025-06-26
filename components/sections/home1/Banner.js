'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-slider-pagination",
    type: "bullets",
    clickable: true
  },
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev"
  },
  autoplay: {
    delay: 8000
  }
}

export default function Banner() {
  return (
    <>
      <section className="main-slider">
        <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
          <div className="swiper-wrapper">

            {/* Slide 1 – Weddings */}
            <SwiperSlide className="swiper-slide">
              <div className="main-slider__img">
                <img src="assets/images/resources/main-slider-img-1-1.jpg" alt="Wedding Event" />
              </div>
              <div className="main-slider__shpae-1">
                <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
              </div>
              <div className="main-slider__shpae-2">
                <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
              </div>
              <div className="main-slider__start-1">
                <img src="assets/images/shapes/main-slider-star-1.png" alt="" />
              </div>
              <div className="main-slider__start-2 zoominout">
                <img src="assets/images/shapes/main-slider-star-2.png" alt="" />
              </div>
              <div className="main-slider__start-3">
                <img src="assets/images/shapes/main-slider-star-3.png" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <p className="main-slider__sub-title">Unforgettable Moments Start Here</p>
                      <h2 className="main-slider__title">
                        Your Dream Wedding <br /> <span>Brought to Life</span>
                      </h2>
                      <p className="main-slider__text">
                        From intimate nikkahs to lavish receptions, we create weddings filled <br/>with love, detail, and timeless beauty.
                      </p>
                      <div className="main-slider__btn-box mt-5">
                        <Link href="/contact" className="main-slider__btn thm-btn">
                          Plan My Wedding <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 – Corporate Events */}
            <SwiperSlide className="swiper-slide">
              <div className="main-slider__img">
                <img src="assets/images/resources/main-slider-img-1-2.jpg" alt="Corporate Event" />
              </div>
              <div className="main-slider__shpae-1">
                <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
              </div>
              <div className="main-slider__shpae-2">
                <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
              </div>
              <div className="main-slider__start-1">
                <img src="assets/images/shapes/main-slider-star-1.png" alt="" />
              </div>
              <div className="main-slider__start-2 zoominout">
                <img src="assets/images/shapes/main-slider-star-2.png" alt="" />
              </div>
              <div className="main-slider__start-3">
                <img src="assets/images/shapes/main-slider-star-3.png" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <p className="main-slider__sub-title">Professional. Polished. Powerful.</p>
                      <h2 className="main-slider__title">
                        Corporate Events <br /> <span>With Impact</span>
                      </h2>
                      <p className="main-slider__text">
                        We turn corporate ideas into impressive experiences — from brand launches<br/> to annual conferences and galas.
                      </p>
                      <div className="main-slider__btn-box mt-5">
                        <Link href="/contact" className="main-slider__btn thm-btn">
                          Book an Event <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 – Full-Service */}
            <SwiperSlide className="swiper-slide">
              <div className="main-slider__img">
                <img src="assets/images/resources/main-slider-img-1-3.jpg" alt="Full Service Event" />
              </div>
              <div className="main-slider__shpae-1">
                <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
              </div>
              <div className="main-slider__shpae-2">
                <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
              </div>
              <div className="main-slider__start-1">
                <img src="assets/images/shapes/main-slider-star-1.png" alt="" />
              </div>
              <div className="main-slider__start-2 zoominout">
                <img src="assets/images/shapes/main-slider-star-2.png" alt="" />
              </div>
              <div className="main-slider__start-3">
                <img src="assets/images/shapes/main-slider-star-3.png" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <p className="main-slider__sub-title">One Team. Every Detail.</p>
                      <h2 className="main-slider__title">
                        Full-Service Planning <br /> <span>With Style</span>
                      </h2>
                      <p className="main-slider__text">
                        From venue and decor to catering and music, Vibe manages it all — so you enjoy<br/> a flawless event, stress-free.
                      </p>
                      <div className="main-slider__btn-box mt-5">
                        <Link href="/contact" className="main-slider__btn thm-btn">
                          Explore Services <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </div>
        </Swiper>
        <div className="swiper-pagination" id="main-slider-pagination" />
      </section>
    </>
  )
}
