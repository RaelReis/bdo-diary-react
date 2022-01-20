import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNewBuild } from "../../context/hooks/useNewBuild";
import { classImages } from "../../utils/classImages";
import { transitionAnimation } from "../../assets/style/transitionAnimation";

const classNameList = [
  "berserker",
  "ranger",
  "sorc",
  "tamer",
  "valk",
  "warrior",
  "witch",
  "wizard",
  "musa",
  "maewha",
  "ninja",
  "kunoichi",
  "dark_knight",
  "striker",
  "mystic",
  "lahn",
  "archer",
  "shai",
  "guardian",
  "hashashin",
  "nova",
  "sage",
  "corsair",
];

export const ClassList = () => {
  const navigate = useNavigate();

  const { setCharClass } = useNewBuild();

  function handleSelectClass(className) {
    setCharClass(className);
    navigate("/build");
  }

  return (
    <ClassListBox {...transitionAnimation}>
      {classNameList.map((className, index) => (
        <ClassButton
          key={index}
          src={classImages[className].icon}
          alt={className}
          width={70}
          onClick={() => handleSelectClass(className)}
        />
      ))}
    </ClassListBox>
  );
};

const ClassListBox = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  max-width: 580px;
  max-height: 480px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
`;

const ClassButton = styled.img`
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(120%);
    opacity: 1;
  }

  @media (min-width: 600px) {
    width: 90px;
  }
`;
