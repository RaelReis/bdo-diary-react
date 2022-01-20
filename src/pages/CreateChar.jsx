import styled from "styled-components";
import { Container } from "../components/UI/Container";
import { BlackSpiritLogo } from "../components/BlackSpirit/BlackSpirit";
import { MenuButton } from "../components/UI/MenuButton";

import { ClassList } from "../components/ClassList/ClassList";

export const CreateChar = () => {
  return (
    <Container>
      <MenuButton />
      <BlackSpiritLogoBox>
        <BlackSpiritLogo />
      </BlackSpiritLogoBox>
      <ClassList />
    </Container>
  );
};

const BlackSpiritLogoBox = styled.div`
  margin-top: 80px;
  margin-bottom: 30px;
`;
