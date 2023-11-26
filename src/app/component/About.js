import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

export default function About() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="about"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src={"/images/card.jpg"}
                  className="rounded-lg shadow-lg relative"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // optional
                />
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
                  קצת עלינו
                </h6>
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                  מי אנחנו
                </h3>

                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">
                  אנו מספקים שירותי הרמה חיצונית של רהיטים, מוצרי חשמל, תכולת
                  דירה, פרגולות, דוודי שמש, מזגנים, זכוכיות וכל מה שלא נכנס
                  במעלית או במדרגות עד קומה 15
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End --> */}
    </>
  );
}
