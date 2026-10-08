import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";

export default function useAboutHook() {
    const { productsPath, contactPath } = useRoutesHook();
    const { navigate } = useNavigate();

    return {
        productsPath, contactPath, navigate
    }
}