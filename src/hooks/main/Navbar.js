import { useNavigation } from "@/src/context/NavigationContext";
import { useState } from "react";
import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";

export default function useNavbarHook() {
  const [isOpen, setIsOpen] = useState(false);
  const { pages } = useNavigation();

  const { navigate } = useNavigate();
  const { homePath, contactPath } = useRoutesHook();
  return {
    isOpen,
    setIsOpen,
    pages,
    navigate,
    homePath,
    contactPath,
  };
}
