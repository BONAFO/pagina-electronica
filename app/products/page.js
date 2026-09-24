import ProductsContainer from "@/src/containers/ProductsContainer";
import { ProductsModalProvider } from "@/src/context/ProductsModalContext";
import MainLayout from "@/src/layouts/MainLayout";

export default function Products() {
  return (

    <ProductsModalProvider>
      <MainLayout>
        <ProductsContainer />
      </MainLayout>
    </ProductsModalProvider>

  );
}
