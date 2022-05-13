import React from "react";
import axios from "axios";
import styled from "styled-components";
import Item from "./Item";

const ListBlock = styled.div`
  width: 380px;

  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function StoreList() {
  return (
    <ListBlock>
      <Item title="TEST" adress="주소" contact="전화번호" />
    </ListBlock>
  );
}

export default StoreList;
