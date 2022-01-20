import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BlackSpiritLogo } from "../components/BlackSpirit/BlackSpirit";
import { Container } from "../components/UI/Container";
import { MenuButton } from "../components/UI/MenuButton";
import { PlusIcon } from "../components/UI/PlusIcon";
import { transitionAnimation } from "../assets/style/transitionAnimation";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MenuButton />
      <BlackSpiritLogoBox>
        <BlackSpiritLogo />
      </BlackSpiritLogoBox>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
        {...transitionAnimation}
      >
        <CreateNewCharacterText>Create new character</CreateNewCharacterText>
        <CreateNewCharacterButton onClick={() => navigate("/classes")}>
          <PlusIcon />
        </CreateNewCharacterButton>
      </motion.div>
    </Container>
  );
};

const BlackSpiritLogoBox = styled.div`
  margin: 80px 0;
`;

const CreateNewCharacterText = styled.h3`
  font-weight: 500;
  text-align: center;
  font-size: 30px;
`;

const CreateNewCharacterButton = styled(motion.button)`
  flex: 1;
  margin: auto;
  border-radius: 10px;
  width: 160px;
  max-height: 160px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(105%);
  }
`;
