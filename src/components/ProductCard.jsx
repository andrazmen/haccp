import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const ProductCard = ({ img, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose whitespace-pre-line">
          {text}
        </p>
        <div className="mt-4 flex gap-x-4">
          <a href="#contact">
            <FaPhoneAlt className="text-xl text-slate-500 hover:text-black duration-300" />
          </a>
          <a href="#contact">
            <FaEnvelope className="text-xl text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProductCard;
