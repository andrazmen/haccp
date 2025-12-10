import { links } from "../data";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="bg-sky-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Inštitut za varno hrano
          <span className="text-sky-600"> HACCP</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            return (
              <a
                key={link.id}
                href={link.href}
                className="relative text-lg tracking-wide text-slate-700 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-sky-600 before:transition-all before:duration-300 hover:before:w-full"
              >
                {t(link.key)}
              </a>
            );
          })}
        </div>
        <LanguageSelector />
      </div>
    </nav>
  );
};
export default Navbar;
