import styled from "styled-components";
import { useNewBuild } from "../../context/hooks/useNewBuild";

export const GearSlot = ({ type, ...rest }) => {
  const { selectedSlot, selectedGear } = useNewBuild();

  return (
    <>
      <GearBox
        {...rest}
        selected_gear={selectedGear[type]}
        selected_slot={selectedSlot}
        slot_type={type}
      >
        {type && (
          <Gear
            src={selectedGear[type]?.image || selectedGear[type]?.defaultImage}
            alt="teste"
          />
        )}
      </GearBox>
    </>
  );
};

const GearBox = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;

  background-color: rgba(41, 41, 54, 0.5);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7) inset;
  border: 2px solid ${(props) => props.selected_gear?.color || "#777"};

  transition: all 0.3s;
  ${(props) => {
    return props.selected_slot === props.slot_type
      ? `border-color: ${props.selected_gear?.color || "#fff"};
         box-shadow: 0 0 10px ${
           props.selected_gear?.color || "rgba(255,255,255, .7)"
         };`
      : ``;
  }}

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 410px) {
    width: 40px;
    height: 40px;
  }
`;

const Gear = styled.img``;
