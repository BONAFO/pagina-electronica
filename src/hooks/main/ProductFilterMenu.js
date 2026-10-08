import { useProductsModal } from "@/src/context/ProductsModalContext";
import { useState } from "react";
import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";

import products from "../../db/Products.db.json";


export default function useProductFilterMenuHook() {
    const { setModalVisible } = useProductsModal();
    const [search, setSearch] = useState("");

    const { navigate } = useNavigate();
    const { productPath } = useRoutesHook();

    const searchResults =
        search.trim() === ""
            ? []
            : products
                .filter((product) => {
                    const value = search.toLowerCase().trim();

                    return (
                        product.name.toLowerCase().includes(value) ||
                        product.brand.toLowerCase().includes(value)
                    );
                })
                .slice(0, 10);

    const handleProductClick = (id) => {
        navigate(`${productPath}?id=${id}`, setSearch(""));
    };

    return {
        setModalVisible,
        search,
        setSearch,
        navigate,
        productPath,
        searchResults,
        handleProductClick,

    }
}