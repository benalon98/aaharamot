import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-scroll";

export default function Contact() {
  return (
    <>
      {/* Start */}
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="contact"
      >
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
              צור קשר
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              דברו איתנו !
            </h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              מעבר מעולם לא היה פשוט יותר{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6">
            <div className="lg:col-span-4">
              <div className="lg:ms-8">
                <div className="flex">
                  <div className="icons text-center mx-auto">
                    <Unicons.UilPhone className="rounded text-2xl dark:text-white mb-0" />
                  </div>

                  <div className="flex-1 ms-6">
                    <h5 className="text-lg dark:text-white mb-2 font-medium">
                      טלפון
                    </h5>
                    <Link
                      href="tel:+972053-520-1699"
                      className="text-slate-400"
                    >
                      053-520-1699
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
