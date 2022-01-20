import styled from "styled-components";
import logoText from "../../assets/img/main_logo_text.png";
import { BlackSpiritLogo } from "../BlackSpirit/BlackSpirit";

export const MainLogo = () => {
  return (
    <LogoBox>
      <BlackSpiritLogo />
      <LogoTextBox>
        <LogoTextImg src={logoText} alt="a" />
      </LogoTextBox>
    </LogoBox>
  );
};

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoTextImg = styled.img`
  margin: 40px auto;
`;

const LogoTextBox = styled.div`
  text-align: center;
`;
