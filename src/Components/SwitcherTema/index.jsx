import ThemeOn from "../../assets/images/themeOn.svg";
import React from "react";
import ThemeOff from "../../assets/images/themeOff.svg";
import { StyleIcone } from "../UI/index";


 const temaClaro = <StyleIcone src= {ThemeOn} alt='Tema Claro'/>
 const temaEscuro = <StyleIcone src= {ThemeOff} alt='Tema Escuro'/>


export default ({tema})=>( tema? temaEscuro: temaClaro)
  

