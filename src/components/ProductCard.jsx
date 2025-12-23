const ProductCard = ({ img, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-md hover:shadow-[#A3D2E6] duration-300">
      <img
        src={img}
        alt={title}
        className="mx-auto my-8 max-h-48 w-full object-contain rounded-lg"
      />
      <div className="p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose whitespace-pre-line">
          {text}
        </p>
      </div>
    </article>
  );
};
export default ProductCard;
