import styled from "styled-components";
import ContentsCard from "./components/ContentsCard.jsx";
import GlobalStyle from "./GlobalStyle.js";

function App() {
  return (
    <>
    <GlobalStyle />
    <MainWarpper>
        <ContentsCard />
    </MainWarpper>
    </>
  );
}

export default App;

const MainWarpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
