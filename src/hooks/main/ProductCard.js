import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";

export default function useProductCardHook({ product }) {
    const { navigate } = useNavigate();
    const { productPath } = useRoutesHook();
    return {
        navigate,
        productPath



    }
}