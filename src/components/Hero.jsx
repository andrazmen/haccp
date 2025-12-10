import heroImg from "../assets/hero.svg";
import { FaAt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-sky-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            Inštitut za varno hrano
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            HACCP
          </p>
          <p className="mt-2 text-lg text-slate-700 tracking-wide">
            {t("hero")}
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#contact">
              <FaPhoneAlt className="text-xl text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#contact">
              <FaEnvelope className="text-xl text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
