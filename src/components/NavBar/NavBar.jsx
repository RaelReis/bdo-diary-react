import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useNavBar } from "../../context/hooks/useNavBar";
import { NavBarItem } from "../NavBarItem/NavBarItem";

import homeDefaultIcon from "../../assets/img/home_icon_default.svg";
import homeSelectedIcon from "../../assets/img/home_icon_selected.svg";
import marketIcon from "../../assets/img/market_icon.svg";
import grindIcon from "../../assets/img/grind_icon.svg";
import { useLocation, useNavigate } from "react-router-dom";

const navBarVariants = {
  collapse: {
    x: -270,
  },
  expanded: {
    x: 0,
  },
  exit: {
    x: -270,
  },
};

export const NavBar = () => {
  const { navBarExpanded, setNavBarExpanded } = useNavBar();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavBarCick = (location) => {
    setNavBarExpanded(false);
    navigate(location);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {navBarExpanded && (
        <>
          <BackGround
            onClick={() => setNavBarExpanded(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <NavBarBox
            exit="exit"
            variants={navBarVariants}
            initial="collapse"
            animate="expanded"
            transition={{ duration: 0.3 }}
          >
            <NavBarItems>
              <HorizontalLine />
              <NavBarItem
                icon={
                  location.pathname !== "/home"
                    ? homeDefaultIcon
                    : homeSelectedIcon
                }
                title="home"
                onClick={() => handleNavBarCick("/home")}
                selected={location.pathname === "/home"}
              />
              <NavBarItem icon={marketIcon} title="market calc" />
              <NavBarItem icon={grindIcon} title="grind tracker" />
            </NavBarItems>
          </NavBarBox>
        </>
      )}
    </AnimatePresence>
  );
};

const BackGround = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;

  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;

const NavBarBox = styled(motion.div)`
  z-index: 4;
  position: absolute;
  width: 270px;
  height: 100%;
  background: #1a1a2c;
`;

const HorizontalLine = styled.div`
  margin-top: 120px;
  margin-bottom: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavBarItems = styled(motion.div)``;
