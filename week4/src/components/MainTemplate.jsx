import React from "react";
import styled from "styled-components";

export const MainTemplateBlock = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 512px;
  height: 100%;
  min-height: 85vh;

  position: relative;
  background: white;
  background-color: #495057;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgb(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;


function Maintemplate({children}){
return (
        <MainTemplateBlock>{children}</MainTemplateBlock>
)
}
export default Maintemplate;