"use client";

import ProductCard from "../components/ProductCard";
import products from "../db/Products.db.json";
import ProductFilterMenu from "../components/ProductFilterMenu";
import { useProductsModal } from "../context/ProductsModalContext";
export default function ProductsContainer() {
  const {modalVisible} = useProductsModal();
  return (
    <>
      <ProductFilterMenu/>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        
        {modalVisible}
      </div>
    </>
  );
}
