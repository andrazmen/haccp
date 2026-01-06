import { links } from "../data";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/haccp-logo/logo4.png";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="bg-sky-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <div className="flex flex-col sm:flex-row sm:gap-x-0 sm:items-center">
          <img
            src={logoImg}
            alt="Inštitut za varno hrano HACCP"
            className="hidden md:block h-40 w-auto"
          />
          <h2 className="hidden md:block text-2xl sm:text-3xl font-bold">
            Inštitut za varno hrano{" "}
            <span className="text-[#00A3D8]">HACCP</span>
          </h2>
        </div>
        <div className="flex flex-row items-center gap-x-3 mt-4 sm:mt-0">
          <div className="flex gap-x-3">
            {links.map((link) => {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative text-lg tracking-wide text-slate-700 whitespace-nowrap before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#00A3D8] before:transition-all before:duration-300 hover:before:w-full"
                >
                  {t(link.key)}
                </a>
              );
            })}
          </div>
          <div className="ml-6">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
