import { ThemeProvider } from 'styled-components';
import styled from "styled-components";

import Grid from "./components/Grid";

const AppBlock = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1200px;

  margin: 0 auto;
`;

const theme = {
  backgroundColor: 'rgb(190, 194, 211)',
  mainColor: '#6150cf',
  cardBackgroundColor: 'white'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBlock>
        <Grid />
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
