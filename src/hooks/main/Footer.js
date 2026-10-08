import { useNavigation } from "@/src/context/NavigationContext";
import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";

export default function useFooterHook() {
    const { pages } = useNavigation();
    const { navigate } = useNavigate();
    const { homePath } = useRoutesHook();
    return {

        pages,
        navigate,
        homePath,
    }
}