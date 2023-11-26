import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import Link from "next/link";
import Image from "next/image";
import * as Unicons from "@iconscout/react-unicons";

const images = [
  "/images/a01.jpg",
  "/images/a02.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/card.jpg",
];

/**
 * Portfolio section
 */
export default function Portfolio() {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const handleCLick = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const projectList = [
    {
      image: "/images/a01.jpg",
      title: "Mockup Collection",
      subtext: "Branding",
    },
    {
      image: "/images/a02.jpg",
      title: "Mockup Collection",
      subtext: "Designing",
    },
    {
      image: "/images/3.jpg",
      title: "Abstract images",
      subtext: "Abstract",
    },
    {
      image: "/images/4.jpg",
      title: "Yellow bg with Books",
      subtext: "Books",
    },
    {
      image: "/images/5.jpg",
      title: "Company V-card",
      subtext: "V-card",
    },
    {
      image: "/images/6.jpg",
      title: "Mockup box with paints",
      subtext: "Photography",
    },
    {
      image: "/images/7.jpg",
      title: "Coffee cup",
      subtext: "Cups",
    },
    {
      image: "/images/card.jpg",
      title: "Pen and article",
      subtext: "Article",
    },
  ];
  return (
    <>
      {/* Project Start  */}
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 active"
        id="portfolio"
      >
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
              תיק עבודות
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white ">
              העברות משרד &amp; בתים
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
            {projectList.map((item, index) => (
              <div
                className="relative rounded-md shadow-sm overflow-hidden group"
                key={index}
              >
                <Image
                  src={item.image}
                  className="group-hover:origin-center h-72 group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt="workimage"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // optional
                />
                <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                <div className="content">
                  <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                    <Link
                      href="#"
                      onClick={() => handleCLick(index)}
                      className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox"
                    >
                      <Unicons.UilCamera width="17px" />
                    </Link>
                  </div>
                  <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setOpen(false)}
              onMovePrevRequest={() =>
                setActiveIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setActiveIndex((photoIndex + 1) % images.length)
              }
            />
          )}
        </div>
      </section>
      {/* Project End  */}
      <section
        style={{ backgroundImage: `url(${"/images/bg/movingbg.jpg"})` }}
        className="py-24 w-full table relative bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl text-white font-medium">
              עוברים דירה/משרד ? דברו איתנו עכשיו
            </h3>

            <p className="text-white opacity-50 max-w-xl mx-auto"></p>

            <div className="relative mt-10">
              <a
                href="https://wa.me/9720535201699"
                target="_blank"
                class="btn btn-sm btn-icon h-20 w-20 rounded-full bg-green-600 hover:scale-110 hover:opacity-90 border-white hover:border-opacity-40 text-white"
              >
                <Unicons.UilWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
