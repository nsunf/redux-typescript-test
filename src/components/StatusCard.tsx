import { useAppSelector } from "../redux/Hooks";

import styled from "styled-components";

import Card from "./Card";

const Wrap = styled.div`
  font-size: 160px;

  color: ${({ theme }) => theme.mainColor};
`;

function StatusCard() {
  const count = useAppSelector(state => state.catFact.count);

  return (
    <Card>
      <Wrap>
        {count}
      </Wrap>
    </Card>
  )
}

export default StatusCard;