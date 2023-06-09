import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";

const Container = styled.div`
background-color: ${({theme})=>theme.body};
min-height: 90vh;
padding: 0px 15vw;
`
const StyleConteudo = styled.section`
display: flex;
flex-direction: row;
color:${({theme})=>theme.text};
justify-content: space-between;
@media (max-width: 800px) {
  flex-direction: column;
}
`


export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <StyleConteudo>
        <Conta />
        <Extrato/>
      </StyleConteudo>
    </Container>
  );
};


