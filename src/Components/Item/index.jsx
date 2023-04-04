import React from "react";
import styled from "styled-components";


const Item = styled.div`
display:flex;
flex-direction:column;
`
export default ({value,type, from})=>{
  return(
    <Item>
    <span>{type}</span>
    <span>{from}</span>
    <span>{value}</span>
  </Item>
  );

}

