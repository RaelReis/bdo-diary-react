import styled from "styled-components";
import menuIcon from "../../assets/img/menu_icon.svg";
import { useNavBar } from "../../context/hooks/useNavBar";

export const MenuButton = () => {
  const { setNavBarExpanded } = useNavBar();

  return (
    <MenuButtonBox>
      <MenuIcon
        onClick={() => setNavBarExpanded((prevState) => !prevState)}
        src={menuIcon}
        alt="Menu"
      />
    </MenuButtonBox>
  );
};

const MenuButtonBox = styled.div`
  margin-right: auto;
  z-index: 5;
`;

const MenuIcon = styled.img`
  padding: 15px;
`;
