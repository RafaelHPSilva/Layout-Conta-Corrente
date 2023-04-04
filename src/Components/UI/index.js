import styled from "styled-components";
import { corPrimaria } from "../../Components/UI/Variaveis";

export const StyleBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const StyleBoxPlus = styled(StyleBox)`
  fontsize: 26px;
  padding: 20px 0;
`;

export const StyleDetalhe = styled.span`
  color: ${corPrimaria};
  font-size: 24px;
`;

export const StyleSaldo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const StyleIcone = styled.img`
  height: 25px;
  width: 25px;
`;

export const StyleIconeTheme = styled(StyleIcone)`
  filter: ${({ theme }) => theme.filter};
`;

export const StyleIconeMargin = styled(StyleIcone)`
margin-top = 2px;
`;

export const StyleBtn = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: ${corPrimaria};
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const StyleBtnTheme = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 4vh;
`;
