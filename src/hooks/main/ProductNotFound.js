import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";

export default function useProductNotFoundHook() {
  const { navigate } = useNavigate();
  const { homePath, productsPath } = useRoutesHook();
  return {
    navigate,
    homePath,
    productsPath,
  };
}
