//import aboutSvg from "../assets/about.svg";
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="align-element grid md:grid-cols-2 items-start gap-16">
        <article>
          <SectionTitle text={t("nav.contact")} />

          <div className="mt-8 bg-white shadow-sm border border-slate-100 rounded-lg p-8 space-y-4">
            <div className="flex items-start gap-4">
              <FaBuilding className="text-2xl text-slate-700" />
              <p className="text-slate-600 leading-relaxed">
                Inštitut za varno hrano, svetovanje, izobraževanje in
                projektiranje, Anica Kropec s.p.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FaLocationDot className="text-xl text-slate-700" />
              <p className="text-slate-600 leading-relaxed">
                Črešnjevec 59, 2310 Slovenska Bistrica
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-xl text-slate-700" />
              <p className="text-slate-600 leading-relaxed">+386 51 310 272</p>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-xl text-slate-700" />
              <p className="text-slate-600 leading-relaxed">
                anica.kropec@gmail.com
              </p>
            </div>
          </div>
        </article>
        <div className="hidden md:block">
          <iframe
            className="w-full h-80 rounded-xl border border-slate-200"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2752.897551977875!2d15.612873676691105!3d46.37142057245189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47658759d3f4544d%3A0xeb87280918a9437c!2s%C4%8Cre%C5%A1njevec%2059%2C%202310%20Slovenska%20Bistrica!5e0!3m2!1ssl!2ssi!4v1765284996966!5m2!1ssl!2ssi"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Contact;
