import aboutSvg from "../assets/allergens.svg";
import SectionTitle from "./SectionTitle";
import { useTranslation } from "react-i18next";
import { partners } from "../data";
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
          <p className="mt-16 text-center text-2xl sm:text-3xl italic font-light tracking-wide text-[#00A3D8]">
            {t("about.moto")}
          </p>
        </article>
        <div>
          <div className="border-b border-[#A3D2E6] pb-5">
            <h2 className="text-xl font-medium tracking-wider">
              {t("about.partners.title")}
            </h2>
          </div>
          <div className="mt-8">
            <article className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 flex items-center justify-center"
                >
                  <img
                    src={partner.img}
                    alt={partner.alt}
                    className="w-full h-auto grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
