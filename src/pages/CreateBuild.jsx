import styled from "styled-components";
import { useEffect } from "react";
import { Navigate as Redirect } from "react-router-dom";
import { useNewBuild } from "../context/hooks/useNewBuild";

import { BlackSpiritLogo } from "../components/BlackSpirit/BlackSpirit";
import { CharacterBuildBox } from "../components/CharacterBuildBox/CharacterBuildBox";
import { Container } from "../components/UI/Container";
import { MenuButton } from "../components/UI/MenuButton";
import { SearchGearInput } from "../components/SearchGearInput/SearchGearInput";
import { motion } from "framer-motion";
import { transitionAnimation } from "../assets/style/transitionAnimation";

export const CreateBuild = () => {
  const { charClass } = useNewBuild();

  useEffect(() => {
    if (charClass) {
      document.title = `BDO Diary - ${charClass
        .split("")
        .map((char, index) => (index === 0 ? char.toUpperCase() : char))
        .join("")}`;
    }
    return () => {
      document.title = "BDO Diary";
    };
  }, [charClass]);

  return (
    <>
      {charClass ? (
        <Container>
          <HeaderBox>
            <MenuButton />
            <BlackSpiritLogo size={40} />
          </HeaderBox>
          <motion.div {...transitionAnimation}>
            <CharacterBuildBox />
            <ChangeGearBox>
              <SearchGearInput />
            </ChangeGearBox>
          </motion.div>
        </Container>
      ) : (
        <Redirect to="/classes" />
      )}
    </>
  );
};

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChangeGearBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
