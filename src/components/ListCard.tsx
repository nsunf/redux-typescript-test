import { useAppSelector } from "../redux/Hooks";

import styled from "styled-components"

import Card from "./Card";

const FactList = styled.ul`
  padding: 0;
  list-style: none;
`;

const FactItem = styled.li`
  font-size: 20px;
  padding: 8px 0;
  border-bottom: 1px solid black;
`;

function ListCard() {
  const catFacts = useAppSelector(state => state.catFact.facts);

  return (
    <Card>
      <FactList>
        {catFacts.map((fact, i) => <FactItem key={"fact_" + i}>{fact}</FactItem>)}
      </FactList>
    </Card>
  )
}

export default ListCard