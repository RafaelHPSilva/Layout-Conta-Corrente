import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import { StyleBox, StyleBoxPlus, StyleDetalhe, StyleSaldo, StyleIcone, StyleIconeTheme, StyleIconeMargin, StyleBtn } from '../UI/index'


const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <StyleBox>
      <h2>Conta</h2>
      <StyleBoxPlus>
        Saldo disponível{" "}
        <span>
          <StyleIconeTheme src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <StyleSaldo>
            <StyleDetalhe>R$</StyleDetalhe> 0,00{" "}
          </StyleSaldo>
        ) : null}
      </StyleBoxPlus>

      <StyleBtn onClick={toggleHandler}>
        <StyleIconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </StyleBtn>
    </StyleBox>
  );
};

export default Conta;
