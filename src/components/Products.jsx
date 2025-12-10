import ProductCard from "./ProductCard";
import { products } from "../data";
import SectionTitle from "./SectionTitle";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 align-element" id="products">
      <SectionTitle text={t("nav.products")} />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              {...{
                title: t(product.title),
                text: t(product.text),
                img: product.img,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Products;
