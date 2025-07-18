import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (

      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link href="/">
                        <img src="/assets/images/resources/logo-1.png" alt="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="main-menu__main-menu-box">
                  <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                    <i className="fa fa-bars" />
                  </div>
                  <Menu />
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__btn-box">
                    <Link href="/contact" className="main-menu__btn thm-btn">
                        Get a Qoute <span className="icon-arrow-right"></span>
                    </Link>
                  </div>
                    <div className="main-menu__cart-search-nav-sidebar-icon-and-btn-box">
                      {/* <a href="#" className="main-menu__cart icon-cart"></a>
                      <a href="#" className="main-menu__search search-toggler" onClick={handlePopup}>
                        <span className="icon-loupe"></span>
                      </a> */}
                      <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                        <div className="navSidebar-button">
                          <span className="icon-menu1"></span>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </nav>

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
        <div className="sticky-header__content" />
        <nav className="main-menu">
          <div className="main-menu__wrapper">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link href="/">
                        <img src="/assets/images/resources/logo-1.png" alt="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="main-menu__main-menu-box">
                  <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                    <i className="fa fa-bars" />
                  </div>
                  <Menu />
                </div>
                <div className="main-menu__right">
                <div className="main-menu__btn-box">
                    <Link href="/contact" className="main-menu__btn thm-btn">
                        Get a Qoute <span className="icon-arrow-right"></span>
                    </Link>
                  </div>
                  <div className="main-menu__cart-search-nav-sidebar-icon-and-btn-box">
                    {/* <a href="#" className="main-menu__cart icon-cart"></a> */}
                    {/* <div className="main-menu__search search-toggler" onClick={handlePopup}>
                      <span className="icon-loupe"></span>
                    </div> */}
                    <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                      <div className="navSidebar-button">
                        <span className="icon-menu1"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </nav>
      </div>

      <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
    </header>
    
    )
}