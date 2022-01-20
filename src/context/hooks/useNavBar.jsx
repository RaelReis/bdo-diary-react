import { useContext } from "react";
import { NavBarContext } from "../NavBarContext/NavBarContex";

export const useNavBar = () => {
  return useContext(NavBarContext);
};
