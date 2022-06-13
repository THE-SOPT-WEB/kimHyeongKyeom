import styled from "styled-components";
import { useState, useRef } from "react";
import axios from "axios";

function ContentsCard() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [pubList, setPubLIst] = useState([]);
  const userInputLocation = useRef([]);

  const getLocation = () => {
    if ("geolocation" in navigator) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
          const {
            coords: { latitude: y, longitude: x },
          } = position;
          resolve({ x, y });
        });
      });
    }
  };

  async function 위치가져오기() {
    const result = await getLocation();
    return result;
  }

  async function 내근처맥주집가져오기() {
    const { x, y } = await 위치가져오기();

    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
        },
        params: {
          x: x,
          y: y,
          radius: 1000,
          query: "맥주",
        },
      }
    );

    setPubLIst(result.data.documents);
  }

  async function 특정지역맥주집가져오기(location = "혜화") {
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
        },
        params: {
          query: location + " " + "맥주",
        },
      }
    );
    setPubLIst(result.data.documents);
  }

  function SearchHandler() {
    isClicked
      ? 내근처맥주집가져오기()
      : 특정지역맥주집가져오기(userInputLocation.current.value);
  }

  return (
    <ContentsWrapper>
      <HeaderWrapper>
        <Title>맥주집 찾기 TypeScript</Title>
        <SelectMode>
          <h2>위치기반으로 검색하기</h2>
          <input type="checkbox" onClick={() => setIsClicked(!isClicked)} />
        </SelectMode>
        <Input disabled={isClicked} />
        <Button onClick={() => SearchHandler()}>검색하기</Button>
      </HeaderWrapper>
      <SearchWrapper>
        {pubList &&
          pubList.map(
            ({ place_name, place_url, phone, distance, adress_name }, idx) => {
              return (
                <ResultCard key={idx}>
                  <a href={place_url}>{place_name}</a>
                  <span>{phone || "번호 없음"}</span>
                  <span>{distance} km</span>
                  <span>{adress_name}</span>
                </ResultCard>
              );
            }
          )}
      </SearchWrapper>
    </ContentsWrapper>
  );
}

export default ContentsCard;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 51.2rem;
  height: 100%;
  min-height: 100vh;
  background-color: grey;
`;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 3rem;
`;

const SelectMode = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 1rem;
    height: 1rem;
  }
`;

const Input = styled.input`
  border: none;
  margin: 1rem;
`;

const Button = styled.button`
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

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

const ResultCard = styled.div`
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

a{
    color: white;
}
`;
