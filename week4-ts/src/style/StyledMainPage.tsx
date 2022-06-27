import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 51.2rem;
  height: 100%;
  min-height: 100vh;
  background-color: grey;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 3rem;
`;

export const SelectMode = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 1rem;
    height: 1rem;
  }
`;

export const Input = styled.input`
  border: none;
  margin: 1rem;
`;

export const Button = styled.button`
  border: none;
  margin: 1rem;
  width: 10rem;
  height: 1.5rem;
  border: 1px solid red;
  font-size: 1rem;
  font-weight: 600;
  background-color: tomato;
  &:hover {
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

export const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  border: 3px solid white;
  margin: 1rem;
  padding: 1rem;
  border-radius: 16px;
  width: 25rem;
  height: 6rem;

  a {
    color: white;
  }
`;