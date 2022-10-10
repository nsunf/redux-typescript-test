import styled from "styled-components";

import ControlCard from "./ControlCard";
import InputCard from "./InputCard";
import ListCard from "./ListCard";
import StatusCard from "./StatusCard";

const GridBlock = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
  grid-gap: 20px;
`;


function Grid() {
  return (
    <GridBlock>
      <ControlCard />
      <StatusCard />
      <InputCard />
      <ListCard />
    </GridBlock>
  )
}

export default Grid;