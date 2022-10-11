import { darken, lighten } from "polished";
import { ChangeEvent, useState } from "react";

import styled from "styled-components";
import { addCustomFact, fetchCatImage } from "../redux/CatFactSlice";
import { useAppDispatch } from "../redux/Hooks";

import Card from "./Card";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 40px;
`;

const Input = styled.input`
  width: 50%;
  aspect-ratio: 21/5;

  border: 4px solid black;
  border-radius: 16px;

  padding: 4px 8px;

  font-size: 32px;
`;

const Submit = styled.input`
  width: 80%;
  height: 64px;

  border: none;
  border-radius: 16px;

  color: white;
  background: ${({ theme }) => theme.mainColor};

  font-size: 32px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => lighten(0.05, theme.mainColor)};
  }
  &:active {
    background: ${({ theme }) => darken(0.01, theme.mainColor)};
  }
`;

function InputCard() {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<string>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const onSubmit = () => {
    if (input)
      dispatch(addCustomFact(input));
    dispatch(fetchCatImage("404"));
      setInput("");
  }

  return (
    <Card>
      <Wrap>
        <Input value={input ?? ''} onChange={onChange}/>
        <Submit type="submit" value="+" onClick={onSubmit}/>
      </Wrap>
    </Card>
  )
}

export default InputCard;