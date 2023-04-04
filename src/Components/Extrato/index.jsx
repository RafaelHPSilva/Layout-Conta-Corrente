import React from "react";
import {  extratoLista } from "../../info";
import {StyleBox,StyleBtn } from '../UI/index'
import Items from "../Items";

const Extrato = ()=>{
  return(
    <StyleBox>
      {
        extratoLista.updates.map(({id,type,value,date,from})=>{
          return(
        <Items key={id} type={type} value={value} date={date} from={from}/>
      )}
        )}
      <StyleBtn>Ver Mais</StyleBtn>
    </StyleBox>
  )
} 
export default Extrato

