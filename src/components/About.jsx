import aboutSvg from "../assets/undraw_scientist_5td0.svg";
import SectionTitle from "./SectionTitle";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text={t("nav.about")} />
          <p className="whitespace-pre-line text-slate-600 mt-8 leading-loose">
            {t("about.description")}
          </p>
          <p className="mt-16 text-center text-2xl sm:text-3xl italic font-light tracking-wide text-sky-600">
            {t("about.moto")}
          </p>
        </article>
        <div>
          <div className="border-b border-sky-100 pb-5">
            <h2 className="text-xl font-medium tracking-wider">
              {t("about.partners.title")}
            </h2>
          </div>
          <div className="mt-8">
            <article className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="partner 1"
                  className="w-full h-auto grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="partner 2"
                  className="w-full h-auto grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="partner 1"
                  className="w-full h-auto grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="partner 2"
                  className="w-full h-auto grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
