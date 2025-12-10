import i18n from "../i18n";
import { useState, useRef, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-2 py-1"
      >
        <FaGlobe className="text-l text-slate-500 hover:text-black duration-300" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white border shadow-lg rounded-md p-2">
          <button
            onClick={() => changeLanguage("si")}
            className="w-full text-left px-2 py-1 hover:bg-slate-100"
          >
            🇸🇮 Slovenščina
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="w-full text-left px-2 py-1 hover:bg-slate-100"
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="w-full text-left px-2 py-1 hover:bg-slate-100"
          >
            🇭🇷 Hrvatski
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="w-full text-left px-2 py-1 hover:bg-slate-100"
          >
            🇷🇸 Српски
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="w-full text-left px-2 py-1 hover:bg-slate-100"
          >
            🇧🇦 Bosanski
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="w-full text-left px-2 py-1 hover:bg-slate-100"
          >
            🇦🇱 Shqip
          </button>
        </div>
      )}
    </div>
  );
};
export default LanguageSelector;
