import styled from "styled-components";
import { GearSlot } from "../GearSlot/GearSlot";
import { useNewBuild } from "../../context/hooks/useNewBuild";
import { classImages } from "../../utils/classImages";

export const CharacterBuildBox = () => {
  const { charClass, setSelectedSlot } = useNewBuild();

  return (
    <CharacterBuildBoxContainer>
      <BuildBox background={classImages[charClass].background}>
        {/*Outside Gear*/}

        <ArmorBox onClick={() => setSelectedSlot("armor")}>
          <GearSlot type="armor" />
        </ArmorBox>
        <HelmBox onClick={() => setSelectedSlot("helm")}>
          <GearSlot type="helm" />
        </HelmBox>
        <Ring1Box onClick={() => setSelectedSlot("ring1")}>
          <GearSlot type="ring1" />
        </Ring1Box>
        <Earring1Box onClick={() => setSelectedSlot("earring1")}>
          <GearSlot type="earring1" />
        </Earring1Box>
        <Ring2Box onClick={() => setSelectedSlot("ring2")}>
          <GearSlot type="ring2" />
        </Ring2Box>
        <Earring2Box onClick={() => setSelectedSlot("earring2")}>
          <GearSlot type="earring2" />
        </Earring2Box>
        <GlovesBox onClick={() => setSelectedSlot("gloves")}>
          <GearSlot type="gloves" />
        </GlovesBox>
        <BootsBox onClick={() => setSelectedSlot("boots")}>
          <GearSlot type="boots" />
        </BootsBox>
        <NecklaceBox onClick={() => setSelectedSlot("necklace")}>
          <GearSlot type="necklace" />
        </NecklaceBox>
        <BeltBox onClick={() => setSelectedSlot("belt")}>
          <GearSlot type="belt" />
        </BeltBox>
        <SecondaryBox onClick={() => setSelectedSlot("secondary_weapon")}>
          <GearSlot type="secondary_weapon" />
        </SecondaryBox>
        <PrimaryBox onClick={() => setSelectedSlot("primary_weapon")}>
          <GearSlot type="primary_weapon" />
        </PrimaryBox>
        <AwakenBox onClick={() => setSelectedSlot("awakening_weapon")}>
          <GearSlot type="awakening_weapon" />
        </AwakenBox>
        {/*Inside Gear*/}

        <ArmorOutfitBox>
          <GearSlot type="armor_outfit" />
        </ArmorOutfitBox>
        <HelmOutfitBox>
          <GearSlot type="helm_outfit" />
        </HelmOutfitBox>
        <GlovesOutfitBox>
          <GearSlot type="gloves_outfit" />
        </GlovesOutfitBox>
        <BootsOutfitBox>
          <GearSlot type="boots_outfit" />
        </BootsOutfitBox>
        <SecondaryOutfitBox>
          <GearSlot type="secondary_weapon_outfit" />
        </SecondaryOutfitBox>
        <PrimaryOutfitBox>
          <GearSlot type="primary_weapon_outfit" />
        </PrimaryOutfitBox>
        <SwinOutfitBox>
          <GearSlot type="swin_outfit" />
        </SwinOutfitBox>
        <AwakeningOutfitBox>
          <GearSlot type="awakening_weapon_outfit" />
        </AwakeningOutfitBox>

        <StoneBox>
          <GearSlot type="stone" />
        </StoneBox>
      </BuildBox>
    </CharacterBuildBoxContainer>
  );
};

const CharacterBuildBoxContainer = styled.div`
  @media (max-width: 410px) {
    transform: scale(50%);
  }
`;

const BuildBox = styled.div`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  margin-top: 40px;
  position: relative;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  border: 1px solid #707070;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5),
    0px 3px 5px rgba(0, 0, 0, 0.5) inset;
`;

const ArmorBox = styled.div`
  position: absolute;
  right: 75px;
  top: -15px;
`;
const Ring1Box = styled.div`
  position: absolute;
  right: 15px;
  top: 30px;
`;
const Ring2Box = styled.div`
  position: absolute;
  right: -15px;
  top: 95px;
`;
const GlovesBox = styled.div`
  position: absolute;
  right: -17px;
  top: 165px;
`;
///

const HelmBox = styled.div`
  position: absolute;
  left: 75px;
  top: -15px;
`;
const Earring1Box = styled.div`
  position: absolute;
  left: 10px;
  top: 30px;
`;
const Earring2Box = styled.div`
  position: absolute;
  left: -15px;
  top: 95px;
`;
const BootsBox = styled.div`
  position: absolute;
  left: -17px;
  top: 165px;
`;

const NecklaceBox = styled.div`
  position: absolute;
  right: 9px;
  top: 230px;
`;
const BeltBox = styled.div`
  position: absolute;
  left: 9px;
  top: 230px;
`;

const SecondaryBox = styled.div`
  position: absolute;
  right: 67px;
  top: 280px;
`;
const PrimaryBox = styled.div`
  position: absolute;
  left: 67px;
  top: 280px;
`;

const AwakenBox = styled.div`
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  bottom: -14px;
`;

const StoneBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ArmorOutfitBox = styled.div`
  position: absolute;
  top: 45px;
  right: 106px;
`;
const HelmOutfitBox = styled.div`
  position: absolute;
  top: 45px;
  left: 106px;
`;
const GlovesOutfitBox = styled.div`
  position: absolute;
  top: 102px;
  right: 56px;
`;
const BootsOutfitBox = styled.div`
  position: absolute;
  top: 102px;
  left: 56px;
`;
const SecondaryOutfitBox = styled.div`
  position: absolute;
  top: 164px;
  right: 54px;
`;
const PrimaryOutfitBox = styled.div`
  position: absolute;
  top: 164px;
  left: 54px;
`;
const SwinOutfitBox = styled.div`
  position: absolute;
  top: 220px;
  right: 105px;
`;
const AwakeningOutfitBox = styled.div`
  position: absolute;
  top: 220px;
  left: 105px;
`;
