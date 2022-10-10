import styled from "styled-components";
import { lighten, darken } from "polished";

import Card from "./Card";
import { useAppDispatch } from "../redux/Hooks";
import { fetchCatFact } from "../redux/CatFactSlice";

const PlusIcon = styled.div`
  background: ${({ theme }) => lighten(0.1, theme.backgroundColor)};
  width: 160px;
  height: 160px;
  border-radius: 50%;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &::before {
    content: "+";
    position: absolute;
    top: -16%;

    color: ${({ theme }) => theme.mainColor};

    font-size: 160px;
  }

  &:hover {
    background: ${({ theme }) => lighten(0.125, theme.backgroundColor)};
  }
  &:active {
    background: ${({ theme }) => darken(0.01, theme.backgroundColor)};
  }
`;

function ControlCard() {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(fetchCatFact());
  }

  return (
    <Card>
        <PlusIcon onClick={onClick}/>
    </Card>
  )
}

export default ControlCard;