import { motion } from "framer-motion";
import styled from "styled-components";
import black_spirit from "../../assets/img/black_spirit.png";

export const BlackSpiritLogo = (props) => {
  return (
    <BlackSpiritBox>
      <BlackSpirit
        {...props}
        src={black_spirit}
        alt="BlackSpirit"
        layoutId="black-spirit"
        transition={{ duration: 0.7 }}
      />
    </BlackSpiritBox>
  );
};

const BlackSpiritBox = styled.div`
  text-align: center;
`;

const BlackSpirit = styled(motion.img)`
  width: ${(props) => props?.size}px;
  margin: 0 auto;
`;
