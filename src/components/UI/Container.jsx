import styled from "styled-components";
import { NavBar } from "../NavBar/NavBar";

export const Container = ({ children }) => {
  return (
    <>
      <NavBar />
      <ContainerTemplate>{children}</ContainerTemplate>
    </>
  );
};

const ContainerTemplate = styled.div`
  padding: 45px 35px;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;
