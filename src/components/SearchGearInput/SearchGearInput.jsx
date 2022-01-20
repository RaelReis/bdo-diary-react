import { useRef } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { GearSlot } from "../GearSlot/GearSlot";
import styled from "styled-components";
import downIcon from "../../assets/img/down_icon.png";
import upIcon from "../../assets/img/up_icon.png";
import { useNewBuild } from "../../context/hooks/useNewBuild";

const searchListVariants = {
  expand: {
    opacity: 1,
    height: "220px",
  },
  collapse: {
    opacity: 0,
    height: "-5px",
  },
};

const gearTitleTransform = {
  armor: "Armor",
  ring1: "Ring",
  ring2: "Ring",
  gloves: "Gloves",
  necklace: "Necklace",
  secondary_weapon: "Secondary Weapon",
  awakening_weapon: "Awakening Weapon",
  primary_weapon: "Primary Weapon",
  belt: "Belt",
  boots: "Boots",
  earring1: "Earring",
  earring2: "Earring",
  helm: "Helm",
  stone: "Stone",
};

export const SearchGearInput = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const { selectedSlot, setSelectedGear } = useNewBuild();

  return (
    <SearchGearBox>
      <GearSlot type={selectedSlot} onClick={() => inputRef.current.focus()} />
      <SearchGearInputBox onClick={() => setIsExpanded(true)}>
        <GearTitle>
          {gearTitleTransform[selectedSlot] || "Nothing selected"}
        </GearTitle>
        {!isFocus && (
          <SearchInputLabel htmlFor="searchInput">
            <DropListIcon src={downIcon} alt="Open gear list" />
          </SearchInputLabel>
        )}
        {isFocus && (
          <SearchInputLabel>
            <DropListIcon src={upIcon} alt="Close gear list" />
          </SearchInputLabel>
        )}
        <SearchInput
          id="searchInput"
          placeholder="Select an item"
          value={inputValue}
          ref={inputRef}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <GearList
          initial={"collapse"}
          animate={isExpanded && isFocus ? "expand" : "collapse"}
          variants={searchListVariants}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              cursor: "pointer",
            }}
            onClick={() => {
              setSelectedGear((prevState) => {
                return {
                  ...prevState,
                  armor: {
                    image:
                      "https://cdn.bdoplanner.com/game-art/items/armor/719898.png",
                    color: "#FF8A65",
                  },
                };
              });
              setInputValue("Fallen's God's Armor");
            }}
          >
            <img
              src="https://cdn.bdoplanner.com/game-art/items/armor/719898.png"
              alt="teste"
            />
            <span style={{ color: "#FF8A65", flex: 1 }}>
              Fallen's God's Armor
            </span>
          </div>
        </GearList>
      </SearchGearInputBox>
    </SearchGearBox>
  );
};

const GearList = styled(motion.div)`
  background-color: #131320;
  overflow: auto;
`;

const SearchGearBox = styled.div`
  flex: 1;
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
`;

const SearchGearInputBox = styled.div`
  flex: 1;
  background-color: #131320;
  position: relative;
  height: 50px;
  // margin: 70px 0;
  margin-left: 20px;
`;

const GearTitle = styled.span`
  position: absolute;
  color: #989898;
  font-size: 12px;
  font-weight: 500;
  left: 5px;
  top: -25px;
`;

const SearchInput = styled.input`
  font-family: Poppins, sans-serif;
  background-color: #131320;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  height: 55px;
  padding: 0 15px;
  width: 100%;
  border-bottom: 2px solid #4c4c64;
  text-align: bottom;
  color: #fff;

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
`;

const SearchInputLabel = styled.label`
  display: flex;
  flex-align: center;
  justify-content: center;
  padding: 15px;
  position: absolute;
  right: 0;
  top: 8px;
`;
const DropListIcon = styled.img``;
