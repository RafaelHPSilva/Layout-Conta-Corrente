import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaEscuro, temaClaro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/UI/GlobalStyle";
import { StyleBtnTheme } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(true);

  const toggle = (tema) => {
    setTema((tema) => !tema);
  };
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <StyleBtnTheme onClick={toggle}>
        <SwitcherTema tema={tema} />
      </StyleBtnTheme>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
