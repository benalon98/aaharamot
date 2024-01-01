"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

import ModalVideo from "react-modal-video";

import * as Unicons from "@iconscout/react-unicons";

import Services from "./component/Services";
import About from "./component/About";
import Wrapper from "./component/Wrapper";

import "./assets/css/tailwind.css";
import "./assets/scss/tailwind.scss";

import "./assets/scss/icons.scss";
import Pricing from "./component/Pricing";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Portfolio from "./component/Portfolio";
import Review from "./component/Testimonial";
import Switcher from "./component/Switcher";

function Index_three() {
  const [isOpen, setMenu] = useState(true);
  const [videoModal, setModal] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }

    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <div>
          <nav className={`${scroll ? "is-sticky" : ""} navbar`} id="navbar">
            <div className="container flex flex-wrap items-center justify-end">
              <Link className="navbar-brand" href="index.html">
                <span className="inline-block dark:hidden">
                  <Image
                    src={"/images/nobglogo2.png"}
                    className="inline-block dark:hidden"
                    alt=""
                    width="100"
                    height={10}
                  />
                  <Image
                    src={"/images/nobglogo2.png"}
                    className="hidden dark:inline-block"
                    alt=""
                    width="100"
                    height={10}
                  />
                </span>
                <Image
                  src={"/images/nobglogo2.png"}
                  className="hidden dark:inline-block"
                  alt=""
                  height={10}
                  width="100"
                />
              </Link>

              <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
                <ul className="list-none menu-social mb-0">
                  <li className="inline ms-1">
                    <a
                      href="https://wa.me/9720535201699"
                      target="_blank"
                      class="btn btn-sm btn-icon p-1.5 rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white"
                    >
                      <Unicons.UilWhatsapp />
                    </a>
                  </li>

                  <li className="inline ms-1">
                    <a
                      href="https://www.instagram.com/a.a_haramot/"
                      target="_blank"
                      class="btn btn-sm btn-icon p-1.5 rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white"
                    >
                      <Unicons.UilInstagram />
                    </a>
                  </li>
                </ul>
                <button
                  type="button"
                  className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Navigation Menu</span>
                  <i className="mdi mdi-menu mdi-24px"></i>
                </button>
              </div>

              <div
                className={`${
                  isOpen === true ? "hidden" : "block"
                } navigation lg_992:order-1 lg_992:flex`}
                id="menu-collapse"
              >
                <ul className="navbar-nav" id="navbar-navlist">
                  <Link
                    className="nav-item"
                    to="home"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">בית</span>
                  </Link>
                  <Link
                    className="nav-item"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    to="about"
                  >
                    <span className="nav-link">קצת עלינו</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="features"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">שירותים</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="portfolio"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">תמונות</span>
                  </Link>

                  <Link
                    className="nav-item"
                    to="contact"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">צור קשר</span>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
          <section
            style={{ backgroundImage: `url(/images/bg/bg4.png)` }}
            className="py-36 md:h-screen h-auto items-center flex relative bg-bottom bg-cover active"
            id="home"
          >
            <div className="absolute inset-0  bg-gradient-to-b from-orange-600/20 dark:from-orange-600/40 via-orange-600/10 dark:via-orange-600/20 to-transparent"></div>
            <div className="container relative">
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                  <h1 className="lg:text-5xl text-4xl opacity-0  font-black mb-7 position-relative dark:text-white">
                                       שירותי מנוף <br /> והרמת משאות עד 15 קומות!
 אא הרמות
                  </h1>
                  <h4 className="lg:text-5xl text-4xl   font-black mb-7 position-relative dark:text-white">
                    שירותי מנוף <br /> והרמת משאות עד 15 קומות!
                  </h4>

                  <p className="text-slate-400 dark:text-white/70 mb-0 max-w-2xl text-lg">
                    אנחנו בא.א הרמות נספק לכם עבור כל מטרה : מעבר דירה , הורדה
                    או העלאה של משאות, דודים , מזגנים , ספות , רהיטים ,
                    אלומיניום חומרי בניין ועוד.
                  </p>

                  <div className="subcribe-form mt-10">
                    <button
                      type="submit"
                      className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full"
                    >
                      צור קשר <i className="uil uil-arrow-right"></i>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 md:col-span-6">
                  <div className="relative">
                    <div className="relative flex justify-end">
                      <Image
                        src="/images/a01.jpg"
                        width={400}
                        height={300}
                        className="lg:w-[400px] w-[280px] rounded-xl shadow dark:shadow-gray-700"
                        alt=""
                      />
                    </div>
                    <div className="absolute md:-start-5 start-0 -bottom-16">
                      <Image
                        src="/images/a02.jpg"
                        width={400}
                        height={300}
                        alt=""
                        className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About section */}
          <About />

          {/* Service section */}
          <Services />

          {/* Portfolio section */}
          <Portfolio />

          {/* Contact section */}
          <Contact />

          {/* Footer section */}
          <Footer />

          {/* Switcher section */}
          <Switcher />
        </div>
      </Wrapper>
    </>
  );
}

export default Index_three;
