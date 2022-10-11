import styled from "styled-components";

import Grid from "./components/Grid";

const AppBlock = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1200px;

  margin: 0 auto;
`;


function App() {
  return (
    <AppBlock>
      <Grid />
    </AppBlock>
  );
}

export default App;
