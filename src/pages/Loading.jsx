import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { MainLogo } from "../components/MainLogo/MainLogo";

export const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/home"), 3000);
  }, [navigate]);

  return (
    <LoadingContainer>
      <MainLogo />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;
