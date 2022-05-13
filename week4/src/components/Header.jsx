import styled from "styled-components";

const HeaderBlock = styled.header`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid white;

  h1 {
    font-size: 36px;
    color: #20c997;
  }
  h2 {
    color: #38d9a9;
  }

  #check {
    width: 30px;
    height: 17px;
    margin: 0;
  }

  input {
    border: none;
    background: none;
    margin: 10px;
    padding: 5px;
    border-bottom: 1px solid white;
    text-align: center;
    &::placeholder {
      color: #ffffff61;
    }
  }
  button {
    width: 150px;
    height: 30px;
    margin-bottom: 15px;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 5px;

    background: none;
    color: white;
    &:hover {
      background-color: #38d9a989;
    }
    &:active {
      background-color: #38d9a9e4;
    }
  }
`;

function Header() {
  return (
    <HeaderBlock>
      <h1>이동네 맥주대장이 누구냐?</h1>
      <h2>
        지역기반으로 검색하기
        <input type="checkBox" id="check" />
      </h2>
      <div>👇🏻 원하는 지역을 검색하세요 👇🏻</div>
      <input typeof="text" placeholder="검색" />
      <button>검색하기</button>
    </HeaderBlock>
  );
}

export default Header;
