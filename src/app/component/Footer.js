import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Unicons from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <>
      {/*  Start Footer  */}
      <footer className="py-8 bg-slate-800 dark:bg-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-3">
              <Link href="#" className="logo-footer">
                <Image
                  src={"/images/nobglogo2.png"}
                  className="md:ms-0 mx-auto"
                  alt=""
                  width={105}
                  height={24}
                />
              </Link>
            </div>

            <div className="md:col-span-6 md:mt-0 mt-8">
              <div className="text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Ben Argaman. Design & Develop
                  with <i className="mdi mdi-heart text-orange-700"></i> by .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      {/* <!-- Back to top --> */}
      <Link
        href="home"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-orange-600 text-white leading-9"
      >
        <i className="uil uil-arrow-up"></i>
      </Link>
      {/* <!-- Back to top --> */}
    </>
  );
}
