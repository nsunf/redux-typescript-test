import styled from "styled-components";

const CardBlock = styled.div`
  ${({ theme }) => `
    background: ${theme.cardBackgroundColor};
    border: 20px solid ${theme.mainColor};
  `}

  max-width: 500px;
  width: 100%;
  aspect-ratio: 1/1;

  border-radius: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  children: JSX.Element|JSX.Element[];
}

function Card({ children }: Props) {
  return(
    <CardBlock>
      {children}
    </CardBlock>
  )
}

export default Card;