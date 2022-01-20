import { useContext } from "react";
import { NewBuildContext } from "../NewBuildContext/NewBuildContext";

export const useNewBuild = () => {
  return useContext(NewBuildContext);
};
