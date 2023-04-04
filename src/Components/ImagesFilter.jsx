import React from "react";

import Alimentacao from  '../assets/images/alimentacao.svg'
import Outros from  '../assets/images/outros.svg'
import Saude from  '../assets/images/saude.svg'
import Utilidades from  '../assets/images/utilidades.svg'
import Transporte from '../assets/images/transporte.svg'

import { StyleIconeTheme } from "./UI";

export default (type)=>{
  const Images={
  Restaurante: <StyleIconeTheme src={Alimentacao} alt='Restaurante'/>,
  Saude: <StyleIconeTheme src={Saude} alt='Saude'/>,
  Utilidades: <StyleIconeTheme src={Utilidades} alt='Utilidadees'/>,
  Transporte:<StyleIconeTheme src={Transporte} atlt='Transporte'/>,
  default: <StyleIconeTheme src={Outros} alt='Outros'/>,
  }
  return Images[type]|| Images.default
}

