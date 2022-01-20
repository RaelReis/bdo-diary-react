import { createContext, useState } from "react";
import { initialGearState } from "./initialGearState";

const NewBuildContext = createContext();

const NewBuildProvider = ({ children }) => {
  const [charClass, setCharClass] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedGear, setSelectedGear] = useState(initialGearState);

  return (
    <NewBuildContext.Provider
      value={{
        charClass,
        setCharClass,
        selectedSlot,
        setSelectedSlot,
        selectedGear,
        setSelectedGear,
      }}
    >
      {children}
    </NewBuildContext.Provider>
  );
};

export { NewBuildContext, NewBuildProvider };
