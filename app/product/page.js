import ProductContainer from "@/src/containers/ProductContainer";

export default async function ProductPage({ searchParams }) {
    return (
        <ProductContainer searchParams={searchParams} />
    );
}
