import styled from "styled-components";

export const NavBarItem = ({ icon, title, onClick, ...rest }) => {
  return (
    <NavItem onClick={onClick} {...rest}>
      <ItemIcon src={icon} alt={icon} />
      <ItemTitle>{title}</ItemTitle>
    </NavItem>
  );
};

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 60px;
  padding: 15px 40px;
  cursor: pointer;

  transition: all 0.3s ease-out;
  color: ${(props) => (props.selected ? "#DDC39E" : "#fff")};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const ItemIcon = styled.img``;

const ItemTitle = styled.h2`
  font-weight: 200;
  text-transform: capitalize;
  margin-left: 30px;
  font-size: 16px;

`;
