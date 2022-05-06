import styled from "styled-components";

export const MainScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  height: 100vh;
  position: relative;
`;

export const Header = styled.header`
  font-size: 2.5rem;
  margin: 2rem 0;
`;

export const Round = styled.div`
  font-size: 3rem;
  margin: 1.5rem 0;
  color: tomato;
  font-weight: bold;
`;

export const GameSection = styled.section`
  display: flex;
  justify-content: center;
  article {
    width: 50%;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    img {
      width: 500px;
    }
    div {
      position: absolute;
      top: 75%;
      left: 50%;
      font-size: 3rem;
      color: white;
      transform: translate(-50%, -50%);
    }
  }
`;

export const ResultSection = styled.section`
  display: flex;
  justify-content: center;
  article {
    width: 50%;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    img {
      width: 600px;
    }
    div {
      position: absolute;
      top: 75%;
      left: 50%;
      font-size: 4rem;
      color: white;
      transform: translate(-50%, -50%);
    }
  }
`;
