import { useState } from "react";
import useRoutesHook from "./Routes";
import { useNavigate } from "../Navigation";

export default function useProductHook({ product }) {
    const [showModal, setShowModal] = useState(false);

    const { homePath, productsPath } = useRoutesHook();
    const { navigate } = useNavigate();
    return {
        navigate,
        homePath,
        productsPath,
        showModal,
        setShowModal,
    };
}
