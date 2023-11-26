import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";

export default function Services() {
  const team = [
    {
      title: "מעבר דירה",
      Icon: Unicons.UilAdjustCircle,
      subtext: "נגרום למעבר הדירה שלך להיות מהיר יעיל ובמחיר משתלם",
    },
    {
      title: "מעבר משרד",
      Icon: Unicons.UilCircuit,
      subtext:
        "נדאג להעביר את כל תכולת המשרד הרצויה בצורה הבטוחה והמהירה ביותר",
    },
    {
      title: "צוות מנוסה",
      Icon: Unicons.UilFire,
      subtext:
        "ההעברות מתבצעות ע״י צוות מנוסה ומקצועי שלא מתפשר על איכות השירות",
    },
  ];

  return (
    <>
      {/* Start */}
      <section id="features" className="relative md:py-24 py-16">
        <div className="container lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
            <div>
              <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
                מה אנחנו עושים ?
              </h6>
              <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white md:mb-0">
                הפתרון המושלם עבור <br /> המעבר שלך
              </h3>
            </div>

            <div>
              <p className="text-slate-400 dark:text-slate-300 max-w-xl">
                אנו מספקים שירותי הרמה חיצונית של רהיטים, מוצרי חשמל, תכולת
                דירה, פרגולות, דוודי שמש, מזגנים, זכוכיות וכל מה שלא נכנס במעלית
                או במדרגות עד קומה 22
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {team.map((item, key) => {
              const Icon = item.Icon;
              return (
                <div
                  key={key}
                  className={`features p-6 ${
                    key % 2 === 0
                      ? "hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800"
                      : "shadow-xl shadow-slate-100 dark:shadow-slate-800"
                  } transition duration-500 rounded-3xl mt-8`}
                >
                  <div className="w-20 h-20 bg-orange-600/5 text-orange-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                    <Icon width="30px" height="30px" />
                  </div>

                  <div className="content mt-7">
                    <span
                      href="#"
                      className="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium"
                    >
                      {item.title}
                    </span>
                    <p className="text-slate-400 mt-3">{item.subtext}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
